"use client"

import useParts from "@/app/hook/useParts"
import { Box, Button, Divider, FormControl, FormLabel, IconButton, InputBase, MenuItem, Modal, Paper, Stack, TextField, Typography } from "@mui/material"
import { FC, memo, useContext, useEffect } from "react"
import CancelIcon from '@mui/icons-material/Cancel'
import useBike from "@/app/hook/useBike"
import CustomContext from "@/app/context/CustomContext"
import SelectBikeItemCard from "./SelectBikeItemCard"
import SettingsIcon from '@mui/icons-material/Settings'
import SendIcon from '@mui/icons-material/Send'

type Props = {
    open: boolean
    onClose: () => void
}

const CreatePartsModal: FC<Props> = memo((props) => {
    const {open, onClose} = props
    const {USER_ID} = useContext(CustomContext)
    const {getAllPartsCategories, partsCategories, partsData, setPartsData, partsLoad, partsError, createParts} = useParts()
    const {bikes, getMyAllBikes} = useBike()

    useEffect(() => {
        getAllPartsCategories()
        getMyAllBikes(USER_ID!)
    }, [])

    const handleCreateParts = () => createParts(partsData)

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                bgcolor: "#fff",
                width: 900,
                height: 650,
                p: 3,
                overflowY: "auto",
                "@media screen and (max-width: 900px)": {
                    width: "95%",
                    height: "100%",
                }
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <Typography component="h5" fontWeight="bold" fontSize="1.2em">パーツ追加</Typography>
                    <IconButton onClick={onClose}><CancelIcon /></IconButton>
                </Box>
                <Divider sx={{
                    bgcolor: "#aaa"
                }} />
                <Box sx={{py: 3, px: 8}}>
                    <Stack spacing={3}>
                        <FormControl>
                            <TextField
                                label="パーツカテゴリー"
                                select
                                defaultValue=""
                                variant="standard"
                            >
                                {partsCategories.length > 0 && partsCategories.map((category) => (
                                    <MenuItem key={category.partsCategoryId} value={category.partsCategoryId}>
                                        {category.categoryName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                        <FormControl>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                flexWrap: "wrap",
                            }}>
                                {bikes.length > 0 && bikes.map((bike) => (
                                    <SelectBikeItemCard key={bike.bikeId} bike={bike} />
                                ))}
                            </Box>
                        </FormControl>
                        <FormControl>
                            <FormLabel sx={{fontSize: "0.9em"}}>パーツ名</FormLabel>
                            <Paper
                                variant="outlined"
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                            >
                                <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                    <SettingsIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    type="text"
                                    placeholder="最低1文字以上"
                                    inputProps={{ 'aria-label': 'partsName' }}
                                    onChange={undefined}
                                />
                            </Paper>
                        </FormControl>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            "@media screen and (max-width: 900px)": {
                                flexDirection: "column",
                            }
                        }}>
                            <FormControl fullWidth>
                                <FormLabel sx={{fontSize: "0.9em"}}>交換日</FormLabel>
                                <Paper
                                    variant="outlined"
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                                >
                                    <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                        <SettingsIcon />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        type="date"
                                        placeholder=""
                                        inputProps={{ 'aria-label': 'changeDate' }}
                                        onChange={undefined}
                                    />
                                </Paper>
                            </FormControl>
                            <FormControl fullWidth>
                                <FormLabel sx={{fontSize: "0.9em"}}>値段</FormLabel>
                                <Paper
                                    variant="outlined"
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                                >
                                    <IconButton sx={{ p: '10px' }} disabled aria-label="bikeIcon">
                                        <SettingsIcon />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        type="number"
                                        placeholder="最低1円以上"
                                        inputProps={{ 'aria-label': 'price' }}
                                        onChange={undefined}
                                    />
                                </Paper>
                            </FormControl>
                        </Box>
                        <FormControl sx={{pt: 4}}>
                            <Button variant="contained" startIcon={<SendIcon />}>追加</Button>
                        </FormControl>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
})

CreatePartsModal.displayName = "CreatePartsModal"
export default CreatePartsModal