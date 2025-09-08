"use client"

import CustomContext from "@/app/context/CustomContext"
import useLogin from "@/app/hook/useLogin"
import { FC, ReactNode, useEffect, useState } from "react"
import { Box, CircularProgress } from "@mui/material"
import AuthHeader from "../header/AuthHeader"

type Props = {
    children: ReactNode
}

const AuthLayout: FC<Props> = (props) => {
    const {children} = props
    const {loginCheck, loggedIn} = useLogin()
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        loginCheck()
    }, [])

    return (
        <CustomContext.Provider
            value={{
                REFRESH: refresh,
                SET_REFRESH: setRefresh,
            }}
        >
            <AuthHeader />

            {loggedIn ? (
                <>{children}</>
            ) : (
                <Box sx={{
                    position: "absolute",
                    inset: 0,
                    m: "auto",
                    textAlign: "center",
                    width: 120,
                    height: 120,
                }}>
                    <CircularProgress />
                </Box>
            )}
        </CustomContext.Provider>
    )
}

export default AuthLayout