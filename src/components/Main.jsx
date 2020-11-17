import { ExternalLink } from "react-external-link";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <Heading>
        <h2> What have I been to</h2>
        <p>
          Now that I am pursuing web development as my career, I have never stop
          learning and improving my technical knowledge by getting into coding,
          following content that insipire me and networking.
        </p>
      </Heading>
      
        <ExternalLink href="https://github.com/Renda02">
          <Link>Check out my Git Contributions:</Link>
        </ExternalLink>
   
      <Calendar>
        <GitHubCalendar
          username="renda02"
          theme={themeColor}
          fontSize={18}
          fullYear={false}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Calendar>
    </Container>
  );
}

export default Main;

// hoisting

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.div`
  font-size: 20px;
  padding: 1rem 0;
`;

const Calendar = styled.div`
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Link = styled.h4`
  color: #000;
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
