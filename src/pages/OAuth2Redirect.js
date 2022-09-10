import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getLoginApi } from '../api/loginApi';

function OAuth2Redirect(){
    const cookies = new Cookies();
    const jwtToken = cookies.get('jwtToken');
    const isValid = jwtToken ? true : false;

    const [login, setLogin] = useState(isValid);

    const getLogin = async() => {
        const data = await getLoginApi(jwtToken);
    }

    useEffect(async () => {
        getLogin();
    }, []);

    if (jwtToken){
        return <Navigate to="/" state={{ login: login }} replace />
    } else {
        return <Navigate to="/login" replace />
    }   
}

export default OAuth2Redirect