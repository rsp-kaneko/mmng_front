"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer";
import AuthLayout from "@/app/component/common/layout/AuthLayout";
import { Box } from "@mui/material";
import { FC } from "react";

const UserPage: FC = () => {
    return (
        <AuthLayout>
            <NormalContainer>
                <Box>
                    Security Page
                </Box>
            </NormalContainer>
        </AuthLayout>
    )
}

export default UserPage