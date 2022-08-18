import React, { Component } from "react";
import SplitText from "react-pose-text";

const charPoses = {};

class NeedAnalysis extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Need Analysis</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Need Analysis
                    </SplitText>
                  </h2>
                  <p>
                    Number of Students: 6
                  </p>
                  <a href="./docs/CLP2/need-analysis.pdf" className="see_btn" target="_blank" data-text="See Document" >
                    See Document
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <a href="./docs/CLP2/need-analysis.pdf" className="see_btn" target="_blank" data-text="See Document" >
                    <img
                      src={require("../../../image/portfolio/clp2/need-analysis.png")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NeedAnalysis;
