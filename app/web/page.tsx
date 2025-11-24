"use client"

import { FC } from "react"
import DefaultLayout from "../component/common/layout/DefaultLayout"
import PageContent from "../component/web/PageContent"

const TopPage: FC = () => {
    return (
        <DefaultLayout type="auth">
            <PageContent />
        </DefaultLayout>
    )
}

export default TopPage