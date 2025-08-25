"use client"

import { Container } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const NormalContainer: FC<Props> = (props) => {
    const {children} = props

    return (
        <Container>
            {children}
        </Container>
    )
}

export default NormalContainer