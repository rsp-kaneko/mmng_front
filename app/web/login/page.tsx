"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer"
import GuestLayout from "@/app/component/common/layout/GuestLayout"
import LoginFormCard from "@/app/component/login/LoginFormCard"
import { Box } from "@mui/material"
import { FC } from "react"

const LoginPage: FC = () => {
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