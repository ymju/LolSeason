import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from './pages/Main/Index';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </>
  );
}

export default App;
