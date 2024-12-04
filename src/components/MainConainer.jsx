import { Container } from "@mui/material";
import React from "react";

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      container="main"
      maxWidth="xl"
      sx={{
        marginTop: (theme) => theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
