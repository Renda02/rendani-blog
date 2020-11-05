import Typed from "react-typed";
import avatar from "../images/image.JPG";
import styled from "styled-components";

const IntroContainer = styled.div`
  text-align: center;
  line-height: 24px;
  padding-top: 200px;
  padding-bottom: 175px;
  display: flex-start;
`;

const Body = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  height: 665px;

  padding: 1 rem;
`;

const Title = styled.p`
  font-family: "Roboto", sans-serif;
  color: #e6739f;
  font-size: 40px;
  text-align: center;
  padding-bottom: auto;
  height: 70px;`

const Name = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
`;

function TopSection() {
  return (
    <Body>
      <IntroContainer>
        <p>Hello , I am</p>
        <Name>Rendani Luvhengo</Name>
        <br />
        <Title>
          <Typed
            strings={["Front End Developer"]}
            typeSpeed={30}
            showCursor={false}
          />
        </Title>
      </IntroContainer>
      <img src={avatar} alt="logo" />
    </Body>
  );
}

export default TopSection;
