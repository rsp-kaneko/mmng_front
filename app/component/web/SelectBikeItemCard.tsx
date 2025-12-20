"use client"

import { Bike } from "@/app/hook/useBike"
import { Box, Card, CardContent, Typography } from "@mui/material"
import { FC } from "react"
import PedalBikeIcon from '@mui/icons-material/PedalBike'


type Props = {
    bike: Bike
}

const SelectBikeItemCard: FC<Props> = (props) => {
    const {bike} = props

    return (
        <Card sx={{
            width: 340,
            backgroundColor: "#ddd",
            "@media screen and (max-width: 900px)": {
                width: "100%",
            }
        }}>
            <CardContent sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}>
                <Box>
                    <PedalBikeIcon />
                </Box>
                <Box>
                    <Typography component="h1" fontWeight="bold">{bike.bikeName}</Typography>
                    <Box>
                        <Typography component="p">{bike.makerName}</Typography>
                        <Typography component="p">{bike.size}インチ</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default SelectBikeItemCard