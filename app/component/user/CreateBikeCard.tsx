"use client"

import { Avatar, Button, Card, CardContent, CardHeader, FormControl, FormLabel, IconButton, InputBase, Paper, Stack } from "@mui/material"
import { FC, memo } from "react"
import SendIcon from '@mui/icons-material/Send'
import PedalBikeIcon from '@mui/icons-material/PedalBike'

const CreateBikeCard: FC = memo(() => {
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
                action={
                    <IconButton>
                        <Button
                            size="small"
                            variant="contained"
                            startIcon={<SendIcon />}
                        >
                            登録
                        </Button>
                    </IconButton>
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