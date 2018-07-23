import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;



// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
        </div>
      </div>
    );
  }
}

export default Title;