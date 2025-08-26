"use client"

import CustomContext from "@/app/context/CustomContext"
import useLogin from "@/app/hook/useLogin"
import { FC, ReactNode, useState } from "react"

type Props = {
    children: ReactNode
}

const AuthLayout: FC<Props> = (props) => {
    const {children} = props
    const {loginCheck} = useLogin()
    const [refresh, setRefresh] = useState(0)

    return (
        <CustomContext.Provider
            value={{
                REFRESH: refresh,
                SET_REFRESH: setRefresh
            }}
        >
            {children}
        </CustomContext.Provider>
    )
}

export default AuthLayout