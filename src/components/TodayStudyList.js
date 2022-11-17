import { React } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import moment from 'moment'

function TodayStudyList(props) {
    const data = props.data;
    const today = moment(new Date()).format('YY/MM/DD dddd');

    return (
    <>
    <Title>❤️ {today} 오늘 꼭 복습할 것들 ❤️ </Title>
    <List>
        {
        data.length == 0
        ? <h6> 오늘은 복습할 스터디가 없어요. </h6>
        : data.length != 0 &&
            data.map((study) => {
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

const Title = styled.div`
    margin-top: 0px;
    padding-left: 20px;
    font-size: 2vw;
    font-weight: bolder;
`

const List = styled.div`
    margin-top: 20px;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`

export default TodayStudyList;