"use client"

import { Avatar, Box, Card, CardContent, CardHeader, CircularProgress, Grid, Typography } from "@mui/material"
import { FC } from "react"
import SubContainer from "../common/container/SubContainer"
import PedalBikeIcon from '@mui/icons-material/PedalBike'


const DataSection: FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                "@media screen and (min-width: 900px)": {
                    width: "calc(100% - 240px)",
                    ml: "auto",
                }
            }}
        >
            <SubContainer>
                
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
                        <Card variant="outlined">
                            <CardHeader
                                avatar={
                                    <Avatar>
                                        <PedalBikeIcon />
                                    </Avatar>
                                }
                                title="CN-HG200-7"
                                subheader="スプロケット"
                            />
                            <CardContent>
                                <Grid container>
                                    <Grid size={{ xs: 3 }} textAlign="center" position="relative">
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
                                    <Grid size={{ xs: 9 }} pl={3}>
                                        交換日： 2025/11/11 <br />
                                        値段：　￥2,500
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

            </SubContainer>
        </Box>
    )
}

export default DataSection