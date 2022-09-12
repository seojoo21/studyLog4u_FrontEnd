import axios from 'axios';
import { dateFormat } from '../common/utils';

const base = require('../config/api.json')

const getStudyListApi = async (page, type, keyword, jwtToken) => {
    const url = base.url + `/api/study/getList?page=${page}&size=10&type=${type}&keyword=${keyword}`;
    const config = { headers : { 'Authorization' : "Bearer " + jwtToken}};

    try {
        const response = await axios.get(url, config);
        return response.data.data;
    } catch(e){
        return [];
    }
}

const getStudyApi = async (id, jwtToken) => {
    const url = base.url + `/api/study/get/${id}`;
    const config = { headers : { 'Authorization' : "Bearer " + jwtToken}};

    try{
        const response = await axios.get(url, config);
        return response.data.data;
    } catch (e) {
        return [];
    }
}

const registerStudyApi = async (props, jwtToken) => {
    const url = base.url + `/api/study/register`;
    const option = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer " + jwtToken
        },
        data: {
            title: props.title,
            category: props.category,
            notiDate: dateFormat(props.notiDate),
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        alert(`새로운 스터디 등록이 완료되었습니다.`);
        window.location.href = "/studyList"
    } catch (e) {
        alert(`새로운 스터디 등록에 실패하였습니다.`);
        window.location.href = "/studyList"
        return null;
    }
}

const updateStudyApi = async (id, props, jwtToken) => {
    const url = base.url + `/api/study/${id}`;
    const option = {
        url: url,
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : "Bearer " + jwtToken
        },
        data: {
            id: id,
            title: props.title,
            category: props.category,
            content: props.content,
            notiDate: dateFormat(props.notiDate)
        }
    }
    try{
        const response = await axios(option);
        alert(`스터디 수정이 완료되었습니다.`);
        window.location.href = "/studyList"
    } catch(e) {
        alert(`스터디 수정에 실패하였습니다.`);
        window.location.href = "/studyList"
        return null;
    }
}

const deleteStudyApi = async (id, jwtToken) => {
    const url = base.url + `/api/study/${id}`
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

export { getStudyListApi, getStudyApi, registerStudyApi, updateStudyApi, deleteStudyApi } ;