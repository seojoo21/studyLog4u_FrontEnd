import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import moment from 'moment';
import { deleteStudyApi } from '../api/studyApi';
import { deleteReviewApi } from '../api/reviewApi';

function ReviewListForm (props){
    const reviewList = props.reviewList;

    const onDelete = async(id) => {
        const check = window.confirm("정말 삭제하시겠습니까?");
        if (check) {
            await deleteReviewApi(id);
            alert('삭제 되었습니다.');
            window.location.reload();
        }
    }

    return (
        <>
        <div>
            <h6>🔗 리뷰 로그</h6>
            {reviewList.length != 0 && 
                reviewList.map( (review, index) => {
                    const regDate = moment(review.regDate).format('YYYY-MM-DD HH:mm');
                    // const modDate = moment(review.modDate).format('YYYY-MM-DD HH:mm');
                    const content = review.content;

                    const el = document.querySelector(`#reviewViewer` + index);
                    if (el !== null){
                        const viewer = new Viewer({
                            el: el,
                            height: '200px',
                            initialValue: content
                        });
                    }

                    return (
                        <div key={review.id}>
                            <div style={{backgroundColor: "#F8F8FF"}} >
                                <div id={`reviewViewer` + index}></div>
                                <p style={{color: "#85929E"}}>✏️ 작성: {regDate} <Button onClick={onDelete.bind(this,review.id)} style={{backgroundColor: "#F8F8FF"}} size='small'>삭제</Button> </p>
                            </div>
                        </div>
                    )
                })}
        </div>
        </>
    );
}

export default ReviewListForm;