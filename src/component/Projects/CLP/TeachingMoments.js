import React, { Component } from "react";
import SplitText from "react-pose-text";
import { Player } from "video-react"

const charPoses = {};

class TeachingMoments extends Component {
  render() {
    let teachingMoment = this.props.teachingMoment;
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Teaching Moment</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                    {teachingMoment.name}
                    </SplitText>
                  </h2>
                  <p>
                  {teachingMoment.description}
                  </p>
                </div>
              </div>
              <div className="col-lg-10">
                <div>
                    <Player
                    playsInline
                    src={teachingMoment.videoUrl}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeachingMoments;
