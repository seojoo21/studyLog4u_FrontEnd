import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const location = window.location;

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">studyLog4u</Navbar.Brand>
      <Nav activeKey={location.pathname} className="me-auto">
        <Nav.Link href="#home">로그인</Nav.Link>
        <Nav.Link href="/study/register">스터디 등록</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
    </>
  );
}

export default Header;