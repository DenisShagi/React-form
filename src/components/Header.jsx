import React  from "react";
import { Typography } from "@mui/material";

export const Header = () => {
    return <Typography sx={{
        margin: (theme) => theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '40px',
        color: 'deeppink',
        textShadow: '1px'
    }} >Информация о сотруднике</Typography>
}