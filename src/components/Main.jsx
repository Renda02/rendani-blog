import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function Main() {

const exampleTheme = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(338, 78%, 30%)",
  grade3: "hsl(338, 78%, 44%)",
  grade2: "hsl(338, 78%, 58%)",
  grade1: "hsl(338, 78%, 72%)",
  grade0: "#eee",
};

    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="main__heading">
          <h2> What have I been to</h2>
          <h3>
            I come from manufacturing and construstion industry where
            quality-work,continuous improvement and meeting all customer's
            requirements is a priority. But in the end, my fascination with tech
            inspired me take the leap.
          </h3>
          <br />
        </div>
        <div className="calendar">
          <h3>GitHub Calendar</h3>
          <GitHubCalendar username="renda02" theme={exampleTheme} fontSize={18}>
            <ReactTooltip delayShow={50} html />
          </GitHubCalendar>
        </div></div>
        
      </div>
    );
}

export default Main
