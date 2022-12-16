import React, { Component } from "react";
import ReactPlayer from "react-player";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Corrective feedback",
    description: "Clarification request and explicit feedback",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp/teaching-moment-1.mp4",
    videoPoster: "../docs/CLP/capture/teaching-moment-1.png",
  },
  {
    name: "Teaching Moment 2",
    title: "Grammar Explaining",
    description: "Explaining the difference between the past simple passive and the present perfect passive",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp/teaching-moment-2.mp4",
    videoPoster: "../docs/CLP/capture/teaching-moment-2.png",
  },
  {
    name: "Teaching Moment 3",
    title: "Giving writing instructions",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp/teaching-moment-3.mp4",
    videoPoster: "../docs/CLP/capture/teaching-moment-3.png",
  },
  {
    name: "Teaching Moment 4",
    title: "Provide Feedback",
    description: "Answering a student's question in the breakout room",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp/teaching-moment-4.mp4",
    videoPoster: "../docs/CLP/capture/teaching-moment-4.png",
  },
  {
    name: "Teaching Moment 5",
    title: "Scaffolding an activity",
    description: "Scaffolding a writing activity by analyzing a letter with suggestions",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp/teaching-moment-5.mp4",
    videoPoster: "../docs/CLP/capture/teaching-moment-5.png",
  },
]

class TeachingMoments extends Component {
  render() {
    return (teachingMoments.map((teachingMoment, i) => {
      return (
        <div className={`teaching-moments ${i % 2 === 1 ? "bg_color" : ""}`} id="teaching_moments">
          <div className="container">
            <div className="row">
              <SectionTitleTwo stitle={teachingMoment.name} btitle={teachingMoment.title} />
            </div>
            <div className="row">
              <span className="br">{teachingMoment.description}</span>
            </div>
            <div className="row">
              <div className="col-12">
                <ReactPlayer
                  controls
                  url={teachingMoment.videoUrl}
                  onPause
                  width="100%"
                  height="100%"
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }))
  }
}

export default TeachingMoments;
