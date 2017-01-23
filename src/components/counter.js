import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.start
    }
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus() {
    this.setState({
      num: this.state.num + 1
    });
  }

  handleClickMinus() {
    this.setState({
      num: this.state.num - 1
    });
  }
  
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClickMinus}>-</button>
        <span>{this.state.num}</span>
        <button type="button" onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
}

export default Counter;