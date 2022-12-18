import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Introducing the topic: family members",
    description: "Introducing the topic by showing a picture of a monkey's family and leading students to identify the names such as “sister\" and “grandma\" in Chinese. ",
    videoId: "oLfRNYKiyps",
  },
  {
    name: "Teaching Moment 2",
    title: "Teaching \"Grandpa\"",
    description: "Teaching the meaning and pronunciation of word \"grandpa\" and encouraging every student to say hello to little monkey's grandpa in the picture. ",
    videoId: "lQvCv8smg48",
  },
  {
    name: "Teaching Moment 3",
    title: "A Review Game",
    description: "After learning \"grandpa\" and \"grandma\", students were asked to play a fun game by saying the correct word by identifying the picture on a partner's hand.",
    videoId: "8BhW55wBEKQ",
  },
  {
    name: "Teaching Moment 4",
    title: "Little Train Game",
    description: "Students were invited to join the line of a little train if they can correctly pronounce the word \"sister\".",
    videoId: "7syihj8RVBo",
  },
]

class TeachingMoments extends Component {
  render() {
    return (
      <section id="teaching_moments">
        {
          teachingMoments.map((teachingMoment, i) => {
            return (
              <div className={`teaching-moments ${i % 2 === 1 ? "bg_color" : ""}`}>
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
