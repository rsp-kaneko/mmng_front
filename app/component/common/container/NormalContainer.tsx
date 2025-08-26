"use client"

import { Container } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const NormalContainer: FC<Props> = (props) => {
    const {children} = props

    return (
        <Container
            sx={{
                mt: 4
            }}
        >
            {children}
        </Container>
    )
}

export default NormalContainer