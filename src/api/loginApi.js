import axios from 'axios';

const base = require('../config/api.json')

const getLoginApi = async (jwtToken) => {
    const url = base.url + `/api/login`;
    const config = { headers : { 'Authorization' : "Bearer " + jwtToken}};
    
    try {
        const response = await axios.get(url, config);
        return response.data.data;
    } catch(e){
        return [];
    }
}

export { getLoginApi };