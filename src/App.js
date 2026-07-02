import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*-----pages-----*/
import { NotFound } from "./404";
import { HealthCheck } from "./HealthCheck";

import { Home } from "./Home";

import { CLP } from "./component/Projects/CLP";
import { CLP2 } from "./component/Projects/CLP2";
import { EFL } from "./component/Projects/EFL";
import { JEEP } from "./component/Projects/JEEP";
import { OurStory } from "./component/Projects/OurStory";
// import { EduBot } from "./component/Projects/EduBot";
import { Programming } from "./component/Projects/Programming";
import { VisualMelody } from "./component/Projects/VisualMelody";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* <Route path="/Projects/2022301" component={EduBot} /> */}
            <Route path="/Projects/2022102" component={OurStory} />
            <Route path="/Projects/2022201" component={CLP2} />
            <Route path="/Projects/2022101" component={CLP} />
            <Route path="/Projects/2021301" component={JEEP} />
            <Route path="/Projects/2020401" component={EFL} />
            <Route path="/Projects/2019101" component={Programming} />
            <Route path="/Projects/2022401" component={VisualMelody} />

            <Route path="/ping" component={HealthCheck} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
