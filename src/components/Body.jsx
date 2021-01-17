import TopSection from "./TopSection";
import Contributions from "./Contributions";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Heading, SubHeading, BodyHeading } from "./styled";

import code from "../images/code.png";
import teams from "../images/puzzle.png";
import goal from "../images/adaptable.png";

function Body() {
  return (
    <Container>
      <TopSection />
      <Row>
        <BodyHeading>
          <Heading> Who am I?</Heading>
          <SubHeading>
            I am a Frontend developer based in Huelva,Spain who is focused on
            building scalable applications and websites.{" "}
          </SubHeading>
        </BodyHeading>
        <BodyRow>
          <Card>
            <Icons src={goal} alt="tarrget" />
            <CardTiltle>Goal Oriented</CardTiltle>
            <br />
            <Paragraph>
              I am committed to continuous learning and staying up to date with
              the latest technologies.
            </Paragraph>
          </Card>
          <Card>
            <Icons src={code} alt="coding" />
            <CardTiltle>Problem Solver</CardTiltle>
            <br />
            <Paragraph>
              I love coding because it is fun and the sense of accomplishment
              when solving a really complicated problem cannot be beaten!
            </Paragraph>
          </Card>
          <Card>
            <Icons src={teams} alt="puzzle" />
            <CardTiltle>Easily Adaptive</CardTiltle>
            <br />
            <Paragraph>
              I thrive well in a rapid growing and progressive company that
              encourange continous improvement.
            </Paragraph>
          </Card>
        </BodyRow>
        <Link to="/about">
          <Button>Learn More</Button>
        </Link>
      </Row>
      <Projects />
      <Contributions />
      <Contact />
      <Footer />
    </Container>
  );
}

export default Body;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background: #f4f3f5;
  width: 100%;
  padding-bottom: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  padding: 1rem;
  transition: 0.3s;
  @media only screen and (min-width: 600px) {
    flex-basis: 33%;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  padding: 0.5rem;
`;

const BodyRow = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
  flex-wrap: wrap;
`;

const CardTiltle = styled.h4`
  font-size: 20px;
  text-align: center;
`;

const Icons = styled.img`
  width: 150px;
  border-radius: 6px;
  margin: 0.5rem 0;
  height: auto;
`;
