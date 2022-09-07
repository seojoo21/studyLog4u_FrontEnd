import React from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

function OAuth2Redirect(){
    const cookies = new Cookies();
    const JwtToken = cookies.get('jwtToken');

    if (JwtToken){
        return <Navigate to="/" replace />
    } else {
        return <Navigate to="/login" replace />
    }   
}

export default OAuth2Redirect