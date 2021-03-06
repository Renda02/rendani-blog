import { ExternalLink } from "react-external-link";
import styled from "styled-components";
import sass from "../images/sass.png";
import weatherly from "../images/weatherly.png";
import evently from "../images/event.png";
import { BodyHeading, Heading, SubHeading, Button } from "./styled";

function Projects() {
  return (
    <Wrapper>
      <BodyHeading>
        {" "}
        <Heading>My most recent projects</Heading>
        <SubHeading>
          Get to know the latest projects I've worked with and what technologies
          I've used building each one of them.
        </SubHeading>
      </BodyHeading> <Main>
        <div >
          <Imagely src={evently} alt="weather" />
        </div>
        <Info>
          <Title>
            <h2>Event App</h2>
          </Title>

          <div>
            <p>
              A responsive website built using React, styled components and Node.js as Backend that isused to fetch data,add data and will be adding how a user can filter events using date or days.
            </p>
          </div>
          <ButtonWrap>
          
              <ExternalLink
                href="https://eventily-app.netlify.app"
                target="_blank"
              >
                 <Button>
                Live Demo </Button>
              </ExternalLink>
           

            
              <ExternalLink
                href="https://github.com/Renda02/event-app"
                target="_blank"
              >
                {" "}
               <Button> Source Code</Button>
              </ExternalLink>
            
          </ButtonWrap>
        </Info>
      </Main>
      <Main>
        <div >
          <Image src={sass} alt="weather" />
        </div>
        <Info>
          <Title>
            <h2>SASS Website</h2>
          </Title>

          <div>
            <p>
              A responsive website built using HTML,SASS and JavaScript with
              smooth scroll and multiple pages.
            </p>
          </div>
          <ButtonWrap>
           
              <ExternalLink
                href="https://sass-website.netlify.app"
                target="_blank"
              >
                {" "}
                 <Button>Live Demo   </Button>
              </ExternalLink>
         

          
              
              <ExternalLink
                href="https://github.com/Renda02/sass-website"
                target="_blank"
                
              >
                {" "}
                 <Button> Source Code </Button>
              </ExternalLink>
           
          </ButtonWrap>
        </Info>
      </Main>
      <Main>
        <div >
          <Image src={weatherly} alt="weather" />
        </div>
        <Info>
          <Title>
            <h2>Weatherly App</h2>
          </Title>

          <div>
            <p>
              A real time react weather app that fetch real life data using
              axios and display detailed forecast.It was built using React,
              Bootstap and OpenWeatherAPI.
            </p>
          </div>
          <ButtonWrap>
           
              <ExternalLink
                href="https://heuristic-kilby-a7fe7c.netlify.app/"
                target="_blank"
                color="fff"
              >
                {" "}
                <Button> Live Demo </Button>
              </ExternalLink>
           

            
              <ExternalLink
                href="https://github.com/Renda02/weather-react"
                target="_blank"
              ><Button>
                {" "}
                Source Code </Button>
              </ExternalLink>
           
          </ButtonWrap>
        </Info>
      </Main>
    </Wrapper>
  );
}

export default Projects;

const Wrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 20px;
  color: #000000;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
  
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;

  @media screen and (max-width:720px){
    flex-direction:column;
justify-content:space-evenly;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 0.3rem;
  object-fit: cover;
  max-height:400px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

const Imagely = styled.img`
  width: 100%;
  height: 350%;
  max-height:400px;
  border-radius: 0.3rem;
  object-fit: cover;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

const Info = styled.div`
  flex: 2;
  padding: 2rem;
`;
