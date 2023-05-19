import NavBar from "./NavBar";
import Banner from "./Banner";

import { Box, styled } from "@mui/system";

const BoxSC=styled(Box)`
    padding:10px 10px 0 10px;
    background-color: #e8e8e8; 
`

export default function Home(){
    return (
        <>
            <NavBar/>
            <BoxSC>
                <Banner/>
            </BoxSC>
            
        </>
    )
}