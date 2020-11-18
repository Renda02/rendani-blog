import TopSection from "./TopSection";
import Main from "./Main";
import BottomSection from "./BottomSection";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import styled from "styled-components";

import code from "../images/code.png";
import teams from "../images/puzzle.png";
import goal from "../images/adaptable.png";

function Body() {
  return (
    <Container>
      <TopSection />
      <>
      <BodyHeading>
        <h2> Who am I?</h2>
        <p>
          {" "}
          I come from manufacturing and construction industry where
          quality-work,continuous improvement and meeting all customer's
          requirements is a priority. But in the end, my fascination with tech
          inspired me take the leap.{" "}
        </p>
      </BodyHeading>
      <BodyRow>
        <Card>
          <Icons src={goal}  alt="tarrget" />
          <CardTiltle>Goal Oriented</CardTiltle>
<br/>
          <p>
            I am focused on meeting all deliverables while maintaining
            reliability and meeting customer's expectations.
          </p>
        </Card>
        <Card>
          <Icons src={code} alt="coding" />
          <CardTiltle>I code,too</CardTiltle>
          <br />
          <p>
            I love coding because it is fun and the sense of accomplishment when
            solving a really complicated problem cannot be beat!
          </p>
        </Card>
        <Card>
          <Icons src={teams} alt="puzzle" />
          <CardTiltle>Easily Adaptive</CardTiltle>
          <br />
          <p>
            I thrive well in a rapid growing and progressive company that
            encourange continous improvement.
          </p>
        </Card>
      </BodyRow>
      <Link to="/about">
        <ReadMore>Learn More</ReadMore>
      </Link>
      </>
      <Main />
      <BottomSection />
      <Contact />
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

const BodyHeading = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: #000000;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
`;

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-basis:33%;
padding:1rem;
transition:0.3s;
`;

const BodyRow = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
`;

const CardTiltle = styled.h4`
  font-size: 20px;
  text-align: center;
`;

const Icons = styled.img`
  width: 150px;
  border-radius:6px;
  margin:0.5rem 0;
  height:auto;

`;

const ReadMore = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ee5f5f;
  color: #ee5f5f;
  box-shadow: 0 0.05em 0.1em rgba(0, 0, 0, 0.25);
`;
