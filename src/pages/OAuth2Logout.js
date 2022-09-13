import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getLoginApi } from '../api/loginApi';

function OAuth2Logout(){
    const cookies = new Cookies();
    cookies.remove('jwtToken');
    cookies.remove('memberName');

    return <Navigate to="/" replace />
}

export default OAuth2Logout