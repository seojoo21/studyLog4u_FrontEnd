import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyViewForm from '../components/StudyViewForm'
import { getStudyApi } from '../api/studyApi'
import { getReviewListApi } from '../api/reviewApi'

function StudyView() {
  const [study, setStudy] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const id = useParams().studyId;

  const getStudy = async () => {
    const data = await getStudyApi(id);
    setStudy(data);
  }

  const getReviewList = async() => {
    const data = await getReviewListApi(id);
    setReviewList(data);
  }

  useEffect(async () => {
    getStudy();
  }, []);

  useEffect(async() => {
    getReviewList();
  }, []);

    return (
      <div>
        <HeaderMain />
          <ContentContainer className="container">
            <StudyViewForm study={study} reviewList={reviewList} />
          </ContentContainer>
        <FooterMain />
      </div>
    );
}

const ContentContainer = styled.div`
    max-width: 1320px;
`

export default StudyView;