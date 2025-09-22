"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer"
import DefaultLayout from "@/app/component/common/layout/DefaultLayout"
import LoginFormCard from "@/app/component/login/LoginFormCard"
import { Box } from "@mui/material"
import { FC } from "react"

const LoginPage: FC = () => {

    return (
        <DefaultLayout type="guest">
            <NormalContainer>
                <Box>
                    
                    <LoginFormCard />

                </Box>
            </NormalContainer>
        </DefaultLayout>
    )
}

export default LoginPage