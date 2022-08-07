import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const base = require('../config/api.json')

const getReviewListApi = async (studyId) => {
    const url = base.url + `/api/review/getList/${studyId}`;
    try {
        const response = await axios.get(`${url}`);
        return response.data.data;
    } catch(e){
        return [];
    }
}

const registerReviewApi = async (props) => {
    const url = base.url + `/api/review/register`;
    const option = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        data: {
            studyId: props.studyId,
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        console.log(response);

    } catch (e) {
        console.log(e);
        return null;
    }
}

const updateReviewApi = async (id, props) => {
    const url = base.url + `/api/review/${id}`;
    const option = {
        url: url,
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        data: {
            id: id,
            studyId: props.studyId,
            content: props.content
        }
    }

    try{
        const response = await axios(option);
        console.log(response);
    } catch(e) {
        console.log(e);
        return null;
    }
}

const deleteReviewApi = async (id) => {
    const url = base.url + `/api/study/${id}`
    const option = {
        url: url,
        method: 'DELETE',
        headers:{
            'Content-Type' : 'application/json'
        }
    }
    try {
        await axios(option);
    } catch(e) {
        return null;
    }
}

export { getReviewListApi, registerReviewApi, updateReviewApi, deleteReviewApi } ;