import React, { Component } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
class SingleItem extends Component {
  state = {
    loading: true,
    task: {}
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/api/v1/task/${id}`).then(res => {
      this.setState({
        loading: false,
        task: res.data
      });
    });
  }

  render() {
    const { title, is_done, id } = this.state.task;

    if (this.state.loading) {
      return <h4>Cargando...</h4>;
    }
    return <TaskCard title={title} isDone={is_done} id={id} />;
  }
}

export default SingleItem;
