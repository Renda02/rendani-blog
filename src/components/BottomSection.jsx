import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import avatar from "../images/html.jpg";



function BottomSection() {
  return (
    <Wrapper>
      <Heading>
        <h2>My most recent adventures</h2>
        <p>
          Get to know projects I've worked with and what technologies I've used.{" "}
        </p>
      </Heading>
      <Project>
        <Card>
          <Image src={avatar} alt="project 1" className="card<Image" />
          <CardHeading>Project 1</CardHeading>
          <p>
            Simple weather app created using HTML,CSS,Bootstrap and JS. I use
            the Open Weather Map API to fetch data.
          </p>
          <DemoLink>
            <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
              <Span href="/">Source Code </Span>
            </ExternalLink>
            <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
              <Span href="/">Live Demo</Span>
            </ExternalLink>
          </DemoLink>
        </Card>
        <Card>
          <Image src={avatar} alt="project 1" className="card<Image" />
          <CardHeading>Project 2</CardHeading>
          <p>
            A React Weather App that display weather for next 5 hours and
            fetched data using Open Weather API.
          </p>
          <DemoLink>
            <ExternalLink href="https://github.com/Renda02/weather-react">
              <Span>Source Code </Span>
            </ExternalLink>
            <ExternalLink href="https://heuristic-kilby-a7fe7c.netlify.app/">
              <Span>Live Demo</Span>
            </ExternalLink>
          </DemoLink>
        </Card>
        <Card>
          <Image src={avatar} alt="project 3" className="card<Image" />
          <CardHeading>Project 3</CardHeading>
          <p>
            Covid Tracker that is mobile-friendly that was built using React and
            Material UI. I fetch data from disease.sh - Open Disease Data daily
            data
          </p>
          <DemoLink>
            <ExternalLink href="https://github.com/Renda02/COVID-Tracker">
              <Span>Source Code </Span>
            </ExternalLink>
            <ExternalLink href="https://infallible-jackson-4be24d.netlify.app/">
              <Span>Live Demo</Span>
            </ExternalLink>
          </DemoLink>
        </Card>
      </Project>
    </Wrapper>
  );
}

export default BottomSection;


const Wrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap:wrap;
  font-size: 20px;
  color: #000000;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

const Heading = styled.div`
  font-size: 20px;
padding:20px 0;
  
`;

const Project = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
`;

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-basis:33%;
padding:1rem;`;

const Image = styled.img`
  border: 5px;
  margin: auto;
  width:50%;
  display:flex;
`;

const CardHeading = styled.h4`
  font-size: 20px;
  line-height:2rem;
  text-align: center;
`;

const DemoLink = styled.div`
 
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
padding:5px;
line-height:10px;
margin:5px;`;

