import { useContext, useState } from "react"
import { User } from "./useUser"
import CustomContext from "../context/CustomContext"

type Bike = {
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

type BikeRequest = {
    bikeId?: number
    userId?: number
    bikeName?: string
    makerName?: string
    size?: number
    wheelBase?: number
    bbShell?: number
}

const useBike = () => {
    const {USER_ID} = useContext(CustomContext)
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

    


    return {
        bikeLoad,
        bikes,
        bikeData,
        setBikeData,
    }
}