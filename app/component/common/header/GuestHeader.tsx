"use client"

import { Box } from "@mui/material"
import Link from "next/link"
import { FC } from "react"

const GuestHeader: FC = () => {
    return (
        <Box
            sx={{
                bgcolor: "#333",
                color: "#fff",
                height: 64,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 8,
                "@media screen and (max-width: 500px)": {
                    px: 2
                }
            }}
        >
            <Box>
                <h5>MMNG</h5>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                }}
            >
                <Link href="/web">Top</Link>
                <Link href="/web/login">Login</Link>
            </Box>
        </Box>
    )
}

export default GuestHeader