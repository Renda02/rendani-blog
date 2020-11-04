import Typed from "react-typed";
import avatar from "../images/image.JPG";
import styled from "styled-components"

const IntroContainer = styled.div`
  text-align: center;
  line-height: 24px;
  padding-top: 200px;
  padding-bottom: 175px;
  display: flex-start;
`;


function TopSection() {
  return (
    <div className="top__section">
      <IntroContainer>
        <p>Hello , I am</p>
        <h1>Rendani Luvhengo</h1>
        <br />
        <p className="title">
          <Typed
            strings={["Front End Developer"]}
            typeSpeed={30}
            showCursor={false}
          />
        </p>
      </IntroContainer>
      <img src={avatar} alt="logo" />
    </div>
  );
}

export default TopSection;
