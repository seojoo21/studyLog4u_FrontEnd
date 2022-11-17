import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import HeaderMain from '../components/Header'
import FooterMain from '../components/Footer'
import StudyViewForm from '../components/StudyViewForm'
import { getStudyApi } from '../api/studyApi'
import { getReviewListApi } from '../api/reviewApi'
import { loginCheck } from '../common/loginCheck'
// import Fab from '@mui/material/Fab';
// import FormatSizeIcon from '@mui/icons-material/FormatSize'
// import { FloatingLabel } from 'react-bootstrap'

function StudyView() {
  const jwtToken = loginCheck();

  const [study, setStudy] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const id = useParams().studyId;

  const getStudy = async () => {
    const data = await getStudyApi(id, jwtToken);
    setStudy(data);
  }

  const getReviewList = async() => {
    const data = await getReviewListApi(id, jwtToken);
    setReviewList(data);
  }

  useEffect(async () => {
    getStudy();
  }, []);

  useEffect(async() => {
    getReviewList();
  }, []);

  // const [scrollY, setScrollY] = useState(0);
  // const handleScroll = (e) => {
  //   console.log("scrollTop: " + e.currentTarget.scrollTop);
  // }
  // const onChangeFontSize = async() => {
  //     const contents = document.querySelector('.toastui-editor-contents');
  //     contents.style.fontSize = 'x-large';
  // }
    return (
      <div>
        <HeaderMain />
          <ContentContainer className="container">
            {/* <FloatBtnBox onScroll={handleScroll}>
              <Fab size="medium" color="action" onClick={onChangeFontSize} ><FormatSizeIcon /></Fab>
            </FloatBtnBox> */}
            <StudyViewForm study={study} reviewList={reviewList} />
          </ContentContainer>
        <FooterMain />
      </div>
    );
}

const ContentContainer = styled.div`
    max-width: 1320px;
`
// const FloatBtnBox= styled.div`
//     padding-right: 20px;
//     float: right;
// `
export default StudyView;