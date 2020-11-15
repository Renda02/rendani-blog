import TopSection from "./TopSection";
import Main from "./Main";
import BottomSection from "./BottomSection";
import Contact from "./Contact";
import {Link} from "react-router-dom"
import styled from "styled-components";

import code from "../images/code.png";
import teams from "../images/puzzle.png";
import goal from "../images/goal.svg";

function Body() {
  return (
    <Container>
      <TopSection />
      <BodyHeading>
        <h2> Who am I?</h2>
        <Intro>
          {" "}
          I come from manufacturing and construction industry where
          quality-work,continuous improvement and meeting all customer's
          requirements is a priority. But in the end, my fascination with tech
          inspired me take the leap.{" "}
        </Intro>
      </BodyHeading>
      <BodyRow>
        <div className="card__a">
          <Icons src={goal}  height={80} alt="tarrget" />
          <CardTiltle>Goal Oriented</CardTiltle>
          

          <p>
            I am focused on meeting all deliverables while maintaining
            reliability and meeting customer's expectations.
          </p>
        </div>
        <div className="card__b">
          <Icons src={code} alt="coding" />
          <CardTiltle>I code,too</CardTiltle>
          <br />
          <p>
            I love coding because it is fun and the sense of accomplishment when
            solving a really complicated problem cannot be beat!
          </p>
        </div>
        <div className="card__c">
          <Icons src={teams} alt="puzzle" />
          <CardTiltle>Easily Adaptive</CardTiltle>
          <br />
          <p>
            I thrive well in a rapid growing and progressive company that
            encourange continous improvement.
          </p>
        </div>
      </BodyRow>
      <Link to="/about">
        <Button type="submit">Learn More</Button>
      </Link>
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
  margin-top: 75px;
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
const Intro = styled.p`
  font-weight: 200px;
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
  width: 80px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #000;
  border: none;
  color: #fff;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-radius: 7px;
  padding: 5px 10px;
  transition: 0.3ms ease-ease-in-out;
`;
