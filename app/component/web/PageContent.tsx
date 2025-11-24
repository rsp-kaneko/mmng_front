"use client"

import { Box } from "@mui/material"
import { FC } from "react"
import DefaultAside from "../common/aside/DefaultAside"
import DataSection from "./DataSection"

const PageContent: FC = () => {
    return (
        <Box>

            <DefaultAside />

            <DataSection />

        </Box>
    )
}

export default PageContent