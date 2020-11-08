import styled from "styled-components";




function Navbar() {
  return (
    <Header>
      <NavWrapper>
        <Logo>Rendani Luvhengo</Logo>
        <NavUl>
          <NavList>
            <NavLink href="/">Home</NavLink>
          </NavList>
          <NavList>
            <NavLink href="/">About</NavLink>{" "}
          </NavList>
          <NavList>
            <NavLink href="/" className="navbar__contact">
              Contact
            </NavLink>
          </NavList>
        </NavUl>
      </NavWrapper>
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
 position: fixed;
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
`;

const NavUl = styled.ul`
  display: inline-flex;
`;

const NavList = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  font-family: "Questrial", Helvetica, Arial, Lucida, sans-serif;
  font-size: 18px;
  line-height: 23px;
  color:#000;
  text-decoration: none;
  font-weight: 300;
  margin-right: 20px;
  transition: all 0.3s ease;
`;

const Logo = styled.h4`
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
  font-weight: 500;
  font-family: "Questrial", Helvetica, Arial, Lucida, sans-serif;
`;