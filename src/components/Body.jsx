import code from "../images/code.svg";
import teams from "../images/adapt.svg";
import goal from "../images/goal.svg";
import TopSection from "./TopSection";
import Main from "./Main";


function Body() {
  return (
    <div className="body">
      <TopSection />
      <div className="body__heading">
        <h2> Who am I?</h2>
        <h3>
          {" "}
          I come from manufacturing and construction industry where
          quality-work,continuous improvement and meeting all customer's
          requirements is a priority. But in the end, my fascination with tech
          inspired me take the leap.{" "}
        </h3>
      </div>
      <div className="body_row">
        <div className="card__a">
          <img src={goal} width={90} alt="coding" className="icon__card" />
          <h4 className="card__title">Goal Oriented</h4>
          <br />

          <p>
            I am focused on meeting all deliverables while maintaining
            reliability and meeting customer's expectations.
          </p>
        </div>
        <div className="card__b">
          <img src={code} width={90} alt="coding" className="icon__card" />
          <h4 className="card__title">I code,too</h4>
          <br />
          <p>
            I love coding because it is fun-The sense of accomplishment when
            solving a really complicated problem cannot be beat!
          </p>
        </div>
        <div className="card__c">
          <img src={teams} width={90} alt="coding" className="icon__card" />
          <h4 className="card__title">Easily Adaptive</h4>
          <br />
          <p>
            I thrive well in a rapid growing and progressive company that
            encourange continous improvement.
          </p>
        </div>
      </div>
      <input type="submit" placeholder="Learn more" />
      <Main />
    </div>
  );
}

export default Body;
