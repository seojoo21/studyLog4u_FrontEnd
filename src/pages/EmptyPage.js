import { Link } from "react-router-dom";
import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'

export default function EmptyPage(){
    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container" >
                <h2>잘못된 접근입니다.</h2>
                <Link to="/">돌아가기</Link>
            </ContentContainer>
            <FooterMain></FooterMain>
        </div>
    );
}

const ContentContainer = styled.div`
    max-width: 1320px;
    margin-top: 30px;
    padding-left: 20px;
`
