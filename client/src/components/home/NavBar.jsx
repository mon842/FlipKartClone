import { Box,styled, Typography } from "@mui/material";

import {navData} from "./constants/data.js";

const BoxSC=styled(Box)`
    margin: 64px 70px 0px 70px;
    justify-content: space-between;
    text-align: center;
`
const BoxSC2=styled(Box)`
    padding:12px 8px;

`


export default function NavBar(){
    return (
        <BoxSC style={{display:'flex'}}>
            {navData.map(data=>(
                <BoxSC2>
                    <img src={data.url} alt={data.text} style={{width:64}}/>
                    <Typography style={{fontSize:14}}>{data.text}</Typography>
                </BoxSC2>
            ))}
        </BoxSC>
    )
}