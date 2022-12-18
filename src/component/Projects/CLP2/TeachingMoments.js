import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Corrective feedback",
    description: "Clarification request. We were working on idenfying the number of syllables of different words and finding the major stress",
    videoId: "T00vAWKC2DI",
  },
  {
    name: "Teaching Moment 2",
    title: "Giving instructions and modaling",
    description: "We were practicing using present perfect to ask and answer yes or no question: 'Have you ever done something?' Students were asked to write five unique things they have experienced, now they are putting them into questions and sharing with partners.",
    videoId: "YBbRNc9-Rck",
  },
  {
    name: "Teaching Moment 3",
    title: "Teaching pronunciation",
    description: "Voiceless dental fricative [θ]",
    videoId: "V4BAjdtkEuc",
  },
  {
    name: "Teaching Moment 4",
    title: "Grammar explanation",
    description: "We were reviewing expression of quantity with uncountable nouns",
    videoId: "WX5lH9qywNo",
  },
  {
    name: "Teaching Moment 5",
    title: "Metalinguistic feedback",
    description: "Students were describing a living environment, they were confused about 'desert' and 'dessert' as well as the pronunciations",
    videoId: "N9JLvlzG_i8",
  },
  {
    name: "Teaching Moment 6",
    title: "An interesting game",
    description: "Snack Guessing. I got five different snacks for students, we talked about each with names on the board. I put them in a bag and every student was picking one snack from the bag without showing it to others. They were trying to descirbe the taste using the adjectives on the board, and other students were guessing the name of the snack. Then they talked if they have ever eaten it or not. (pre-stage: introducing present perfect and emphasizing it's used to refer to a time period that started in the past)",
    videoId: "buYsLRFD5QM",
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
          })}
      </section>
    )
  }
}

export default TeachingMoments;
