"use client"

import { Avatar, Box, Card, CardContent, CardHeader, CircularProgress, Grid } from "@mui/material"
import { FC, memo } from "react"
import PedalBikeIcon from '@mui/icons-material/PedalBike'

type Props = {

}

const DataCard: FC<Props> = memo((props) => {
    const {} = props

    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container alignItems="center">
                    <Grid size={{ xs: 5 }} textAlign="center" position="relative">
                        <CircularProgress variant="determinate" value={70} size={100} />
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "0.8em",
                                fontWeight: "bold"
                            }}
                        >
                            11ヶ月経過
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 7 }} pl={3}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <PedalBikeIcon />
                                </Avatar>
                            }
                            title="CN-HG200-7"
                            subheader="スプロケット"
                            sx={{padding: 0}}
                        />
                        <Box sx={{mt: 2}}>
                            交換日： 2025/11/11 <br />
                            値段：　￥2,500
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
})

DataCard.displayName = "DataCard"
export default DataCard