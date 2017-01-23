import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list.component';
// import Greetings from './components/greetings.component';
import Counter from './components/counter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', tasks: [{text: 'This is', editing: true}, {text: 'test', editing: false}, {text: 'task', editing: false}]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleList = this.handleList.bind(this);
    this.editing = this.editing.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    let newValue = this.state.value;
    let newTasks = this.state.tasks;
    newTasks.push(newValue);
    this.setState({
      value: "",
      tasks: newTasks
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleList(index) {
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1)
    this.setState({
      tasks: newTasks
    })
  }

  editing(index) {
    let newTasks = this.state.tasks;
    newTasks[index].editing = true;
    console.log(newTasks[index])
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter start={10} />
        <div className="Todo-app">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter text here" id="text" value={this.state.value} onChange={this.handleChange}/>
            <input type="submit" value="Add to list" onClick={this.handleClick}/>
          </form>
          <h2>Add smth to your list</h2>
          <h6>There is: {this.state.tasks.length} tasks</h6>
          <TodoList tasks={this.state.tasks} callback={this.handleList} editing={this.editing}/>
        </div>
      </div>
    );
  }
}

export default App;
