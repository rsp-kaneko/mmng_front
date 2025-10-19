"use client"

import CustomContext from "@/app/context/CustomContext"
import { Avatar, Card, CardContent, CardHeader, Divider, FormControl, FormLabel, Grid, IconButton, InputBase, Paper, Stack } from "@mui/material"
import { FC, memo, useContext, useEffect } from "react"
import PersonIcon from '@mui/icons-material/Person'
import SendIcon from '@mui/icons-material/Send'
import KeyIcon from '@mui/icons-material/Key'
import useUser from "@/app/hook/useUser"

const UserInfo: FC = memo(() => {
    const {REFRESH} = useContext(CustomContext)
    const {userLoad, userData, setUserData, updateUser} = useUser()

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userName = String(localStorage.getItem("userName"))
            const userId = Number(localStorage.getItem("userId"))
            setUserData({
                userId: userId,
                userName: userName,
            })
        }
    }, [REFRESH])

    const handleSubmit = (updateType: string) => {
        updateUser({...userData, updateType})
    }

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                }
                title="ユーザー設定"
                subheader="ユーザー名、パスワード変更"
            />
            <CardContent>
                <Grid container spacing={3} px={3}>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <FormControl fullWidth>
                            <FormLabel sx={{fontSize: "0.9em"}}>ユーザー名</FormLabel>
                            <Paper
                                variant="outlined"
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                            >
                                <IconButton sx={{ p: '10px' }} disabled aria-label="userIcon">
                                    <PersonIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    type="text"
                                    placeholder="最低1文字以上"
                                    inputProps={{ 'aria-label': 'userName' }}
                                    value={userData.userName}
                                    onChange={(e) => setUserData({...userData, userName: e.target.value})}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleSubmit("ユーザー名")}
                                    loading={userLoad}
                                >
                                    <SendIcon />
                                </IconButton>
                            </Paper>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <FormControl fullWidth>
                            <FormLabel sx={{fontSize: "0.9em"}}>パスワード</FormLabel>
                            <Paper
                                variant="outlined"
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                            >
                                <IconButton sx={{ p: '10px' }} disabled aria-label="keyIcon">
                                    <KeyIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="最低8文字以上"
                                    type="password"
                                    inputProps={{ 'aria-label': 'password' }}
                                    value={userData.password}
                                    onChange={(e) => setUserData({...userData, password: e.target.value})}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleSubmit("パスワード")}
                                    loading={userLoad}
                                >
                                    <SendIcon />
                                </IconButton>
                            </Paper>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
})

UserInfo.displayName = "UserInfo"
export default UserInfo