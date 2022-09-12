import axios from 'axios';

const base = require('../config/api.json')

const getReviewListApi = async (studyId, jwtToken) => {
    const url = base.url + `/api/review/getList/${studyId}`;
    const config = { headers : { 'Authorization' : "Bearer " + jwtToken}};

    try {
        const response = await axios.get(url, config);
        return response.data.data;
    } catch(e){
        return [];
    }
}

const registerReviewApi = async (props, jwtToken) => {
    const url = base.url + `/api/review/register`;
    const option = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer " + jwtToken
        },
        data: {
            studyId: props.studyId,
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        alert(`새로운 리뷰 등록이 완료되었습니다.`);
        window.location.href = `/study/${props.studyId}`;

    } catch (e) {
        console.log(e);
        alert(`새로운 리뷰 등록에 실패하였습니다.`);
        window.location.href = `/study/${props.studyId}`;
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

const deleteReviewApi = async (id, jwtToken) => {
    const url = base.url + `/api/review/${id}`
    const option = {
        url: url,
        method: 'DELETE',
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer " + jwtToken
        }
    }


    try {
        await axios(option);
    } catch(e) {
        return null;
    }
}

export { getReviewListApi, registerReviewApi, updateReviewApi, deleteReviewApi } ;