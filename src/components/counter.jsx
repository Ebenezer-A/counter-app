import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handelDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <Badge className={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        <Button
          onClick={() => this.handelIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm m-1"
        >
          Increment
        </Button>
        <Button
          onClick={this.handelDecrement}
          className="btn btn-danger btn-sm"
        >
          Decrement
        </Button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
