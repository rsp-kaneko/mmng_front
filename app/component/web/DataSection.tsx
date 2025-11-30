"use client"

import { Box, Grid } from "@mui/material"
import { FC } from "react"
import SubContainer from "../common/container/SubContainer"
import DataCard from "./DataCard"

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
                        <DataCard />
                    </Grid>
                </Grid>

            </SubContainer>
        </Box>
    )
}

export default DataSection