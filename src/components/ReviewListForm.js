import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor.css';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import moment from 'moment';
import { deleteStudyApi } from '../api/studyApi';


function ReviewListForm (props){
    const reviewList = props.reviewList;

    return (
        <>
        <div>
            <h6>🔗 리뷰 로그</h6>
            {reviewList.length != 0 && 
                reviewList.map( (review, index) => {
                    const regDate = moment(review.regDate).format('YYYY-MM-DD HH:mm');
                    const modDate = moment(review.modDate).format('YYYY-MM-DD HH:mm');
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
                                <p style={{color: "#85929E"}}>✏️ 작성: {regDate} | 수정: {modDate} </p>
                            </div>
                        </div>
                    )
                })}
        </div>
        </>
    );
}

export default ReviewListForm;