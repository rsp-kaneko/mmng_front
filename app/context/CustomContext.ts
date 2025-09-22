import { createContext, Dispatch, SetStateAction } from "react"

const CustomContext = createContext({} as {
    REFRESH?: number
    SET_REFRESH?: Dispatch<SetStateAction<number>>
    AUTH?: boolean
    USER_ID?: number
    USER_NAME?: string
})

export default CustomContext