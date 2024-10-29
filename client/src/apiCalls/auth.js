import { axiosInstance } from './index';

const url = 'https://quick-chat-server-8t9c.onrender.com';

export const signupUser = async (user) => {
    try{
        const response = await axiosInstance.post(url + '/api/auth/signup', user);
        return response.data;
    }catch(error){
        return error;
    }
}

export const loginUser = async (user) => {
    try{
        const response = await axiosInstance.post(url +'/api/auth/login', user);
        return response.data;
    }catch(error){
        return error;
    }
}
