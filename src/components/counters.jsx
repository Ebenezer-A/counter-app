import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <Button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </Button>
        <ul>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
