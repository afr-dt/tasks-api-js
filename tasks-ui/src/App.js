import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import ItemsBody from './components/ItemsBody';
import SingleItem from './components/SingleItem';
import CreateTask from './components/CreateTask';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/new" component={CreateTask} />
            <Route path="/:id" component={SingleItem} />
            <Route path="/" exact component={ItemsBody} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
