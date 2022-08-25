import axios from 'axios';


const login = async (token) => {


    const url = api_base + `/api/auth/login`;
    const option = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        data: {}
    }
}