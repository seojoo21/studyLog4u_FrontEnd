import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pagination } from 'antd';
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyList from '../components/StudyList'
import { getStudyListApi } from '../api/studyApi'

function Main(){
    const [studyList, setStudyList] = useState([]);
    const [page, setPage] = useState(1);

    const getStudyList = async () => {
        const data = await getStudyListApi(1, "", "");
        setStudyList(data);
    }

    useEffect(async () => {
        getStudyList();
    }, []);

    const onPageClick = async (e) => {
        const data = await getStudyListApi(e, "", "");
        setStudyList(data);
        setPage(e)
    }

    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container">
                <StudyList data={studyList}></StudyList>
                <Pagination onChange={onPageClick} current={studyList.page} total={studyList.totalCount} showTotal={total => `총 ${total} 건`}/>
            </ContentContainer>
            <FooterMain></FooterMain>
        </div>
    )
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

export default Main;