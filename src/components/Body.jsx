import TopSection from "./TopSection";
import Main from "./Main";
import BottomSection from "./BottomSection";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button,Heading,SubHeading,BodyHeading } from "./styled";

import code from "../images/code.png";
import teams from "../images/puzzle.png";
import goal from "../images/adaptable.png";

function Body() {
  return (
    <Container>
      
      <TopSection />
      <Row>
        <BodyHeading>
          <Heading > Who am I?</Heading>
          <SubHeading>
            I come from manufacturing and construction industry where
            quality-work,continuous improvement and meeting all customer's
            requirements is a priority. But in the end, my fascination with tech
            inspired me take the leap.{" "}
          </SubHeading>
        </BodyHeading>
        <BodyRow>
          <Card>
            <Icons src={goal} alt="tarrget" />
            <CardTiltle>Goal Oriented</CardTiltle>
            <br />
            <Paragraph>
              I am focused on meeting all deliverables while maintaining
              reliability and meeting customer's expectations.
            </Paragraph>
          </Card>
          <Card>
            <Icons src={code} alt="coding" />
            <CardTiltle>I code,too</CardTiltle>
            <br />
            <Paragraph>
              I love coding because it is fun and the sense of accomplishment
              when solving a really complicated problem cannot be beat!
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
      <Main />
      <BottomSection />
      <Contact />
      <Footer/>
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
  padding-bottom:2rem;
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


