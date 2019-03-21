import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import TodoForm from './components/Todo/Form';
import TodoList from './components/Todo/List';
import Completed from './components/Todo/completed';
import Deleted from './components/Todo/deleted';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={TodoForm} />
      </Switch>
    </Router>
    <TodoList />
    <Completed/>
    <Deleted/>
  </>
);

export default App;
