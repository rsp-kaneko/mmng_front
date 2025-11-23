"use client"

import { Box, Tooltip } from "@mui/material"
import { CSSProperties, FC, ReactElement } from "react"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

type Props = {
    children: ReactElement
    open: boolean
    title: string
    status: "success" | "warning" | "error" | "info"
}

export type MessageTooltipRequest = {
    type: string
    status: "success" | "warning" | "error" | "info"
    message: string
}

const MessageTooltip: FC<Props> = (props) => {
    const {open, title, status, children} = props
    const styles: CSSProperties = {
        backgroundColor: 
            status == "success" ? "#0a0"
            : status == "info" ? "#0dd"
            : status == "warning" ? "#dd0"
            : status == "error" ? "#f00"
            : "inherit"
    }

    return (
        <Tooltip
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
                <Box>
                    {status == "success" ? <CheckCircleOutlineIcon fontSize="small" />
                    : status == "info" ? <InfoOutlineIcon fontSize="small" />
                    : status == "warning" ? <WarningAmberIcon fontSize="small" />
                    : status == "error" ? <ErrorOutlineIcon fontSize="small" />
                    : undefined}
                    {title}
                </Box>
            }
            placement="bottom"
            slotProps={{
                tooltip: {sx: styles},
                popper: {
                disablePortal: true,
                },
            }}
        >
            {children}
        </Tooltip>
    )
}

export default MessageTooltip