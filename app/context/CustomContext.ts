import { createContext, Dispatch, SetStateAction } from "react"

const CustomContext = createContext({} as {
    REFRESH?: number
    SET_REFRESH?: Dispatch<SetStateAction<number>>
})

export default CustomContext