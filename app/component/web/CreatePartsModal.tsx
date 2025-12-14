"use client"

import useParts from "@/app/hook/useParts"
import { Box, Divider, FormControl, IconButton, MenuItem, Modal, Stack, TextField, Typography } from "@mui/material"
import { FC, memo, useEffect } from "react"
import CancelIcon from '@mui/icons-material/Cancel'

type Props = {
    open: boolean
    onClose: () => void
}

const CreatePartsModal: FC<Props> = memo((props) => {
    const {open, onClose} = props
    const {getAllPartsCategories, partsCategories} = useParts()

    useEffect(() => {
        getAllPartsCategories()
    }, [])
console.log(partsCategories)
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                bgcolor: "#fff",
                width: 900,
                height: 700,
                p: 3,
                "@media screen and (max-width: 900px)": {
                    width: "95%",
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
                            
                        </FormControl>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
})

CreatePartsModal.displayName = "CreatePartsModal"
export default CreatePartsModal