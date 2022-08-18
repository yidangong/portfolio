import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { CLP } from "./component/Projects/CLP/index";
import { Home2 } from "./Home2";
import { NotFound } from "./404";
import { CLP2 } from "./component/Projects/CLP2";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home2} />
            <Route path="/CLP" component={CLP} />
            <Route path="/CLP2" component={CLP2} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
