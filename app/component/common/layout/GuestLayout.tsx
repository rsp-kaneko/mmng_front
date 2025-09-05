"use client"

import { FC, ReactNode, useState } from "react"
import GuestHeader from "../header/GuestHeader"
import CustomContext from "@/app/context/CustomContext"

type Props = {
    children: ReactNode
}

const GuestLayout: FC<Props> = (props) => {
    const {children} = props
    const [refresh, setRefresh] = useState(0)

    return (
        <CustomContext.Provider
            value={{
                REFRESH: refresh,
                SET_REFRESH: setRefresh,
            }}
        >
            <GuestHeader />

            {children}
        </CustomContext.Provider>
    )
}

export default GuestLayout