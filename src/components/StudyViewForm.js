import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import moment from 'moment';
import { deleteStudyApi } from '../api/studyApi';
import ReviewListForm from './ReviewListForm';
import ReviewRegisterForm from './ReviewRegisterForm';

function StudyViewForm(props) {
    const study = props.study;
    const reviewList = props.reviewList;

    const content = study.content;
    const regDate = moment(study.regDate).format('YYYY-MM-DD HH:mm');
    const modDate = moment(study.modDate).format('YYYY-MM-DD HH:mm');
    const notiDate = study.notiDate == null ? '복습 예정일이 등록되지 않았습니다.' : moment(study.notiDate).format('YYYY-MM-DD HH:mm');

    const el = document.querySelector('#studyViewer');
    if (el !== null ){
        const viewer = new Viewer({
            el: el,
            height: '600px',
            initialValue: content
        });
    }

    const onDelete = async () => {
        const check = window.confirm("정말 삭제하시겠습니까?");
        const id = study.id;
        // 나중에 리뷰 목록도 함께 삭제 될 수 있도록 조건 잊지 말고 추가해서 코드 수정 해주기 
        if (check) {
            await deleteStudyApi(id);
            alert('삭제 되었습니다.');
            window.location.href = "/"
        }
    }

    const returnHtml = <StudyViewFormContainer>
                        <StudyContent>
                            {study != null &&
                                <>
                                <div key={study.id}>
                                    <h6>🗂 {study.category}</h6>
                                    <h3>{study.title}</h3>
                                    <p style={{color: "#5D6D7E"}}>✏️ 작성: {regDate} | 수정: {modDate} | <Link to={`/study/update/${study.id}`}><Button size='small'>수정</Button></Link> <Button onClick={onDelete} size='small'>삭제</Button></p>
                                    <hr/> 
                                    <h6>📚 복습 확인</h6>
                                    <p >📆 복습일: {notiDate} | <Button size='small'>복습하러가기</Button></p>
                                    <hr/>
                                </div>
                                <div id="studyViewer" style={{backgroundColor: "#F8FAFF"}}>내용</div>
                                <hr/>
                                </>
                            }
                        </StudyContent>
                        <ReviewList>
                            <ReviewListForm reviewList={reviewList}></ReviewListForm>
                        </ReviewList>
                        <ReviewRegisterForm></ReviewRegisterForm>
                        </StudyViewFormContainer>
    return (<>{returnHtml}</>);
}

const StudyViewFormContainer = styled.div`
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`
const StudyContent = styled.div`
    margin-top: 30px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
`
const ReviewList = styled.div`
    // margin-top: 30px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
`
export default StudyViewForm;