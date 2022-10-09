import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pagination } from 'antd';
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyList from '../components/StudyList'
import { getStudyListApi } from '../api/studyApi'
import { Input, Space } from 'antd';
import { loginCheck } from '../common/loginCheck'

function AllStudyList(){
    const jwtToken = loginCheck();

    const [studyList, setStudyList] = useState([]);
    const [page, setPage] = useState(1);
    
    const getStudyList = async () => {
        const data = await getStudyListApi(1, "", "", jwtToken);
        setStudyList(data);
    }

    useEffect(async () => {
        getStudyList();
    }, []);

    const onPageClick = async (e) => {
        const data = await getStudyListApi(e, "", "", jwtToken);
        setStudyList(data);
        setPage(e)
    }

    const { Search } = Input;
    const onSearch = async (keyword) => {
        const data = await getStudyListApi(1, "tcg", keyword, jwtToken); // type: "tcg": 제목, 내용, 카테고리 모두 검색  
        setStudyList(data);
    };

    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container" >
                <Space direction="vertical" style={{paddingRight: 20, float:'right'}}>
                    <Search placeholder="검색어를 입력하세요." onSearch={onSearch} style={{width: 200}}/>
                </Space>
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

export default AllStudyList;