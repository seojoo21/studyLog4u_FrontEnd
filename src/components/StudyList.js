import { React, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import moment from 'moment';

function StudyList(props) {
    const data = props.data;
    const dtoList = data.dtoList;

    return (
    <>
    <List>
        {data.length != 0 &&
            dtoList.map((study) => {
                const regDate = moment(study.regDate).format('YYYY-MM-DD HH:mm');
                const modDate = moment(study.modDate).format('YYYY-MM-DD HH:mm');

                return (
                    <div key={study.id}>
                        <h6>🗂 {study.category}</h6>
                        <h3><StyledLink to={`/study/${study.id}`}>{study.title}</StyledLink></h3>
                        <p style={{color: "#5D6D7E"}}>✏️ 작성: {regDate} | 수정: {modDate}</p>
                        <hr/>
                    </div>
                )
            })}
    </List>
    </>
    );
}

const List = styled.div`
    margin-top: 30px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`

export default StudyList;