import { Box, Button, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';

import LoginDialoge from '../login/LoginDialoge';

import { useState,useContext } from 'react';
import { DataContext } from '../../context/DataProvider.jsx';
import Profile from './Profile';

const BoxSC=styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p , & > div {
        margin-right:40px;
        font-size:14px;
        align-items: center
    }
`;
const BoxSC2=styled(Box)`
    display: flex;
`

const ButtonSC=styled(Button)`
    color:#2874f0;
    background-color:white;
    border-radius:0;
    height:30px;
    padding:10px 40px 10px 40px;  
    text-transform:none;
    margin-left: 3%;
    font-weight:600;
`

export default function CustomButtons(){
    const [open, setOpen]= useState(false);

    const {account} =useContext(DataContext);
    const {setAccount} =useContext(DataContext);
    const handleDialog=()=>{
        setOpen(true);
    }
    return (
        <BoxSC >
            {
                account ? <Profile account={account} setAccount={setAccount}/>
                :<ButtonSC variant="contained" onClick={handleDialog}> Login</ButtonSC>
            }
            

            <Typography style={{marginTop:5 , width:135}}>Become a Seller</Typography>
            <Typography style={{marginTop:6 , width:135}}>More</Typography>
            <BoxSC2 style={{marginTop:5 }}>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </BoxSC2>
            <LoginDialoge open={open} setOpen={setOpen}/>
        </BoxSC>
    );
}