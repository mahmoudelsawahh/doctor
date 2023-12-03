import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '/public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{direction : ''}}>
      <Container>
        <Navbar.Brand>
          <Link href={'/'}>
          <Image src={Logo} alt="Logo" style={{width : '160px', height : 'auto'}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-center align-call-items" dir='rtl'>
            <Nav.Link>
            <Link href={'/'}>الرئيسية</Link>
             </Nav.Link>
             <Nav.Link>
            <Link href={'/search'}>البحث</Link>
             </Nav.Link>
            {/* <NavDropdown title="المرضي" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="الصفحات" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/patients-dashboard"> 
             الاعدادات
            </Nav.Link>
            <Nav.Link href="/doctors-dashboard"> 
             طبيب
            </Nav.Link>
          </Nav>
          <Nav>
          <ul class="nav header-navbar-rht">
						<li class="nav-item contact-item">
							
							<div class="header-contact-detail">
								<p class="contact-header">نواصل معانا</p>
								<p class="contact-info-header"> 01007296138</p>
							</div>
              <div class="header-contact-img">
                <FontAwesomeIcon icon={faHospital} fontSize={30}/>
               </div>
						</li>
            <li class="nav-item mx-md-3 mx-0">
							<Link  class="nav-link header-login" href={"/login"}>تسجيل الدخول </Link>
						</li>
					</ul>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;