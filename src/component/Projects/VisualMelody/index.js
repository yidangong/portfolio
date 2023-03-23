import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import Content from "./Content";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Title from "./Title";
import ScrollToTop from "react-scroll-to-top";
import Reflection from "./Reflection";

export const VisualMelody = () => (
    <div className="visual_melody">
        <Navbar mContainer="custome_container" mainlogo="logo.png" stickylogo="logo.png"/>
        <Title />
        <Introduction />
        <Content />
        <Reflection />
        <Footer yidanData={yidanData} fClass="bg_color"/>
        <ScrollToTop smooth />
    </div>
);
