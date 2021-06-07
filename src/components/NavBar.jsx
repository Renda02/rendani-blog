import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

function NavBar({toggle}) {
  return (
    <Nav>
      <NavWrapper>
        <Logo to="/">Rendani </Logo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems>
            <NavLink to="/">Home</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/about">About</NavLink>
          </NavItems>
        
          <NavItems>
            <NavLink to="/contact">Contact</NavLink>
          </NavItems>
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f4f3f5;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
  margin: 0 auto;
`;

const NavWrapper = styled.nav`
  width: 100%;
  padding: 1em 0;
  background: #f4f3f5;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  z-index: 1;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
 padding:0;
 font-weight: 400;
 font-size:1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.li`
  justify-content: center;
  align-items: center;
 
`;

const NavLink = styled(Link)`
  font-size: 18px;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  padding: 1em;
  text-align: center;
  transition: all 0.3s ease;
  &:hover , 
  :focus{
    border-bottom: 2px solid #dd3435;
  }
`;

const Logo = styled(Link)`
  color: #000;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  justify-self: flex-start;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
