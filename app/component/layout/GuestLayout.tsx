"use client"

import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const GuestLayout: FC<Props> = (props) => {
    const {children} = props

    return (
        <>
            {children}
        </>
    )
}

export default GuestLayout