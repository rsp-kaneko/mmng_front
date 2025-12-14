"use client"

import { Box, Button, Divider, Grid } from "@mui/material"
import { FC, useState } from "react"
import SubContainer from "../common/container/SubContainer"
import DataCard from "./DataCard"
import CreatePartsModal from "./CreatePartsModal"

const DataSection: FC = () => {
    const [openCreateModal, setOpenCreateModal] = useState(false)

    const onCloseCreateModal = () => setOpenCreateModal(false)

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
                <Box>
                    <Button
                        variant="contained"
                        onClick={() => setOpenCreateModal(true)}
                        sx={{
                            "@media screen and (max-width: 900px)": {
                                width: "100%",
                            }
                        }}
                    >
                        パーツを追加
                    </Button>
                </Box>

                <Divider sx={{
                    my: 3,
                    bgcolor: "#aaa",
                    height: 4
                }} />
                
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 6, xl: 4 }}>
                        <DataCard />
                    </Grid>
                </Grid>

            </SubContainer>

            <CreatePartsModal
                open={openCreateModal}
                onClose={onCloseCreateModal}
            />
        </Box>
    )
}

export default DataSection