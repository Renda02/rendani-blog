import React, { useState } from "react";

// Props is info from parent --> children
// -- children cannot change props
// -- unidirectional data flow
// State is data that:
// - a component owns

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    // console.log(e.target.value, "value of the input");
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { label, name } = this.props;
    const { date } = this.state;

    return (
      <div>
        <label>{label}</label>
        <input name={name} onChange={this.onInputChange}></input>
        <div>Last modified: {date.toString()}</div>
      </div>
    );
  }
}

function InputNewVersion({ label, name }) {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        onChange={function (e) {
          setDate(new Date());
        }}
      ></input>
      <div>Last modified: {date.toString()}</div>
    </div>
  );
}

// Pass functions as props
// useEffects

export default function Form() {
  return (
    <form>
      <InputNewVersion label="Name:" name=""></InputNewVersion>
      <Input label="Phone Number:" name="phoneNumber"></Input>
    </form>
  );
}


/*
https://babeljs.io/en/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAECSB2AHArgF2gUwB6o_AJjAEoZjCoB0AwgPYC2iN8e6A3gFDvTQBOe-GHgAoAlNA5duvDKmQ940IZKnQAPPgCWANwB8ylWvAAjDCB2tjpgL6qA9JbP6VqjUjTR4YOhgC8rT95W0ExUABZg8ADmvqyooRoQFEwIKKhhEdFWOnauqXoGUuraOgAykOh0NJoAZhoY-ABc4vhguBSoNADKqDyukaI2tpq6TmpDxfoiANySVuxWQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.12.3&externalPlugins=
*/