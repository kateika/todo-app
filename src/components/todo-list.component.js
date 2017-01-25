import React from 'react';
import Edit from './edit.component';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClick(index) {
    this.props.callback(index);
  }

  handleClickEdit(index) {
    this.props.editing(index);
  }

  currentTask(task, index) {
    if(task.editing) {
      return <Edit text={task.text} save={this.props.save} index={index}/>
    } else {
      return (<div>
        {task.text}
        <button type="button" onClick={() => this.handleClickEdit(index)}>Edit</button>
        <button type="button" onClick={() => this.handleClick(index)}>Delete</button>
      </div>);
    }
  }

  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return <li key={index}>
        {this.currentTask(task, index)}
      </li>;
    });

    return (
      <ul>{tasks}</ul>
    );
  }
}

export default TodoList;
