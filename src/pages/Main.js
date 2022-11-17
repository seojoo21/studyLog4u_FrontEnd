import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import Cookies from 'universal-cookie'
import { getTodayStudyListApi } from '../api/studyApi'
import TodayStudyList from '../components/TodayStudyList'

function Main(){
    const cookies = new Cookies();
    const jwtToken = cookies.get('jwtToken');
    const memberName = cookies.get('memberName');

    const [todayStudyList, setTodayStudyList] = useState([]);
    
    const getTodayStudyList = async() => {
        const data = await getTodayStudyListApi(jwtToken);
        setTodayStudyList(data);
    }

    useEffect(async () => {
        getTodayStudyList();
    }, []);

    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container" >
                <Welcome>
                    { 
                        jwtToken == undefined
                        ? <><h4> 어서오세요.</h4><h5>🔐 서비스를 이용하시려면 로그인 해주세요.</h5></>
                        : <><TodayStudyList data={todayStudyList}/></>
                    }
                </Welcome>
            </ContentContainer>
            <FooterMain></FooterMain>
        </div>
    )
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

const Welcome = styled.div`
    padding: 20px;
`

export default Main;