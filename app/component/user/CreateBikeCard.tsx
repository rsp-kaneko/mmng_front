"use client"

import { Avatar, Button, Card, CardContent, CardHeader, FormControl, FormLabel, IconButton, InputBase, Paper, Stack } from "@mui/material"
import { FC, memo, useContext, useEffect } from "react"
import SendIcon from '@mui/icons-material/Send'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import useBike from "@/app/hook/useBike"
import CustomContext from "@/app/context/CustomContext"

const CreateBikeCard: FC = memo(() => {
    const {REFRESH} = useContext(CustomContext)
    const {bikeLoad, bikeData, setBikeData, resetBikeForm, createBike} = useBike()

    useEffect(() => {
        resetBikeForm(setBikeData)
    }, [REFRESH])

    const handleRegistBike = () => {
        createBike({...bikeData, updateType: "all"})
    }

    return (
        <Card variant="outlined" sx={{
            width: "100%",
            height: "100%",
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: "#07f"}}>
                        <PedalBikeIcon />
                    </Avatar>
                }
                action={
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<SendIcon />}
                        loading={bikeLoad}
                        onClick={handleRegistBike}
                    >
                        登録
                    </Button>
                }
                title="自転車の登録"
                subheader="車体の詳細情報"
            />
            <CardContent>
                <Stack spacing={3} sx={{px: 3}}>

                    <FormControl>
                        <FormLabel sx={{fontSize: "0.9em"}}>メーカー名</FormLabel>
                        <Paper
                            variant="outlined"
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                        >
                            <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                <PedalBikeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="text"
                                placeholder="最低1文字以上"
                                inputProps={{ 'aria-label': 'makerName' }}
                                onChange={(e) => setBikeData({...bikeData, makerName: e.target.value})}
                            />
                        </Paper>
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{fontSize: "0.9em"}}>バイク名</FormLabel>
                        <Paper
                            variant="outlined"
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                        >
                            <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                <PedalBikeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="text"
                                placeholder="最低1文字以上"
                                inputProps={{ 'aria-label': 'bikeName' }}
                                onChange={(e) => setBikeData({...bikeData, bikeName: e.target.value})}
                            />
                        </Paper>
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{fontSize: "0.9em"}}>サイズ（インチ）</FormLabel>
                        <Paper
                            variant="outlined"
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                        >
                            <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                <PedalBikeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="number"
                                placeholder="単位：inch"
                                inputProps={{ 'aria-label': 'size' }}
                                onChange={(e) => setBikeData({...bikeData, size: Number(e.target.value)})}
                            />
                        </Paper>
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{fontSize: "0.9em"}}>ホイールベース距離</FormLabel>
                        <Paper
                            variant="outlined"
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                        >
                            <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                <PedalBikeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="number"
                                placeholder="単位：mm"
                                inputProps={{ 'aria-label': 'wheelBase' }}
                                onChange={(e) => setBikeData({...bikeData, wheelBase: Number(e.target.value)})}
                            />
                        </Paper>
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{fontSize: "0.9em"}}>BBシェル幅</FormLabel>
                        <Paper
                            variant="outlined"
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                        >
                            <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                <PedalBikeIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                type="number"
                                placeholder="単位：mm"
                                inputProps={{ 'aria-label': 'bbShell' }}
                                onChange={(e) => setBikeData({...bikeData, bbShell: Number(e.target.value)})}
                            />
                        </Paper>
                    </FormControl>

                </Stack>
            </CardContent>
        </Card>
    )
})

CreateBikeCard.displayName = "CreateBikeCard"
export default CreateBikeCard