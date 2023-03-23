import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import Navbar from "./Navbar";
import Title from "./Title";
import ScrollToTop from "react-scroll-to-top";
import Research from "./Research";
import Insights from "./Insights";
import Ideation from "./Ideations";
import Design from "./Design";
import Introduction from "./Introduction";
import Impact from "./Impact";
import Mockups from "./Mockups";
import Reflection from "./Reflection";

export const EduBot = () => (
    <div className="edubot">
        <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
        <Title />
        <Introduction />
        <Research />
        <Insights />
        <Ideation />
        <Design />
        <Impact />
        <Mockups />
        <Reflection />
        <Footer yidanData={yidanData} fClass="bg_color_os"/>
        <ScrollToTop smooth />
    </div>
);
