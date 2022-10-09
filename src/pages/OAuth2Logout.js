import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function OAuth2Logout(){
    const cookies = new Cookies();
    cookies.remove('jwtToken');
    cookies.remove('memberName');

    return <Navigate to="/" replace />
}

export default OAuth2Logout