import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Review Vocabulary",
    description: "We learned different places in town and how to give directions in the last class. For this class, we first reviewed the vocabulary as a whole class, then practiced giving directions in group activities. ",
    videoId: "FU3akJ_PX1Q",
  },
  {
    name: "Teaching Moment 2",
    title: "Pronunciation Practice",
    description: "Leading the review on the pronunciation of the vocabulary related to places in town.",
    videoId: "71OjVAzUQWE",
  },
  {
    name: "Teaching Moment 3",
    title: "Scaffolding and assign groups",
    description: "Scaffolding the pair activity and giving instructions. Students' main task: give directions from a place to another place by identifying them on the map. For example: Norlly is at school now, how can she get to the post office? Could you please give her precise directions? ",
    videoId: "VNIDFIkAC9E",
  },
]

class TeachingMoments extends Component {
  render() {
    return (
      <section id="teaching_moments">
        {
          teachingMoments.map((teachingMoment, i) => {
            return (
              <div className={`teaching-moments ${i % 2 === 0 ? "bg_color" : ""}`}>
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
          })
        }
      </section>
    )
  }
}

export default TeachingMoments;
