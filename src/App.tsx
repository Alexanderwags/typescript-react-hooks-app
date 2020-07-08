import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <>
      <div>
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/">About Page</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About Page</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
