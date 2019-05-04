import React, { Component, Fragment } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import _ from 'lodash';

class ItemsBody extends Component {
  state = {
    loading: true,
    tasks: {}
  };

  componentDidMount() {
    /**
     * Here use axios or fetch
     */
    fetch('http://localhost:8000/api/v1/task/')
      .then(response => response.json())
      .then(res => this.setState({ loading: false, tasks: res }));
  }

  renderTasks = () => {
    return _.map(this.state.tasks, task => {
      return (
        <ListItem key={task.id} title={task.title} isDone={task.is_done} />
      );
    });
  };

  render() {
    /**
     *  Here render to ui
     */

    if (this.state.loading) {
      return <h3>Cargando...</h3>;
    }
    return (
      <Fragment>
        <ListItems>{this.renderTasks()}</ListItems>
      </Fragment>
    );
  }
}

export default ItemsBody;
