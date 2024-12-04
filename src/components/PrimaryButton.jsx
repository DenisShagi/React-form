import React from "react";
import { Button } from "@mui/material";

export const PrimaryButton = ({ children, props }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        margin: (theme) => theme.spacing(3, 0, 2),
      }}
    >Сохранить</Button>
  );
};
