import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Syllabus from "./Syllabus";
import NeedAnalysis from "./NeedAnalysis";
import TeachingPhilosophy from "./TeachingPhilosophy";
import LessonPlan from "./LessonPlan";
import TeachingMoments from "./TeachingMoments";
import Navbar from "./Navbar";

const teachingMoments = [
  {
    name: "Teaching Moment 1",
    description: "Corrective feedback - clarification request. We were working on idenfying the number of syllables of different words and finding the major stress",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-1.mp4",
  },
  {
    name: "Teaching Moment 2",
    description: "Giving instructions and modaling. We were practicing using present perfect to ask and answer yes or no question: 'Have you ever done something?' Students were asked to write five unique things they have experienced, now they are putting them into questions and sharing with partners.",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-2.mov",
  },
  {
    name: "Teaching Moment 3",
    description: "Teaching pronunciation - Voiceless dental fricative [θ]",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-3.mp4",
  },
  {
    name: "Teaching Moment 4",
    description: "Grammar explanation - We were reviewing expression of quantity with uncountable nouns",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-4.mp4",
  },
  {
    name: "Teaching Moment 5",
    description: "Metalinguistic feedback - Students were describing a living environment, they were confused about 'desert' and 'dessert' as well as the pronunciations",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-5.mov",
  },
  {
    name: "Teaching Moment 6",
    description: "An interesting game - Snack Guessing. I got five different snacks for students, we talked about each with names on the board. I put them in a bag and every student was picking one snack from the bag without showing it to others. They were trying to descirbe the taste using the adjectives on the board, and other students were guessing the name of the snack. Then they talked if they have ever eaten it or not. (pre-stage: introducing present perfect and emphasizing it's used to refer to a time period that started in the past)",
    videoUrl: "https://yidangong.blob.core.windows.net/portfolioclp2/teaching-moment-6.mov",
  },
]

const FullpageSlider = (fullpageProps) => (
  <div className="scroll_page">
    <Navbar mainlogo="logo2.png" />
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <React.Fragment>
            <Syllabus />
            <NeedAnalysis />
            <TeachingPhilosophy />
            <LessonPlan />
            {teachingMoments.map((teachingMoment) => (<TeachingMoments teachingMoment={teachingMoment}/>))}
          </React.Fragment>
        );
      }}
    />
    <div
      className="section_bg"
      style={{
        background: "linear-gradient( 90deg, #6f42c1 0%, #0d6efd 100%)",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
    </div>
  </div>
);

export default FullpageSlider;
