"use client"

import { Bike } from "@/app/hook/useBike"
import { Box, Card, CardContent, Typography } from "@mui/material"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import { PartsRequest } from "@/app/hook/useParts"


type Props = {
    bike: Bike
    partsData: PartsRequest
    setPartsData: Dispatch<SetStateAction<PartsRequest>>
}

const SelectBikeItemCard: FC<Props> = (props) => {
    const {bike, partsData, setPartsData} = props
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        setBgColor(partsData.bikeId == bike.bikeId ? "#7af" : "#ddd")
    }, [partsData.bikeId])

    const handleClickAction = () => setPartsData({...partsData, bikeId: Number(bike.bikeId)})

    return (
        <Card sx={{
            width: 340,
            backgroundColor: bgColor,
            "@media screen and (max-width: 900px)": {
                width: "100%",
            }
        }}
            onClick={handleClickAction}
        >
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