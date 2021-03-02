import { ExternalLink } from "react-external-link";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { BodyHeading, Heading, SubHeading,Container } from "./styled";

function Contributions() {
  return (
    <Container>
      <Main>
      <BodyHeading>
        <Heading>What have I been to?</Heading>
        <SubHeading>
          I have never stop
          learning and improving my technical knowledge I do that getting building side projects,
          and contributing on github.
        </SubHeading>
      </BodyHeading>

      <ExternalLink href="https://github.com/Renda02">
        <Link>Check out my Git Contributions:</Link>
      </ExternalLink>

      <Calendar>
        <GitHubCalendar
          username="renda02"
          theme={themeColor}
          fontSize={18}
          
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Calendar>
      </Main>
    </Container>
  );
}

export default Contributions;

// hoisting

const Main = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  
`;

const Calendar = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Link = styled.h4`
  color: #000;
@media screen and (max-width:720px){
  padding: 1rem;
}
`;

const themeColor = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(338, 78%, 30%)",
  grade3: "hsl(338, 78%, 44%)",
  grade2: "hsl(338, 78%, 58%)",
  grade1: "hsl(338, 78%, 72%)",
  grade0: "#eee",
};
