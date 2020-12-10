import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    
                </SidebarMenu>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #f4f3f5;
  height: 100%;
  display:grid;
   align-items:center;
   top:0;
   left:0;
   transition:0.3s ease-in-out;
   //opacity:${({ isOpen }) => (isOpen ? '100%' : '0%')};
  // top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
   
`;

const CloseIcon = styled(FaTimes)`
color:#000;`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
`;