import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import Feedback from "./Feedback";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import TeachingMoments from "./TeachingMoments";
import ScrollToTop from "react-scroll-to-top";

export const EFL = () => (
    <div>
        <Navbar mContainer="custome_container" mainlogo="logo.png" stickylogo="logo.png"/>
        <Introduction />
        <Feedback />
        <TeachingMoments />
        <Footer yidanData={yidanData}/>
        <ScrollToTop smooth />
    </div>
);
