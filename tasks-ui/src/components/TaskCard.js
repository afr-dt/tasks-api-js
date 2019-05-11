import React, { Component } from 'react';
import SingleTaskList from './SingleTaskList';
import CreateEditTask from './CreateEditTask';

class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: props.title,
      isDone: props.isDone
    };
  }

  onEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  onDelete = () => {};

  updateState = (title, isDone) => {
    this.setState({
      title: title,
      isDone: isDone
    });
  };

  render() {
    const { title, isDone, editing } = this.state;

    if (editing) {
      return (
        <div>
          <CreateEditTask
            title={title}
            isDone={isDone}
            toggleEdit={this.onEdit}
            id={this.props.id}
            updateState={this.updateState}
          />
        </div>
      );
    }

    return (
      <SingleTaskList
        title={title}
        isDone={isDone}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        id={this.props.id}
      />
    );
  }
}

export default TaskCard;
