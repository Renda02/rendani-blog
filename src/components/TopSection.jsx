import Typed from "react-typed";
import styled from "styled-components";

import avatar from "../images/image.JPG";
import { Container } from "./styled";

function TopSection() {
  return (
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
                showCursor={false}
              />
            </Title>
          </About>
        </IntroContainer>
        <Image src={avatar} alt="logo" />
      </Row>
    </Container>
  );
}

export default TopSection;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
`

const IntroContainer = styled.div`
  text-align: center;
  line-height: 24px;
  display: flex-start;
`;

const Title = styled.p`
  color: #e39aa4;
  font-size: 40px;
  text-align: center;
  padding-bottom: auto;
  height: 70px;
`;

const Name = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 70px;
`;

const Image = styled.img`
  border: 5px;
  margin: auto;
  max-width: 350px;
  display: flex;
  padding:2rem 0;
`;

const Greetings = styled.span`
  font-size: 20px;
  color: #000;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
`;
