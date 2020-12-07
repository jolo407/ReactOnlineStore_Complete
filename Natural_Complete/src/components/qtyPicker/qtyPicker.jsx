import React, { Component } from "react";
import "./qtyPicker.css";

class QtyPicker extends Component {
  state = {
    qnty: 1,
  };

  render() {
    return (
      <div className="qtyPicker">
        <h6>{this.state.name}</h6>

        <button className="btn btn-sm btn-info" onClick={this.decrease}>-</button>
        <label>{this.state.qnty}</label>

        <button className="btn btn-sm btn-info" onClick={this.increase}>+</button>
      </div>
    );
  }

  increase = () => {
      
    /**
     * * read current value
     * increase it by 1
     * update the state
     */

    var current = this.state.qnty;
    current += 1;
    this.setState({qnty: current });
    this.props.onValueChange(current);


      //state is inmutable, you should not modify it,
      // call the setState instead
      
  };

    decrease = () => {
        var current = this.state.qnty - 1;
        //if the current is greater than 0, then apply current
        if(current > 0) {
        this.setState({qnty: current})
        this.props.onValueChange(current);
        }
    };
}

export default QtyPicker;
