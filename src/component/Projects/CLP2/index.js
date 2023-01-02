import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import CoursePlan from "./CoursePlan";
import Introduction from "./Introduction";
import LessonPlan from "./LessonPlan";
import Navbar from "./Navbar";
import Philosophy from "./Philosophy";
import TeachingMoments from "./TeachingMoments";

export const CLP2 = () => (
    <div>
        <Navbar mContainer="custome_container" mainlogo="logo.png" stickylogo="logo.png"/>
        <Introduction />
        <Philosophy />
        <CoursePlan />
        <LessonPlan />
        <TeachingMoments />
        <Footer yidanData={yidanData}/>
    </div>
);