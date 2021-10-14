import React from 'react';
import Logo from '../Image/Frame.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {
  NavBarImage,
  NavStyled,
  NavStyledDropDown,
  // NavStyledNavLink,
} from './NavbarElements';
function Header() {
  return (
    <>
      <Navbar fixed='top' bg='white' expand='lg'>
        <div className='container'>
          <Navbar.Brand>
            <Nav.Link href='/'>
              <NavBarImage src={Logo} alt='logo' />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='navbar-nav mx-auto'>
              <NavStyled>
                <NavLink exact to='/partnership'>
                  Partners
                </NavLink>
              </NavStyled>

              <NavStyled>
                <NavLink to='/about'>About</NavLink>
              </NavStyled>
              <NavStyled>
                <NavLink to='/involve'>GET Invovled</NavLink>
              </NavStyled>

              <NavStyledDropDown title='MEDIA' id='basic-nav-dropdown'>
                <NavDropdown.Item>
                  <NavLink to='/event'>Event</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to='/project'>Project</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink as={Link} to='/blog'>
                    Blog
                  </NavLink>
                </NavDropdown.Item>
              </NavStyledDropDown>

              <NavStyled>
                <NavLink to='/donation'>DONATE NOW</NavLink>
              </NavStyled>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
