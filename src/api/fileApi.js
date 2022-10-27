import axios from 'axios';

const base = require('../config/api.json')

const uploadImageApi = async(blob, jwtToken) => {
    const url = base.url + `/api/file/imgUpload`;
    const formData = new FormData();
    formData.append('image', blob);

    const option = {
        url: url,
        method: 'POST',
        headers: { 
            'Content-Type' : 'multipart/form-data',
            'Authorization' : "Bearer " + jwtToken
        },
        data: formData
    }

    try {
        const response = await axios(option);
        console.log(response);
        return response.data.data;
    } catch (e) {
        console.log(e);
        return 'image_load_fail';
    }
}

export { uploadImageApi }