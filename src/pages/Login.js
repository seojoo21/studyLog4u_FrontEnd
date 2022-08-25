import React from 'react'
import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import LoginForm from '../components/LoginForm'

function Login(){

    return (
        <div>
            <HeaderMain></HeaderMain>
            <ContentContainer className="container" >
                <LoginForm></LoginForm>
            </ContentContainer>
            <FooterMain></FooterMain>
        </div>
    )
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

export default Login;