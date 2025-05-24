import { Box } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <Box
      component="img"
      src="/images/Home.png"
      alt="Home Section"
      sx={{
        width: '100%',          // full width of container
        maxWidth: 1200,         // max width on large screens
        height: 'auto',         // maintain aspect ratio
        display: 'block',
        margin: '0 auto',       // center horizontally
      }}
    />
  );
}
