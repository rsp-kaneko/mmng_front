"use client"

import { Box, CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/web")
  }, [])

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        m: "auto",
        pt: "40px",
        textAlign: "center",
        width: "120px",
        height: "120px",
      }}
    >
      <CircularProgress />
    </Box>
  )
}
