"use client"

import { Avatar, Card, CardContent, CardHeader, Divider, FormControl, FormLabel, IconButton, InputBase, Paper, Stack } from "@mui/material"
import { FC, memo, useEffect } from "react"
import SendIcon from '@mui/icons-material/Send'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import useBike, { Bike } from "@/app/hook/useBike"
import MessageTooltip from "../common/tooltip/MessageTooltip"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

type Props = {
    bike: Bike
}

const BikeInfo: FC<Props> = memo((props) => {
    const {bike} = props
    const {bikeLoad, bikeData, setBikeData, bikeMessage, updateBike, deleteBike} = useBike()

    useEffect(() => {
        setBikeData({
            ...bikeData,
            bikeId: bike.bikeId,
            makerName: bike.makerName,
            bikeName: bike.bikeName,
            size: bike.size,
            wheelBase: bike.wheelBase,
            bbShell: bike.bbShell,
        })
    }, [])

    const handleUpdateBike = (updateType: string) => {
        updateBike({...bikeData, updateType})
    }

    const handleDeleteBike = () => {
        deleteBike(bikeData)
    }

    return (
        <Card variant="outlined" sx={{
            width: "100%",
            height: "100%",
        }}>
            <CardHeader
                avatar={
                    <Avatar>
                        <PedalBikeIcon />
                    </Avatar>
                }
                title={`登録車名：${bikeData.bikeName}`}
                action={
                    <IconButton
                        onClick={handleDeleteBike}
                        color="error"
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                }
                subheader="詳細情報"
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
                                value={bikeData.makerName}
                                onChange={(e) => setBikeData({...bikeData, makerName: e.target.value})}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <MessageTooltip
                                open={bikeMessage.type == "makerName"}
                                title={bikeMessage.message}
                                status={bikeMessage.status}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleUpdateBike("makerName")}
                                >
                                    <SendIcon />
                                </IconButton>
                            </MessageTooltip>
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
                                value={bikeData.bikeName}
                                onChange={(e) => setBikeData({...bikeData, bikeName: e.target.value})}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <MessageTooltip
                                open={bikeMessage.type == "bikeName"}
                                title={bikeMessage.message}
                                status={bikeMessage.status}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleUpdateBike("bikeName")}
                                >
                                    <SendIcon />
                                </IconButton>
                            </MessageTooltip>
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
                                value={bikeData.size}
                                onChange={(e) => setBikeData({...bikeData, size: Number(e.target.value)})}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <MessageTooltip
                                open={bikeMessage.type == "size"}
                                title={bikeMessage.message}
                                status={bikeMessage.status}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleUpdateBike("size")}
                                >
                                    <SendIcon />
                                </IconButton>
                            </MessageTooltip>
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
                                value={bikeData.wheelBase}
                                onChange={(e) => setBikeData({...bikeData, wheelBase: Number(e.target.value)})}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <MessageTooltip
                                open={bikeMessage.type == "wheelBase"}
                                title={bikeMessage.message}
                                status={bikeMessage.status}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleUpdateBike("wheelBase")}
                                >
                                    <SendIcon />
                                </IconButton>
                            </MessageTooltip>
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
                                value={bikeData.bbShell}
                                onChange={(e) => setBikeData({...bikeData, bbShell: Number(e.target.value)})}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <MessageTooltip
                                open={bikeMessage.type == "bbShell"}
                                title={bikeMessage.message}
                                status={bikeMessage.status}
                            >
                                <IconButton
                                    color="primary"
                                    sx={{ p: '10px' }}
                                    aria-label="submit"
                                    onClick={() => handleUpdateBike("bbShell")}
                                >
                                    <SendIcon />
                                </IconButton>
                            </MessageTooltip>
                        </Paper>
                    </FormControl>

                </Stack>
            </CardContent>
        </Card>
    )
})

BikeInfo.displayName = "BikeInfo"
export default BikeInfo