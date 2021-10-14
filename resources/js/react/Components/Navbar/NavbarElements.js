import styled from 'styled-components';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

export const NavBarImage = styled.img`
  width: 120px;
`;

export const NavStyled = styled(Nav.Link)`
  text-transform: uppercase;
  font-size: 14px !important;
`;

export const NavStyledDropDown = styled(NavDropdown)`
  text-transform: uppercase;
  font-size: 14px !important;
`;

export const NavStyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 14px !important;
  font-weight: 700 !important;
  border: 2px solid blue;
`;
