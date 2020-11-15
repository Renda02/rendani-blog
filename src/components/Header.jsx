import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <NavBar>
      <NavWrapper>
        <Logo>Rendani Luvhengo</Logo>
        <NavUl>
          <NavList>
            <NavLink to="/">Home</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/about">About</NavLink>
          </NavList>
          <NavList>
            <NavLink to="/contact">Contact</NavLink>
          </NavList>
        </NavUl>
      </NavWrapper>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.div`
  position: sticky;
  top: 0px;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f4f3f5;
`;

const NavWrapper = styled.nav`
  width: 100%;
  padding: 20px;
  background: #f4f3f5;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  position: sticky;
  top: 0px;
`;

const NavUl = styled.ul`
  display: inline-flex;
`;

const NavList = styled.li`
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  ;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  line-height: 23px;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  margin-right: 20px;
  transition: all 0.3s ease;
`;

const Logo = styled.h4`
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
  font-weight: 500;
`;
