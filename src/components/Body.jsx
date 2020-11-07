import TopSection from "./TopSection";
import Main from "./Main";
import BottomSection from "./BottomSection";
import styled from "styled-components"

import code from "../images/code.svg";
import teams from "../images/adapt.svg";
import goal from "../images/goal.svg";

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
  font-weight: 500;
  color: #000000;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  font-family: "cooperboldbt", serif;
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

function Body() {
  return (
    <Container>
      <TopSection />
      <BodyHeading>
        <h2> Who am I?</h2>
        <h3>
          {" "}
          I come from manufacturing and construction industry where
          quality-work,continuous improvement and meeting all customer's
          requirements is a priority. But in the end, my fascination with tech
          inspired me take the leap.{" "}
        </h3>
      </BodyHeading>
      <BodyRow>
        <div className="card__a">
          <img src={goal} alt="coding" className="icon__card" />
          <CardTiltle>Goal Oriented</CardTiltle>
          <br />

          <p>
            I am focused on meeting all deliverables while maintaining
            reliability and meeting customer's expectations.
          </p>
        </div>
        <div className="card__b">
          <img src={code} width={90} alt="coding" className="icon__card" />
          <CardTiltle>I code,too</CardTiltle>
          <br />
          <p>
            I love coding because it is fun-The sense of accomplishment when
            solving a really complicated problem cannot be beat!
          </p>
        </div>
        <div className="card__c">
          <img src={teams} width={90} alt="coding" className="icon__card" />
          <CardTiltle>Easily Adaptive</CardTiltle>
          <br />
          <p>
            I thrive well in a rapid growing and progressive company that
            encourange continous improvement.
          </p>
        </div>
      </BodyRow>
      <button type="submit"  className="btn__body" >Learn More</button>
      <Main />
      <BottomSection />
    </Container>
  );
}

export default Body;
