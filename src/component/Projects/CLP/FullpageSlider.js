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
    description: "Corrective Feedback: clarification request and explicit feedback",
    videoUrl: "./docs/CLP/video/teaching-moment-1.mp4",
  },
  {
    name: "Teaching Moment 2",
    description: "Explaining the difference between the past simple passive and the present perfect passive",
    videoUrl: "./docs/CLP/video/teaching-moment-2.mp4",
  },
  {
    name: "Teaching Moment 3",
    description: "Giving writing instructions",
    videoUrl: "./docs/CLP/video/teaching-moment-3.mp4",
  },
  {
    name: "Teaching Moment 4",
    description: "Answering a student's question in the breakout room",
    videoUrl: "./docs/CLP/video/teaching-moment-4.mp4",
  },
  {
    name: "Teaching Moment 5",
    description: "Scaffolding a writing activity by analyzing a letter with suggestions",
    videoUrl: "./docs/CLP/video/teaching-moment-5.mp4",
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
