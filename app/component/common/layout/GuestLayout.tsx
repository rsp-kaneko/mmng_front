"use client"

import { FC, ReactNode } from "react"
import GuestHeader from "../header/GuestHeader"

type Props = {
    children: ReactNode
}

const GuestLayout: FC<Props> = (props) => {
    const {children} = props

    return (
        <>
            <GuestHeader />

            {children}
        </>
    )
}

export default GuestLayout