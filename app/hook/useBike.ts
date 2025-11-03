import { useCallback, useContext, useState } from "react"
import { User } from "./useUser"
import CustomContext from "../context/CustomContext"
import useAxios from "./useAxios"
import Swal from "sweetalert2"

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
    const [bikeData, setBikeData] = useState<BikeRequest>({
        bikeId: 0,
        userId: USER_ID,
        bikeName: "",
        makerName: "",
        size: 0,
        wheelBase: 0,
        bbShell: 0,
    })

    const validation = (data: BikeRequest) => {
        let errMsg = ""
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
        if (errMsg) {
            Swal.fire({
                title: errMsg,
                icon: "error",
                timer: 1500,
                timerProgressBar: true,
            })
            return
        }
    }

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

    const createBike = useCallback((data: BikeRequest) => {
        setBikeLoad(true)
        validation(data)
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

    const updateBike = useCallback((data: BikeRequest) => {
        setBikeLoad(true)
        validation(data)
        const request = JSON.stringify(data)
        useAxios("put", "/api/updateBike", request)
            .then((response) => {
                if (response.status == 200) {
                    SET_REFRESH!((cnt) => cnt + 1)
                    Swal.fire({
                        title: "更新しました",
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
    }, [])

    const deleteBike = useCallback((bikeId: number) => {
        setBikeLoad(true)
        const request = JSON.stringify({bikeId})
        useAxios("delete", "/api/deleteBike", request)
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
    }, [])

    return {
        bikeLoad,
        bikes,
        bikeData,
        setBikeData,
        getMyAllBikes,
        createBike,
        updateBike,
        deleteBike,
    }
}

export default useBike