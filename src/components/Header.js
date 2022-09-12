import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cookies from 'universal-cookie';


function Header() {
  const cookies = new Cookies();
  const jwtToken = cookies.get('jwtToken');
  const location = window.location;

  const onLogoutHandler = async () => {
    const check = window.confirm("로그아웃 하시겠습니까?");
    if (check) {
      cookies.remove('jwtToken');
      alert('로그아웃 되었습니다.');
      window.location.href = "/";
    }
  }

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">studyLog4u</Navbar.Brand>
      <Nav activeKey={location.pathname} className="me-auto">
        {
          jwtToken !== undefined
          ? <>
          <Nav.Link onClick={onLogoutHandler}>로그아웃</Nav.Link>
          {/* <Nav.Link href="/login">로그인</Nav.Link> */}
          <Nav.Link href="/studyList">스터디 목록</Nav.Link>
          <Nav.Link href="/study/register">스터디 등록</Nav.Link>
          </>
          : <><Nav.Link href="/login">로그인</Nav.Link></>
        }
      </Nav>
    </Container>
    </Navbar>
    </>
  );
}

export default Header;