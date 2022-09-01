import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/oauth2Index';

const loginApi = async () => {
    const headers = new Headers({
        'Content-Type' : 'application/json'
    })

    if(sessionStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN));
    }
    
    const url = api_base + `/api/auth/login`;
    const option = {
        url: url,
        method: 'POST',
        headers: headers,
        data : {
            id: '',
            password: ''
        }
    }

    try{
        const response = await axios(option);
        console.log("==========");
        console.log(response.data);
        if(response.data.status === 200){
            console.log("로그인 성공");
            sessionStorage.setItem(ACCESS_TOKEN, response.data.token);
            window.location.href = '/';
        } else {
            console.log("로그인 실패");
            window.location.href = '/login';
        }   
    } catch(e){
        window.location.href = '/';
        return null;
    }
};

export { loginApi };