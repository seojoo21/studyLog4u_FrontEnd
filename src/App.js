import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import StudyRegister from './pages/StudyRegister'
import StudyView from './pages/StudyView'
import ReviewRegister from './pages/ReviewRegister'
import StudyUpdate from './pages/StudyUpdate'
import EmptyPage from './pages/EmptyPage';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/study/:studyId" element={<StudyView />}></Route>
          <Route path="/review/register" element={<ReviewRegister/>}></Route>
          <Route path="/study/register" element={<StudyRegister />}></Route>
          <Route path="/study/update/:studyId" element={<StudyUpdate/>}></Route>
          <Route path="*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
