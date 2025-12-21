import { useCallback, useContext, useState } from "react"
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
    const [partsError, setPartsError] = useState({
        bikeId: "",
        partsCategoryId: "",
        partsName: "",
        changeDate: "",
        price: "",
    })

    /**
         * エラーメッセージ
         */
        const validation = (data: PartsRequest) => {
            let errorFlg: boolean = false
            if (data.bikeId === 0) {
                errorFlg = true
                setPartsError({...partsError, bikeId: "選択必須"})
            }
            if (data.partsCategoryId === 0) {
                errorFlg = true
                setPartsError({...partsError, partsCategoryId: "選択必須"})
            }
            if (data.partsName === "") {
                errorFlg = true
                setPartsError({...partsError, partsName: "必須"})
            } else {
                if (data.partsName!.length > 100) {
                    errorFlg = true
                    setPartsError({...partsError, partsName: "100文字以内"})
                }
            }
            if (data.changeDate === "") {
                errorFlg = true
                setPartsError({...partsError, changeDate: "必須"})
            }
            if (data.price! < 1) {
                errorFlg = true
                setPartsError({...partsError, price: "￥1以上"})
            }
            return errorFlg
        }

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
    const createParts = useCallback((data: PartsRequest) => {
        setPartsLoad(true)
        if (validation(data)) return
        const request = JSON.stringify(data)
        useAxios("post", "/api/createParts", request)
            .then((response) => {
                if (response.status == 200) {
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
    }, [])

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