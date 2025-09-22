"use client"

import { FC } from "react"
import NormalContainer from "../component/common/container/NormalContainer"
import { Box } from "@mui/material"
import DefaultLayout from "../component/common/layout/DefaultLayout"

const TopPage: FC = () => {
    return (
        <DefaultLayout type="guest">
            <NormalContainer>
                <Box>
                    
                </Box>
            </NormalContainer>
        </DefaultLayout>
    )
}

export default TopPage