import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyRegisterForm from '../components/StudyRegisterForm'
import { loginCheck } from '../common/loginCheck'

function StudyRegister() {
    const jwtToken = loginCheck();

    return (
      <div>
        <HeaderMain />
          <ContentContainer className="container">
            <StudyRegisterForm />
          </ContentContainer>
        <FooterMain />
      </div>
    );
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

export default StudyRegister;