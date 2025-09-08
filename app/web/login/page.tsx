"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer"
import GuestLayout from "@/app/component/common/layout/GuestLayout"
import LoginFormCard from "@/app/component/login/LoginFormCard"
import useLogin from "@/app/hook/useLogin"
import { Box } from "@mui/material"
import { redirect } from "next/navigation"
import { FC, useEffect } from "react"

const LoginPage: FC = () => {
    const {loginCheck, loggedIn} = useLogin()

    useEffect(() => {
        loginCheck()
    }, [])

    useEffect(() => {
        loggedIn && redirect("/web/user")
    }, [loggedIn])

    return (
        <GuestLayout>
            <NormalContainer>
                <Box>
                    
                    <LoginFormCard />

                </Box>
            </NormalContainer>
        </GuestLayout>
    )
}

export default LoginPage