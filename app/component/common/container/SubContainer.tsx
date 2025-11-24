"use client"

import { Box } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const SubContainer: FC<Props> = (props) => {
    const {children} = props

    return (
        <Box
            sx={{
                mt: 4,
                mx: 3,
            }}
        >
            {children}
        </Box>
    )
}

export default SubContainer