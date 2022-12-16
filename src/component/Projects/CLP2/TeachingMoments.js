import React, { Component } from "react";
import ReactPlayer from "react-player";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    title: "Corrective feedback",
    description: "Clarification request. We were working on idenfying the number of syllables of different words and finding the major stress",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-1.mov",
    videoPoster: "../docs/CLP2/capture/teaching-moment-1.png",
  },
  {
    name: "Teaching Moment 2",
    title: "Giving instructions and modaling",
    description: "We were practicing using present perfect to ask and answer yes or no question: 'Have you ever done something?' Students were asked to write five unique things they have experienced, now they are putting them into questions and sharing with partners.",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-2.mov",
    videoPoster: "../docs/CLP2/capture/teaching-moment-2.png",
  },
  {
    name: "Teaching Moment 3",
    title: "Teaching pronunciation",
    description: "Voiceless dental fricative [θ]",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-3.mp4",
    videoPoster: "../docs/CLP2/capture/teaching-moment-3.png",
  },
  {
    name: "Teaching Moment 4",
    title: "Grammar explanation",
    description: "We were reviewing expression of quantity with uncountable nouns",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-4.mp4",
    videoPoster: "../docs/CLP2/capture/teaching-moment-4.png",
  },
  {
    name: "Teaching Moment 5",
    title: "Metalinguistic feedback",
    description: "Students were describing a living environment, they were confused about 'desert' and 'dessert' as well as the pronunciations",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-5.mov",
    videoPoster: "../docs/CLP2/capture/teaching-moment-5.png",
  },
  {
    name: "Teaching Moment 6",
    title: "An interesting game",
    description: "Snack Guessing. I got five different snacks for students, we talked about each with names on the board. I put them in a bag and every student was picking one snack from the bag without showing it to others. They were trying to descirbe the taste using the adjectives on the board, and other students were guessing the name of the snack. Then they talked if they have ever eaten it or not. (pre-stage: introducing present perfect and emphasizing it's used to refer to a time period that started in the past)",
    videoUrl: "https://yidangongportfolio.blob.core.windows.net/protfolio-video/clp2/teaching-moment-6.mov",
    videoPoster: "../docs/CLP2/capture/teaching-moment-6.png",
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
