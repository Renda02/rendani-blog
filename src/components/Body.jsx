import code from "../images/code.svg";
import teams from "../images/adapt.svg";
import goal from "../images/goal.svg";
import TopSection from "./TopSection";

function Body() {
  return (
    <div className="body">
      <TopSection />
      <div className="body__heading">
        <h2> Who am I?</h2>
        <h3>
          {" "}
          My global outlook and eagerness to learn will help in rapid growth of
          your company.{" "}
        </h3>
      </div>
      <div className="body_row">
        <div className="card__a">
          <img src={goal} width={90} alt="coding" />
          <h4 className="card__title">Goal Oriented</h4>
          <br />

          <p>
            I am focused on meeting all deliverables while maintaining
            reliability and meeting customer's expectations.
          </p>
        </div>
        <div className="card__b">
          <img src={code} width={90} alt="coding" />
          <h4 className="card__title">I code,too</h4>
          <br />
          <p>
            I love coding because it is fun-The sense of accomplishment when
            solving a really complicated problem cannot be beat!
          </p>
        </div>
        <div className="card__c">
          <img src={teams} width={90} alt="coding" />
          <h4 className="card__title">Easily Adaptive</h4>
          <br />
          <p>
            I thrive well in a rapid growing and progressive company that
            encourange continous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
