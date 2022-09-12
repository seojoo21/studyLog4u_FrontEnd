import React from 'react'
import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import { useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie';

function Main(){
    const state = useLocation();
    const loginCheck = state.state == null ? "" : state.state.login;

    const cookies = new Cookies();
    const jwtToken = cookies.get('jwtToken');

    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container" >
                <Welcome>
                    { 
                        loginCheck == "" && jwtToken == undefined
                        ? <><h4> 어서오세요.</h4><h5>🔐 서비스를 이용하시려면 로그인 해주세요.</h5></>
                        : <><h4> 환영합니다.</h4><h5>🔓 로그인 되었습니다.</h5></>
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