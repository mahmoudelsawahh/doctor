import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '/public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{direction : 'ltr'}}>
      <Container>
        <Navbar.Brand href="#home">
            <Image src={Logo} alt="Logo" style={{width : '160px', height : 'auto'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">الرايسيه </Nav.Link>
            <NavDropdown title="الاطباء" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="المرضي" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="الصفحات" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">الرايسيه </Nav.Link>
          </Nav>
          <Nav>
          <ul class="nav header-navbar-rht">
						<li class="nav-item contact-item">
							<div class="header-contact-img">
              <FontAwesomeIcon icon="fa-solid fa-hospital" />
              </div>
							<div class="header-contact-detail">
								<p class="contact-header">نواصل معانا</p>
								<p class="contact-info-header"> 01007296138</p>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link header-login" href="login.html">تسجيل الدخول </a>
						</li>
					</ul>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;