import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.text
    }
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickSave(index) {
    this.props.callback(index);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button type="button" onClick={this.handleClickSave}>Save</button>
      </div>
    );
  }
}

export default Edit;