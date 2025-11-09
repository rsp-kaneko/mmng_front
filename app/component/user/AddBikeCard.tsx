"use client"

import { Box, Card, CardContent, Typography } from "@mui/material"
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import AddIcon from '@mui/icons-material/Add'
import { FC } from "react"
import { Bike } from "@/app/hook/useBike"

type Props = {
    handleAddCardFlg: () => void
    addCardFlg: boolean
    bikes: Array<Bike>
}

const AddBikeCard: FC<Props> = (props) => {
    const {handleAddCardFlg, addCardFlg, bikes} = props

    return (
        <Card
            variant="outlined"
            onClick={
                bikes.length > 0 && !addCardFlg
                ? handleAddCardFlg
                : undefined
            }
            sx={bikes.length > 0 && !addCardFlg ? {
                border: "1px dashed #07f",
                height: "100%",
                width: "100%",
                cursor: "pointer",
                color: "#07f",
            } : {
                border: "1px dashed #aaa",
                height: "100%",
                width: "100%",
                cursor: "normal",
                color: "#aaa",
            }}
        >
            <CardContent>
                <Box sx={{
                    margin: "auto",
                    textAlign: "center",
                    width: 320,
                    height: 320,
                    mt: 16,
                    fontWeight: "bold",
                }}>
                    <PedalBikeIcon fontSize="large" />
                    <AddIcon fontSize="large" />
                    <Typography component="p">自転車を追加</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

AddBikeCard.displayName = "AddBikeCard"
export default AddBikeCard