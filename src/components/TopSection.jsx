import Typed from "react-typed";
import styled from "styled-components";
import { Container } from "./styled";
import avatar from "../images/image.jpg";

const TopSection = () => (
  <Container>
    <Row>
      <About>
        <Greetings>Hello, I am</Greetings>
        <Name>Rendani Luvhengo</Name>
        <Title>
          <Typed
            strings={["Frontend Developer"]}
            typeSpeed={40}
            backSpeed={40}
            showCursor={false}
          />
        </Title>
      </About>

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
  @media screen and (max-width: 720px) {
    padding: 3rem;
  }
`;

const Title = styled.p`
  color: #d35d6e;
  font-size: 2.1rem;
  text-align: center;
  padding-bottom: auto;
  height: 70px;

  font-family: Lucida, sans-serif;


`;

const Name = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
`;

const Image = styled.img`
  border: 5px;
  margin: auto;
  max-width: 300px;
  display: flex;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
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
