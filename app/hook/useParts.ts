import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react"
import useAxios from "./useAxios"
import { Bike } from "./useBike"
import Swal from "sweetalert2"
import CustomContext from "../context/CustomContext"

export type PartsCategory = {
    partsCategoryId: number
    categoryName: string
    iconUrl: string
}

export type Parts = {
    partsId: number
    bike: Bike
    partsCategory: PartsCategory
    partsName: string
    imageUrl: string
    changeDate: string
    price: number
    deleteFlg: number
    createdAt: string
    updatedAt: string
}

export type PartsRequest = {
    partsId?: number
    bikeId?: number
    partsCategoryId?: number
    partsName?: string
    imageUrl?: File | null
    changeDate?: string
    price?: number
}

export type PartsError = {
    bikeId: string
    partsCategoryId: string
    partsName: string
    changeDate: string
    price: string
}

const useParts = () => {
    const {SET_REFRESH} = useContext(CustomContext)
    const [partsLoad, setPartsLoad] = useState(false)
    const [partsCategories, setPartsCategories] = useState<Array<PartsCategory>>([])
    const [partsData, setPartsData] = useState<PartsRequest>({
        partsId: 0,
        bikeId: 0,
        partsCategoryId: 0,
        partsName: "",
        imageUrl: null,
        changeDate: "",
        price: 0,
    })
    const [partsError, setPartsError] = useState<PartsError>({
        bikeId: "",
        partsCategoryId: "",
        partsName: "",
        changeDate: "",
        price: "",
    })

    /**
     * エラーメッセージ
     */
    const validation = useCallback((data: PartsRequest) => {
        let errorFlg: boolean = false
        let bikeId = ""
        let partsCategoryId = ""
        let partsName = ""
        let changeDate = ""
        let price = ""
        if (data.partsCategoryId === 0) {
            errorFlg = true
            partsCategoryId = "選択必須"
        }
        if (data.bikeId === 0) {
            errorFlg = true
            bikeId = "選択必須"
        }
        if (data.partsName === "") {
            errorFlg = true
            partsName = "必須"
        } else {
            if (data.partsName!.length > 100) {
                errorFlg = true
                partsName = "100文字以内"
            }
        }
        if (data.changeDate === "") {
            errorFlg = true
            changeDate = "必須"
        }
        if (data.price! < 1) {
            errorFlg = true
            price = "￥1以上"
        }

        setPartsError({
            partsCategoryId,
            bikeId,
            partsName,
            changeDate,
            price,
        })
        return errorFlg
    }, [])

    /**
     * PartsCategory全取得
     */
    const getAllPartsCategories = useCallback(() => {
        useAxios("get", "/api/getAllPartsCategories")
            .then((response) => {
                if (response.status == 200) {
                    setPartsCategories(response.partsCategoryList)
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
    }, [])

    /**
     * Parts 登録
     */
    const createParts = useCallback((data: PartsRequest, onCloseModal: () => void) => {
        setPartsLoad(true)
        if (validation(data)) {
            setPartsLoad(false)
            return
        }
        const request = JSON.stringify(data)
        useAxios("post", "/api/createParts", request)
            .then((response) => {
                if (response.status == 200) {
                    onCloseModal()
                    SET_REFRESH!((refresh) => refresh + 1)
                    Swal.fire({
                        title: "パーツが登録されました",
                        icon: "success",
                        timer: 1500,
                        timerProgressBar: true,
                    })
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setPartsLoad(false))
    }, [validation, SET_REFRESH])

    return {
        partsLoad,
        partsCategories,
        partsData,
        partsError,
        setPartsData,
        getAllPartsCategories,
        createParts,
    }
}

export default useParts