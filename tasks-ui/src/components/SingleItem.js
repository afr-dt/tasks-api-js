import React, { Component } from 'react';
import axios from 'axios';
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
    console.log(this.state.task);

    if (this.state.loading) {
      return <h4>Cargando...</h4>;
    }

    return <div> {this.state.task.title} </div>;
  }
}

export default SingleItem;
