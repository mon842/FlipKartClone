
import { Button, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { styled } from '@mui/system';
import { useState,useContext } from 'react';

import {authenticatesSignup ,authenticateLogin}  from '../../service/api.js';

import { DataContext } from '../../context/DataProvider.jsx';

const accountInitialValue={
    login:{
        view:'login',
        Heading:'Login',
        SubHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        Heading:"Looks like you're new here!",
        SubHeading:'Sign up with your mobile number to get started'
    }
};

const signupInitialValue={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
};

const loginInitialValue={
    username:'',
    password:'',
};

export default function LoginDialoge({ open, setOpen }) {
    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup]=useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [ERROR, setError] = useState(false);

    const {setAccount} =useContext(DataContext);

    const handleLogin = () => {
        toggleAccount(accountInitialValue.signup);
    }
    // signup
    const handleSignup = () => {
        toggleAccount(accountInitialValue.login);
    }

    const handleClose = () => {
        setError(false);
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    }
    const onInputChange=(e)=>{
        
        // setSignup({...signup,[e.target.name]: e.target.value});
        setSignup(signup=>{
            return {
                ...signup,
                [e.target.name]: e.target.value
            }
        });
    }
    
    const signupUser=async(e)=>{
        e.preventDefault();
        // console.log(signup);
        let response =await authenticatesSignup(signup);
        if(!response) return;
        setAccount(signup.firstname);
        setSignup(signupInitialValue);
        handleClose();

    }

    // login

    const loginUser=async(e)=>{
        e.preventDefault();
        let response = await authenticateLogin(login);
        console.log(response.status);
        if(response.status===200){
            setAccount(response.data.data.firstname);
            setLogin(loginInitialValue);
            handleClose();
        }
        else{
            setError(true);
        }
        
    }
    const onValueChange=(e)=>{
        setLogin(login=>{
            return{
                ...login,
                [e.target.name]: e.target.value
            }
        });
    };

    // css styled
    const Component = styled(Box)`
        height:70vh;
        width:90vh;
    `
    const Image = styled(Box)`
        padding: 45px 35px;
        color: white;
        height:83%;
        width:49%;
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat  
    `

    const Wrapper = styled(Box)`
        display: flex;
        flex-direction: column;
        padding: 25px 35px;
        flex: 1;
        & > div, &> button, &> p{
            margin-top:20px;
            margin-bottom:10px
        }
    `

    const LoginButton = styled(Button)`
        text-transform: none;
        background: #f55714;
        color: white;
        border-radius:2px;
        height:48px
    `
    const RequestOTPButton = styled(Button)`
    text-transform: none;
    background: white;
    color: #1359f0;
    border-radius:2px;
    height:48px;
    box-shadow:0 2px 4px 0 grey
`
    const Text = styled(Typography)`
        font-size:12px;
        color: #878787
    `

    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography style={{ fontWeight: 600 }} variant='h5'>{account.Heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.SubHeading}</Typography>
                    </Image>
                    {account.view=== 'login'?
                        <Wrapper>
                            <TextField variant='standard' onChange={onValueChange} name='username'  label='Enter username' value={login.username} />
                            {ERROR && <Typography>Please enter correct credentials</Typography>}
                            <TextField variant='standard' onChange={onValueChange} name='password' label='Enter password' value={login.password} />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={loginUser} >Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTPButton>Request OTP</RequestOTPButton>
                            <Typography onClick={handleLogin} style={{ textAlign: 'center', cursor: 'pointer' }}>New to Flipkart? Create an account</Typography>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField name='firstname' variant='standard' onChange={onInputChange} label='Enter First Name' value={signup.firstname}/>
                            <TextField name='lastname' variant='standard' onChange={onInputChange} label='Enter Last Name' value={signup.lastname}/>
                            <TextField name='username' variant='standard' onChange={onInputChange} label='Enter Username' value={signup.username}/>
                            <TextField name='email' variant='standard' onChange={onInputChange} label='Enter Email' value={signup.email}/>
                            <TextField name='password' variant='standard' onChange={onInputChange} label='Enter password' value={signup.password}/>
                            <TextField name='phone' variant='standard' onChange={onInputChange} label='phone' value={signup.phone}/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={signupUser}>Continue</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTPButton   style={{ marginBottom:10  }} onClick={handleSignup} >Existing User? Login</RequestOTPButton>
                        </Wrapper>
                    }
                </Box>
            </Component>

        </Dialog>
    );
}