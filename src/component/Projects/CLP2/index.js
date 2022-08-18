import React from "react";
import FullpageSlider from "./FullpageSlider";
import fullpageOptions from "./fullpageConfig";

export const CLP2 = () => (
  <React.Fragment>
    <FullpageSlider
      // isFooterOpen={this.state.isFooterOpen}
      // hide={this.hide}
      // show={this.show}
      {...fullpageOptions}
    />
  </React.Fragment>
);
