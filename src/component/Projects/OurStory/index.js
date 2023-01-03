import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import Navbar from "./Navbar";
import Title from "./Title";
import ScrollToTop from "react-scroll-to-top";
import Background from "./Background";
import Response from "./Response";
import Research from "./Research";
import Insights from "./Insights";
import Ideation from "./Ideations";
import Design from "./Design";

export const OurStory = () => (
    <div className="our_story">
        <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
        <Title />
        <Background />
        <Response />
        <Research />
        <Insights />
        <Ideation />
        <Design />
        <Footer yidanData={yidanData} fClass="bg_color_os"/>
        <ScrollToTop smooth />
    </div>
);
