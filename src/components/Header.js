import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Link } from "react-router-dom";

function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">studyLog4u</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">로그인</Nav.Link>
        <Nav.Link href="/study/register">스터디 등록</Nav.Link>
      </Nav>
      <Space direction="vertical">
          <Search
            placeholder=""
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Space>
    </Container>
    </Navbar>
    </>
  );
}

export default Header;