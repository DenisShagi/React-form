import React from "react";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <Typography
      sx={{
        margin: (theme) => theme.spacing(3, 0, 2),
        fontFamily: "Nunito",
        textAlign: "center",
        fontSize: "40px",
        // color: 'deeppink',
        color: "black",
        textShadow: "1px",
      }}
      component="h1"
      variant="h5"
    >
      Информация о сотруднике
    </Typography>
  );
};
