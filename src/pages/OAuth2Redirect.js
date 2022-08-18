import React from 'react';
import {ACCESS_TOKEN} from '../api/loginApi';
import { Navigate } from 'react-router-dom';

function OAuth2Redirect(){

    return <Navigate to="/" replace />
}

export default OAuth2Redirect