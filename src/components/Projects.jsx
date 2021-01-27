
import styled from "styled-components";
import Project from "./Project"

import { BodyHeading,  Heading, SubHeading } from "./styled";




function Projects(props) {



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
      <Project
      />
      
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





