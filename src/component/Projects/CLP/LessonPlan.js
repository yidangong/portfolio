import React, { Component } from "react";
import SplitText from "react-pose-text";

const charPoses = {};
class LessonPlan extends Component {
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
                    <SplitText charPoses={charPoses}>Lesson Plan</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                    Favorite Lesson Plans
                    </SplitText>
                  </h2>
                  <p>
                    Textbook: Interchange 3
                  </p>
                  <a href="./docs/CLP/lesson-plan-one.pdf" className="see_btn" target="_blank" data-text="See Document" >
                    Lesson Plan One
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                  <br/>
                  <a href="./docs/CLP/lesson-plan-two.pdf" className="see_btn" target="_blank" data-text="See Document" >
                    Lesson Plan Two
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <a href="./docs/CLP/lesson-plan.pdf" className="see_btn" target="_blank" data-text="See Document" >
                    <img
                      src={require("../../../image/portfolio/clp/lesson-plan-one.png")}
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

export default LessonPlan;
