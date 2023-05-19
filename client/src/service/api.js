import axios from 'axios';

const URL= 'http://localhost:8000';


export const authenticatesSignup= async (user) => {
    try {
        return await axios.post(`${URL}/signup`,user);

    } catch (error) {
        console.log("error has occurred during authentication ",error);
    }
};

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user);
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error;
    }
}


