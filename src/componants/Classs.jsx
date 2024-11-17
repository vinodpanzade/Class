import React, { Component } from "react";
import "./Class.css"; // Import the CSS file
import "./Functionals.jsx"
import Functionals from "./Functionals.jsx";
class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-container" >
        <Functionals/>
        <h1 className="counter-title" style={{marginTop:"-100"}}>Class-Based Counter</h1>
        <p className="counter-value">Count: {this.state.count}</p>
        <button className="counter-button" onClick={this.increment}>
          Increment
        </button>



      </div>
    );
  }
}

export default Class;
