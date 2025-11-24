"use client"

import { Box } from "@mui/material"
import { FC, memo } from "react"

const DefaultAside: FC = memo(() => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: 240,
                bgcolor: "#0af",
                display: "none",
                "@media screen and (min-width: 900px)": {
                    display: "block"
                }
            }}
        >

        </Box>
    )
})

DefaultAside.displayName = "DefaultAside"
export default DefaultAside