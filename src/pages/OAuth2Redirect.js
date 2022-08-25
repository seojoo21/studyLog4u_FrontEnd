import React from 'react';
import {ACCESS_TOKEN} from '../constants/oauth2Index';
import { Navigate, useSearchParams } from 'react-router-dom';

function OAuth2Redirect(){
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const error = searchParams.get("error");

    if (token){
        localStorage.setItem(ACCESS_TOKEN, token);
        return <Navigate to="/" replace />
    } else {
        return <Navigate to="/login" replace />
    }   
}

export default OAuth2Redirect