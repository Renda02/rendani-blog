import { ExternalLink } from "react-external-link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import styled from "styled-components";

import { Container } from "./styled";

function Footer() {
  return (
    <Main>
      <Container>
        <FooterColumn>
          <SectionTitle>Rendani Luvhengo</SectionTitle>
          <Paragraph>Welcome to my personal website. </Paragraph>
        </FooterColumn>
        <FooterColumn>
          <SectionTitle>Explore</SectionTitle>
          

        </FooterColumn>
        <FooterColumn>
          <SectionTitle>Follow Rendani</SectionTitle>
          <SocialLink>
            <Links>
              <ExternalLink href=" mailto:rluvhengo2@gmail.com">
                <AiFillMail size={30} fill="#fff" />
              </ExternalLink>
            </Links>
            <Links>
              <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
                <AiFillLinkedin size={30} fill="#fff" />
              </ExternalLink>
            </Links>
            <Links>
              <ExternalLink href="https://github.com/Renda02">
                <AiFillGithub size={30} fill="#fff" />
              </ExternalLink>
            </Links>
            <Links>
              <ExternalLink href="https://twitter.com/rendani18824096/">
                <AiFillTwitterCircle size={30} fill="#ababab" />
              </ExternalLink>
            </Links>
          </SocialLink>
        </FooterColumn>
      </Container>
      <Container>
        <SubFooter>
          <Paragraph> Copyright @Rendani 2020</Paragraph>
        </SubFooter>
      </Container>
    </Main>
  );
}

export default Footer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #000000;
  padding-bottom: 1rem;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  flex-basis: 33%;
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  color: #e39aa4;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size:18px;
`;

const Paragraph = styled.p`
  color: #ababab;
  font-size:16px;
`;

const SocialLink = styled.ul`
  display: flex;
  flex-direction: flex-start;
  padding: 1rem 1rem 1rem 0;
`;

const SubFooter = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  color: #f4f3f5;
  font-size: 18px;
  font-weight: bold;
  
  width: 100%;
`;

const Links = styled.li`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
`;
