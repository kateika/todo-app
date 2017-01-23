import React from 'react';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, countes: [] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var newCountes = this.state.countes;
    var newCounter = this.state.counter + 1;
    newCountes.push(newCounter);
    this.setState({
      countes: newCountes,
      counter: newCounter
    });
  }

  render() {
    const items = this.state.countes.map(n => {
      return <li>{n}</li>;
    });

    return (
      <div>
        <span>Hello {this.props.name}</span>
        <button onClick={this.handleClick}>OK</button>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Greetings;
