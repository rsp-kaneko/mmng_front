"use client"

import CustomContext from "@/app/context/CustomContext"
import useLogin from "@/app/hook/useLogin"
import { Box, Button, Card, CardContent, Stack, TextField } from "@mui/material"
import { FC, memo, useContext, useEffect, useState } from "react"

const LoginFormCard: FC = memo(() => {
    const {AUTH} = useContext(CustomContext)
    const {loginLoad, login} = useLogin()
    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (AUTH) {
                location.href = "/web"
            }
        }
    }, [AUTH])

    const handleLogin = () => {
        login(loginData)
    }

    return (
        <Card
            sx={{
                width: 500,
                mx: "auto",
                px: 5,
                "@media screen and (max-width: 500px)": {
                    width: "95%"
                }
            }}
        >
            <CardContent>
                <Box mb={3}>
                    ログイン
                </Box>

                <Stack spacing={4}>
                    <TextField
                        type="text"
                        variant="filled"
                        label="ユーザー名"
                        size="small"
                        value={loginData.userName}
                        onChange={(e) => setLoginData({...loginData, userName: e.target.value})}
                    />

                    <TextField
                        type="password"
                        variant="filled"
                        label="パスワード"
                        size="small"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        loading={loginLoad}
                        onClick={handleLogin}
                    >
                        ログイン
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
})

LoginFormCard.displayName = "LoginFormCard"
export default LoginFormCard