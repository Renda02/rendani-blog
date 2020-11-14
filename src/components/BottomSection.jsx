import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import avatar from "../images/html.jpg";



function BottomSection() {
  return (
    <MainSection>
      <Wrapper>
        <Heading>
          <h2>My most recent adventures</h2>
          <Intro>
            Get to know projects I've worked with and what technologies I've
            used.{" "}
          </Intro>
        </Heading>
        <Project>
          <div className="card__a">
            <Image src={avatar} alt="project 1" className="card<Image" />
            <CardHeading>Project 1</CardHeading>
            <Paragraph>
              Simple weather app created using HTML,CSS,Bootstrap and JS. I use
              the Open Weather Map API to fetch data.
            </Paragraph>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
                <Span href="/">Source Code </Span>
              </ExternalLink>
              <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
                <Span href="/">Live Demo</Span>
              </ExternalLink>
            </DemoLink>
          </div>
          <div className="card__b">
            <Image src={avatar} alt="project 1" className="card<Image" />
            <CardHeading>Project 2</CardHeading>
            <Paragraph>
              A React Weather App that display weather for next 5 hours and
              fetched data using Open Weather API.
            </Paragraph>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/weather-react">
                <Span>Source Code </Span>
              </ExternalLink>
              <ExternalLink href="https://heuristic-kilby-a7fe7c.netlify.app/">
                <Span>Live Demo</Span>
              </ExternalLink>
            </DemoLink>
          </div>
          <div className="card__b">
            <Image src={avatar} alt="project 3" className="card<Image" />
            <CardHeading>Project 3</CardHeading>
            <Paragraph>
              Covid Tracker that is mobile-friendly that was built using React
              and Material UI. I fetch data from disease.sh - Open Disease Data
              daily data
            </Paragraph>
            <DemoLink>
              <ExternalLink href="https://github.com/Renda02/COVID-Tracker">
                <Span>Source Code </Span>
              </ExternalLink>
              <ExternalLink href="https://infallible-jackson-4be24d.netlify.app/">
                <Span>Live Demo</Span>
              </ExternalLink>
            </DemoLink>
          </div>
        </Project>
       
      </Wrapper>
    </MainSection>
  );
}

export default BottomSection;

const MainSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  z-index: 1;
  color: #000000;
`;

const Wrapper = styled.div`
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

const Heading = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: #000000;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 100%;
`;

const Image = styled.img`
  border: 5px;
  margin: auto;
  max-width: 350px;
  display:flex;
`;

const Intro = styled.p`
  font-weight: 200px;
`;

const Project = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  padding: 2px 16px;
`;

const CardHeading = styled.h4`
  font-size: 20px;
  text-align: center;
`;

const DemoLink = styled.div`
  padding: 3px;
  border: none;
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
padding:5px;
line-height:10px;
margin:5px;`;

const Paragraph = styled.p`
margin-bottom:8px;
`;