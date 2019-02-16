import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;
