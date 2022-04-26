import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function IntroNav() {
  return (
    <div>
      <Navbar bg='info'>
        <Navbar.Brand>snap</Navbar.Brand>
        <Nav>
          <Nav.Link href='#'>Features</Nav.Link>
          <Nav.Link href='#'>Company</Nav.Link>
          <Nav.Link href='#'>Careers</Nav.Link>
          <Nav.Link href='#'>About</Nav.Link>
          <Nav.Link href='#'>Login</Nav.Link>
          <Nav.Link href='#'>Register</Nav.Link>
        </Nav>
      </Navbar>

      <p>Testing testing</p>
    </div>
  )
}

export default IntroNav