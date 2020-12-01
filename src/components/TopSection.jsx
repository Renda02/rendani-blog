import Typed from "react-typed";
import styled from "styled-components";

import avatar from "../images/image.JPG";
import { Container } from "./styled";

const TopSection = () => (
  <Container>
    <Row>
      <IntroContainer>
        <About>
          <Greetings>Hello, I am</Greetings>
          <Name>Rendani Luvhengo</Name>
          <Title>
            <Typed
              strings={["Front End Developer"]}
              typeSpeed={30}
              backSpeed={40}
              showCursor={false}
            />
          </Title>
        </About>
      </IntroContainer>
      <Image src={avatar} alt="logo" />
    </Row>
  </Container>
);

export default TopSection;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  @media (min-width: 720px) {
    padding: 80pxrem;
  }
`;

const IntroContainer = styled.div`
  text-align: center;

  display: flex-start;
`;

const Title = styled.p`
  color: #e39aa4;
  font-size: 2.3rem;
  text-align: center;
  padding-bottom: auto;
  height: 70px;

`;

const Name = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
`;

const Image = styled.img`
  border: 5px;
  margin: auto;
  max-width: 300px;
  display: flex;
  padding: 2rem 0;

  @media (min-width: 720px) {
    max-width: 350px;
  }
`;

const Greetings = styled.span`
  font-size: 1.5rem;
  color: #000;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
