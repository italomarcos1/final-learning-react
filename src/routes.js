import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Users from './pages/Users';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users/:nation/:amounts" component={Users} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
