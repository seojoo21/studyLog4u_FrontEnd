import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from 'antd';
import moment from 'moment';
import { deleteStudyApi } from '../api/studyApi';
import ReviewListForm from './ReviewListForm';
import ReviewRegisterForm from './ReviewRegisterForm';
import { loginCheck } from '../common/loginCheck';

function StudyViewForm(props) {
    const jwtToken = loginCheck();

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
        if (check) {
            await deleteStudyApi(id, jwtToken);
            alert('삭제 되었습니다.');
            window.location.href = "/studyList"
        }
    }

    const [open, setOpen] = useState(false);
    const onSetReviewRegister = async () => {
        setOpen(true);
    }
    const offSetReviewRegister = async() => {
        setOpen(false);
        window.scrollTo(0,0);
    }

    const onListHandler = async() => {
        window.history.back();
    }

    const scrollListener = React.useRef();
    
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
                                    <p >📆 복습일: {notiDate} | <Button size='small' onClick={onSetReviewRegister}>복습하러가기</Button></p>
                                    <hr/>
                                </div>
                                <div id="studyViewer" style={{backgroundColor: "#F8FAFF"}}>내용</div>
                                <hr/>
                                </>
                            }
                        </StudyContent>
                        <ReviewList>
                            {reviewList.length != 0 && 
                            <ReviewListForm reviewList={reviewList}></ReviewListForm>}
                        </ReviewList>
                        { open &&
                            <>
                            <ReviewRegisterForm studyId={study.id}></ReviewRegisterForm>
                            <div style={{paddingLeft: 20, marginTop: 5}}>
                                <Button size='default' onClick={offSetReviewRegister}>복습 취소</Button>
                            </div>
                            </>
                        }
                        <ButtonWrap><Button onClick={onListHandler} size='default'>목록으로</Button></ButtonWrap>
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
const ButtonWrap = styled.div`
    margin-top: 5px;
    padding-left: 20px;
`

export default StudyViewForm;