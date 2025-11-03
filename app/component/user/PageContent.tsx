"use client"

import { Grid } from "@mui/material"
import { FC, useContext, useEffect, useState } from "react"
import UserInfo from "./UserInfo"
import BikeInfo from "./BikeInfo"
import AddBikeCard from "./AddBikeCard"
import CustomContext from "@/app/context/CustomContext"
import useBike from "@/app/hook/useBike"
import CreateBikeCard from "./CreateBikeCard"

const PageContent: FC = () => {
    const {REFRESH, USER_ID} = useContext(CustomContext)
    const {getMyAllBikes, bikes} = useBike()
    const [addCardFlg, setAddCardFlg] = useState(false)

    useEffect(() => {
        getMyAllBikes(USER_ID!)
    }, [REFRESH])

    const handleAddCardFlg = () => setAddCardFlg(true)

    return (
        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }}>
                <UserInfo />
            </Grid>

            {bikes.length > 0 && bikes.map((bike) => (
                <BikeInfo key={bike.bikeId} />
            ))}

            {bikes.length == 0 || addCardFlg ? (
                <Grid size={{ xs: 12, md: 6 }}>
                    <CreateBikeCard />
                </Grid>
            ) : null}

            <Grid size={{ xs: 12, md: 6 }}>
                <AddBikeCard
                    handleAddCardFlg={handleAddCardFlg}
                    addCardFlg={addCardFlg}
                    bikes={bikes}
                />
            </Grid>

        </Grid>
    )
}

export default PageContent