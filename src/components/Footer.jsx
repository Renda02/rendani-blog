import { ExternalLink } from "react-external-link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <Cointaner>
        <FooterColumn>
          <SectionTitle>Rendani Luvhengo</SectionTitle>
          <Paragraph>Welcome to my personal website. </Paragraph>
        </FooterColumn>
        <FooterColumn>
          <SectionTitle>Links</SectionTitle>
          <div></div>
        </FooterColumn>
        <FooterColumn>
          <SectionTitle>Follow Rendani</SectionTitle>
          <div className="footer__follow">
            <SocialLink>
              <Links>
                <ExternalLink href=" mailto:rluvhengo2@gmail.com">
                  <AiFillMail size={24} />
                </ExternalLink>
              </Links>
              <Links>
                <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
                  <AiFillLinkedin size={24} />
                </ExternalLink>
              </Links>
              <Links>
                <ExternalLink href="https://github.com/Renda02">
                  <AiFillGithub size={24} />
                </ExternalLink>
              </Links>
              <Links>
                <ExternalLink href="https://twitter.com/rendani18824096/">
                  <AiFillTwitterCircle size={24} />
                </ExternalLink>
              </Links>
            </SocialLink>
          </div>
        </FooterColumn>
      </Cointaner>
      <SubFooter>
        <Paragraph> Copyright @Rendani 2020</Paragraph>
      </SubFooter>
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
  min-height: 300px;
`;

const Cointaner = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1080px;
  width: 100%;
`;

const FooterColumn = styled.div`
  width: calc(100% / 3);
`;

const SectionTitle = styled.h3`
  font-family: cooperboldbt;
  font-weight: 500;
  color: #f4b995;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Paragraph = styled.p`
  color: #ababab;
`;

const SocialLink = styled.ul`
  display: flex;
`;

const SubFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  background-color: #f4eee6;
  color: #000000;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 21px;
  width: 100%;
`;

const Links = styled.li`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: space-between;
`;