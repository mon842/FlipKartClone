import { Typography, Box,styled } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Logout=styled(Typography)`
    margin-left: 20px;
    font-size: 14px;
`

export default function Profile({ account, setAccount }) {
    const [open, setOpen] = useState(null);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };
    const logoutUser=()=>{
        setAccount('');
    }

    return (
        <>
            <Box>
                <Typography style={{margin:5, cursor:"pointer"}}
                    onClick={handleClick}>
                    {account}</Typography>
            </Box>
            <Menu

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose(); logoutUser()}}>
                    <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Logout>Logout</Logout>
                </MenuItem>
            </Menu>
        </>

    );
}