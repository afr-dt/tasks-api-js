import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CreateEditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      isDone: props.isDone || false
    };
  }

  onChangeItem = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    const { title, isDone } = this.state;
    const { id, history } = this.props;

    if (id) {
      axios
        .put(`http://localhost:8000/api/v1/task/${id}`, {
          title: title,
          is_done: isDone === 'true'
        })
        .then(() => {
          this.props.updateState(title, isDone === 'true');
          this.props.toggleEdit();
        });
    } else {
      // Here create a new Task 🌚
      axios
        .post(`http://localhost:8000/api/v1/task`, {
          title: title,
          is_done: isDone === 'true'
        })
        .then(() => history.push('/'));
    }
  };

  // onChangeItem = e => {
  //   const target = e.target;
  //   const name = target.name;
  //   this.setState({
  //     [name]: target.value
  //   });
  // };

  render() {
    const { title, isDone } = this.state;

    return (
      <form onSubmit={this.handleSumbit}>
        <div className="form-group">
          <label htmlFor="title"> Título </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.onChangeItem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isDone"> Status </label>
          <select
            name="isDone"
            className="form-control"
            id="isDone"
            value={isDone}
            onChange={this.onChangeItem}
          >
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <button type="submit" className="btn btn-primary">
            Editar
          </button>
          <button
            type="bottom"
            className="btn btn-warning"
            onClick={this.props.toggleEdit}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateEditTask);
