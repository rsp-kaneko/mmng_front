"use client"

import CustomContext from "@/app/context/CustomContext"
import { Card, CardContent } from "@mui/material"
import { FC, memo, useContext } from "react"

const UserInfo: FC = memo(() => {
    const {USER_ID, USER_NAME} = useContext(CustomContext)

    return (
        <Card>
            <CardContent>



            </CardContent>
        </Card>
    )
})

UserInfo.displayName = "UserInfo"
export default UserInfo