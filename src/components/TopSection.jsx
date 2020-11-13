import Typed from "react-typed";
import avatar from "../images/image.JPG";
import styled from "styled-components";



function TopSection() {
  return (
    <Body>
      <IntroContainer>
        <About>
          <Greetings>Hello , I am</Greetings>
        <Name>Rendani Luvhengo</Name>
        
        <Title>
          <Typed
            strings={["Front End Developer"]}
            typeSpeed={30}
            showCursor={false}
          />
          </Title>
        </About>
       
      </IntroContainer>
      <Image src={avatar} alt="logo" />
    </Body>
  );
}

export default TopSection;

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
  color: #e39aa4;
  font-size: 40px;
  text-align: center;
  padding-bottom: auto;
  height: 70px;
`;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height:40px;
  
`;

const Image=styled.img`  border: 5px;
  margin: auto;
  max-width: 350px;
  display: block;`

const Greetings = styled.h6`
font-size:20px;
color:#000;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 40px;
`;