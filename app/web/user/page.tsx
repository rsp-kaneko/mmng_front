"use client"

import NormalContainer from "@/app/component/common/container/NormalContainer";
import DefaultLayout from "@/app/component/common/layout/DefaultLayout";
import UserInfo from "@/app/component/user/UserInfo";
import { Grid } from "@mui/material";
import { FC } from "react";

const UserPage: FC = () => {

    return (
        <DefaultLayout type="auth">
            <NormalContainer>
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserInfo />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        test
                    </Grid>

                </Grid>
            </NormalContainer>
        </DefaultLayout>
    )
}

export default UserPage