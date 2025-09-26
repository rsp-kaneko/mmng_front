"use client"

import { Avatar, Card, CardContent, CardHeader, Divider, FormControl, FormLabel, IconButton, InputBase, Paper, Stack } from "@mui/material"
import { FC, memo } from "react"
import SendIcon from '@mui/icons-material/Send'
import PedalBikeIcon from '@mui/icons-material/PedalBike'

const BikeInfo: FC = memo(() => {
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar>
                        <PedalBikeIcon />
                    </Avatar>
                }
                title="自転車スペック"
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
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton color="primary" sx={{ p: '10px' }} aria-label="submit">
                                <SendIcon />
                            </IconButton>
                        </Paper>
                    </FormControl>
                </Stack>
            </CardContent>
        </Card>
    )
})

BikeInfo.displayName = "BikeInfo"
export default BikeInfo