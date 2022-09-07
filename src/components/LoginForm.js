import React from 'react'
import styled from 'styled-components'
import googleLogo from '../img/google-logo.png'
import { GOOGLE_AUTH_URL } from '../constants/oauth2Index'

function LoginForm(){

    return(
        <LoginContainer>
            <LoginContent>
                <LoginTitle>
                    <h3> 오늘도 만나서 반가워요 👋 </h3>
                    <h6> 느리더라도 차분하게 꾸준하게 걸어갑시다 😊</h6>
                </LoginTitle>
                    <div className="social-login">
                        <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                        <img src={googleLogo} alt="Google" style={{height: 32, float: 'left', marginRight: 10}}/>구글 계정으로 로그인하기</a>
                    </div>
            </LoginContent>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    text-align: center;
`
const LoginContent = styled.div`
    background: #fff;
    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
    border-radius: 2px;
    width: 50%;
    display: inline-block;
    margin-top: 30px;
    vertical-align: middle;
    position: relative;    
    padding: 35px;
`

const LoginTitle = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.65);
`

export default LoginForm