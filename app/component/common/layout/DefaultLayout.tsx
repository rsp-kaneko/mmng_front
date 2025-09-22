"use client"

import CustomContext from "@/app/context/CustomContext"
import useLogin from "@/app/hook/useLogin"
import { FC, ReactNode, useEffect, useState } from "react"
import { Box, CircularProgress } from "@mui/material"
import DefaultHeader from "../header/DefaultHeader"

type Props = {
    children: ReactNode
    type: "auth" | "guest"
}

const DefaultLayout: FC<Props> = (props) => {
    const {children, type} = props
    const {loginCheck, loggedIn, authData} = useLogin()
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        loginCheck(type)
    }, [])

    return (
        <CustomContext.Provider
            value={{
                REFRESH: refresh,
                SET_REFRESH: setRefresh,
                AUTH: authData.auth,
                USER_ID: authData.userId,
                USER_NAME: authData.userName
            }}
        >
            <DefaultHeader />

            {loggedIn || type == "guest" ? (
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

export default DefaultLayout