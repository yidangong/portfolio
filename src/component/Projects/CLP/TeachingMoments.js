import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Corrective feedback",
    description: "Clarification request and explicit feedback",
    videoId: "Q6fWKXKK8ZA",
  },
  {
    name: "Teaching Moment 2",
    title: "Grammar Explaining",
    description: "Explaining the difference between the past simple passive and the present perfect passive",
    videoId: "vGljBY1TBwc",
  },
  {
    name: "Teaching Moment 3",
    title: "Giving writing instructions",
    videoId: "dRZnhYLXllM",
  },
  {
    name: "Teaching Moment 4",
    title: "Provide Feedback",
    description: "Answering a student's question in the breakout room",
    videoId: "V042MK1Z4I4",
  },
  {
    name: "Teaching Moment 5",
    title: "Scaffolding an activity",
    description: "Scaffolding a writing activity by analyzing a letter with suggestions",
    videoId: "IkSKG4YkJ4U",
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
            <div className="row video">
              <div className="col-lg-12 youtube">
                <iframe
                  id="ytplayer"
                  type="text/html"
                  title={teachingMoment.title}
                  allow="fullscreen;"
                  src={`https://www.youtube.com/embed/${teachingMoment.videoId}?autoplay=0&origin=https://www.gongyidan.com`}
                  frameborder="0"
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
