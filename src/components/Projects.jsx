import { ExternalLink } from "react-external-link";
import styled from "styled-components";

import forecast from "../images/forecast.jpeg";
import { BodyHeading, Button, Heading, SubHeading } from "./styled";

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
      </BodyHeading>
      <Main>
        <div className="blog-post-img">
          <Image src={forecast} alt="tree" />
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
            <Button>
              <ExternalLink
                href="https://heuristic-kilby-a7fe7c.netlify.app/"
                target="_blank"
              >
                {" "}
                Demo
              </ExternalLink>
            </Button>

            <Button>
              <ExternalLink
                href="https://github.com/Renda02/weather-react"
                target="_blank"
              >
                {" "}
                Source Code
              </ExternalLink>
            </Button>
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
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Title = styled.div`
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  object-fit: cover;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

const Info = styled.div`
  flex: 2;
  padding: 2rem;
`;
