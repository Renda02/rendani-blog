import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function Main() {

/*const exampleTheme = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(338, 78%, 30%)",
  grade3: "hsl(338, 78%, 44%)",
  grade2: "hsl(338, 78%, 58%)",
  grade1: "hsl(338, 78%, 72%)",
  grade0: "#eee",
};*/

    return (
      <div className="main">
        <div className="main__wrapper">
          <div className="main__heading">
            <h2> What have I been to</h2>
            <h3>
              Now that I am pursuing web development as my career, I have never stop learning and improving my technical knowledge by getting into coding, following content that insipire me and networking. 
            </h3>

            <br />
          </div>
          <h4>Check out my GitHub Calendar:</h4>
          <div className="calendar">
            <GitHubCalendar
              username="renda02"
             /*</div> theme={exampleTheme}*/
              fontSize={18}
              fullYear={false}

            >
              <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
          </div>
     
        </div>
        
      </div>
    );
}

export default Main
