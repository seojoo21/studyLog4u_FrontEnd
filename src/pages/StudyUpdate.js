import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStudyApi } from '../api/studyApi'
import styled from 'styled-components'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyUpdateForm from '../components/StudyUpdateForm'
import Cookies from 'universal-cookie';

function StudyUpdate() {
  const cookies = new Cookies();
  const jwtToken = cookies.get('jwtToken');

  const [study, setStudy] = useState([]);
  const id = useParams().studyId;

  const getStudy = async () => {
    const data = await getStudyApi(id, jwtToken);
    setStudy(data);
  }

  useEffect(async () => {
    getStudy();
  }, []);

    return (
      <div>
        <HeaderMain />
          <ContentContainer className="container">
            {study.length != 0 && <StudyUpdateForm study={study}/> }
          </ContentContainer>
        <FooterMain />
      </div>
    );
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

export default StudyUpdate;