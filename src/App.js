import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { Home2 } from "./Home2";
import { NotFound } from "./404";
// import { CLP2 } from "./component/Projects/CLP2";
import { HealthCheck } from "./HealthCheck";

import { Home } from "./Home";
import { Home3 } from "./Home3";
import { Home4 } from "./Home4";
import { Home5 } from "./Home5";
import { Home6 } from "./Home6";
import { Homefrelencer } from "./Home-frelencer";
import { Creativecarousel } from "./Creative-carousel";
import { HomeDeveloper } from "./Home-developer";

import { CLP } from "./component/Projects/CLP";
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
            <Route path="/Home" component={Home} />
            <Route path="/Home3" component={Home3} />
            <Route path="/Home4" component={Home4} />
            <Route path="/Home5" component={Home5} />
            <Route path="/Home6" component={Home6} />
            <Route path="/Home-frelencer" component={Homefrelencer} />
            <Route path="/Creative-carousel" component={Creativecarousel} />
            <Route path="/Home-developer" component={HomeDeveloper} />

            <Route path="/Projects/2022201" component={CLP2} />
            <Route path="/Projects/2022101" component={CLP} />

            <Route path="/ping" component={HealthCheck} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
