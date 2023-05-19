// material ui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';


// components import
import Plus from './Plus';
import Logo from './Logo';
import Search from './search/Search';
import CustomButtons from './CustomButtons';



const AppBarSC = styled(AppBar)`
  background:#2874f0;
  height: 55px
`;

const BoxSC = styled(Box)`
  margin-left:12%;
  line-height:0;
`;

const TypographySC = styled(Typography)`
    font-size:10px;
    font-style:italic;
`;
const BoxSC2 = styled(Box)`
  margin:0 3% 0 auto;
`;

export default function Header() {
    return (
        <div>
            <AppBarSC>
                <Toolbar style={{minHeight:55}}>

                    <BoxSC>{/* logo component */}
                        <Logo />{/* flipkart logo */}
                        <Box style={{display:'flex'}}>
                            <TypographySC >
                                Explore
                                <Box component="span" style={{ color: 'yellow' }}> Plus</Box>{/* plus txt */}
                            </TypographySC>
                            <Box component="span"><Plus /></Box>{/* plus logo */}
                        </Box>
                    </BoxSC>

                    <Search/>{/* search component */}
                    <BoxSC2>{/* button component */}
                        <CustomButtons/>
                    </BoxSC2>

                </Toolbar>
            </AppBarSC>
        </div>
    );
}