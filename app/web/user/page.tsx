"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer";
import DefaultLayout from "@/app/component/common/layout/DefaultLayout";
import PageContent from "@/app/component/user/PageContent";
import { FC } from "react";

const UserPage: FC = () => {

    return (
        <DefaultLayout type="auth">
            <NormalContainer>
                <PageContent />
            </NormalContainer>
        </DefaultLayout>
    )
}

export default UserPage