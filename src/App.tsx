import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound/NotFound";
import View from "./pages/View";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/list/:id" component={View} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
