import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <MainWrapper>
        <Heading>
          <h2> What have I been to</h2>
          <Intro>
            Now that I am pursuing web development as my career, I have never
            stop learning and improving my technical knowledge by getting into
            coding, following content that insipire me and networking.
          </Intro>
          <br />
        </Heading>
        <h4>Check out my GitHub Calendar:</h4>
        <Calendar >
          <GitHubCalendar
            username="renda02"
            theme={themeColor}
            fontSize={18}
            fullYear={false}
    
          >
            <ReactTooltip delayShow={50} html />
          </GitHubCalendar>
        </Calendar>
      </MainWrapper>
    </Container>
  );
}

export default Main;


// hoisting
const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  background: #f4f3f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

const MainWrapper = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const Intro = styled.p`
font-weight:200px;`;

const Heading = styled.div`
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

const Calendar = styled.div`
margin:auto;
  padding: 20px;
text-align:center;
  
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