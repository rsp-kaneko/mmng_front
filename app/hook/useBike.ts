import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react"
import { User } from "./useUser"
import CustomContext from "../context/CustomContext"
import useAxios from "./useAxios"
import Swal from "sweetalert2"
import { MessageTooltipRequest } from "../component/common/tooltip/MessageTooltip"

export type Bike = {
    bikeId: number
    user: User
    bikeName: string
    makerName: string
    size: number
    wheelBase: number
    bbShell: number
    deleteFlg: number
    createdAt: string
    updatedAt: string
}

export type BikeRequest = {
    updateType?: string
    bikeId?: number
    userId?: number
    bikeName?: string
    makerName?: string
    size?: number
    wheelBase?: number
    bbShell?: number
}

const useBike = () => {
    const {USER_ID, SET_REFRESH} = useContext(CustomContext)
    const [bikeLoad, setBikeLoad] = useState(false)
    const [bikes, setBikes] = useState<Array<Bike>>([])
    const [bikeMessage, setBikeMessage] = useState<MessageTooltipRequest>({
        type: "",
        status: "info",
        message: "",
    })
    const [bikeData, setBikeData] = useState<BikeRequest>({
        updateType: "",
        bikeId: 0,
        userId: USER_ID,
        bikeName: "",
        makerName: "",
        size: 0,
        wheelBase: 0,
        bbShell: 0,
    })

    /**
     * エラーメッセージ
     */
    const validation = (data: BikeRequest) => {
        let errMsg: string | null = null
        if (data.updateType == "makerName" || data.updateType == "all") {
            const makerName = data.makerName
            if (makerName) {
                if (makerName.length < 1 && makerName.length > 100) {
                    errMsg = "メーカー名は100文字まで"
                }
            } else {
                errMsg = "入力必須"
            }
        }
        if (data.updateType == "bikeName" || data.updateType == "all") {
            if (data.bikeName) {
                const bikeName = data.bikeName
                if (bikeName.length < 1 && bikeName.length > 100) {
                    errMsg = "バイク名は100文字まで"
                }
            } else {
                errMsg = "入力必須"
            }
        }
        if (data.updateType == "size" || data.updateType == "all") {
            const size = data.size
            if (size) {
                if (size < 1) {
                    errMsg = "サイズは最低1以上"
                }
            } else {
                errMsg = "入力必須"
            }
        }
        if (data.updateType == "wheelBase" || data.updateType == "all") {
            const wheelBase = data.wheelBase
            if (wheelBase) {
                if (wheelBase < 1) {
                    errMsg = "ホイール幅は最低1以上"
                }
            } else {
                errMsg = "入力必須"
            }
        }
        if (data.updateType == "bbShell" || data.updateType == "all") {
            const bbShell = data.bbShell
            if (bbShell) {
                if (bbShell < 1) {
                    errMsg = "BBシェル幅は最低1以上"
                }
            } else {
                errMsg = "入力必須"
            }
        }

        setBikeMessage({
            type: data.updateType!,
            message: errMsg ?? "",
            status: "error",
        })
        return errMsg
    }

    /**
     * Form初期化
     */
    const resetBikeForm = useCallback((setData: Dispatch<SetStateAction<BikeRequest>>) => {
        setData({
            updateType: "",
            bikeId: 0,
            userId: USER_ID,
            bikeName: "",
            makerName: "",
            size: 0,
            wheelBase: 0,
            bbShell: 0,
        })
    }, [])
    
    /**
     * ユーザーの所有バイク全取得
     */
    const getMyAllBikes = useCallback((userId: number) => {
        setBikeLoad(true)
        const request = JSON.stringify({userId})
        useAxios("post", "/api/getMyAllBikes", request)
        .then((response) => {
            if (response.status == 200) {
                setBikes(response.bikeList)
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setBikeLoad(false))
    }, [])

    /**
     * 新規バイク登録
     */
    const createBike = useCallback((data: BikeRequest) => {
        setBikeLoad(true)
        const errMsg: string | null = validation(data)
        if (errMsg) {
            Swal.fire({
                title: errMsg,
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
            })
            setBikeLoad(false)
            return
        }
        const request = JSON.stringify(data)
        useAxios("post", "/api/createBike", request)
            .then((response) => {
                if (response.status == 200) {
                    SET_REFRESH!((cnt) => cnt + 1)
                    Swal.fire({
                        title: "バイクを追加しました",
                        html: `バイク名：${data.bikeName}`,
                        icon: "success",
                    })
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setBikeLoad(false))
    }, [])

    /**
     * バイクデータ更新
     */
    const updateBike = useCallback((data: BikeRequest) => {
        setBikeLoad(true)
        const errMsg: string | null = validation(data)
        if (errMsg) return

        const request = JSON.stringify(data)
        useAxios("put", "/api/updateBike", request)
            .then((response) => {
                if (response.status == 200) {
                    setBikeMessage({
                        type: data.updateType!,
                        message: "更新しました",
                        status: "success",
                    })
                } else {
                    console.error(response.message)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setBikeLoad(false))
    }, [])

    /**
     * バイクデータ削除
     */
    const deleteBike = useCallback((data: BikeRequest) => {
        Swal.fire({
            title: "バイクデータを削除します、本当によろしいですか？",
            html: `
                <div>メーカー名： ${data.makerName}</div>
                <div>バイク名： ${data.bikeName}</div>
            `,
            icon: "warning",
            confirmButtonText: "はい",
            cancelButtonText: "いいえ",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                setBikeLoad(true)
                useAxios("delete", `/api/deleteBike/${data.bikeId}`)
                    .then((response) => {
                        if (response.status == 200) {
                            SET_REFRESH!((cnt) => cnt + 1)
                            Swal.fire({
                                title: "削除しました",
                                icon: "success",
                                timer: 1500,
                                timerProgressBar: true,
                            })
                        } else {
                            console.error(response.message)
                        }
                    })
                    .catch((error) => console.error(error))
                    .finally(() => setBikeLoad(false))
            }
        })
        
    }, [])

    return {
        bikeLoad,
        bikes,
        bikeData,
        bikeMessage,
        setBikeData,
        resetBikeForm,
        getMyAllBikes,
        createBike,
        updateBike,
        deleteBike,
    }
}

export default useBike