import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // get the relevant piece of data from the response object
        const { advice } = response.data.slip;
        // console.log(advice);

        // add the data to the state so that it is accessible where it will be used
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //access the data from the state
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          {/* use the data here */}
          <h1 className="heading">{advice}</h1>
          <button onClick={this.fetchAdvice} className="button">
            <span>ADVICE ME!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
