import { InputBase, Box, styled , IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const BoxSC = styled(Box)`
    background-color: #fff;
    margin-left:10px;
    border-radius:2px;
    width:38%;
`;

const InputBaseSC = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const IconButtonSC = styled(IconButton)`
    display:flex;;
`;

export default function Search() {
    return (
        <BoxSC style={{display:'flex'}}>
            <InputBaseSC
                placeholder="Search for products, brands and more"
            />
            <IconButtonSC type="button" sx={{ p: '2px' }} aria-label="search">
                <SearchIcon style={{color:'#2874f0'}}/>
            </IconButtonSC>
        </BoxSC>
    );

}