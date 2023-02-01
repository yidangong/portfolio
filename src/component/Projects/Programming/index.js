import React from "react";
import Footer from "../../Footer";
import yidanData from "../../yidanData";
import Navbar from "./Navbar";
import ScrollToTop from "react-scroll-to-top";
import Title from "./Title";
import Projects from "./Projects";

export const Programming = () => (
    <div className="programming">
        <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
        <Title />
        <Projects />
        <Footer yidanData={yidanData} fClass="bg_color"/>
        <ScrollToTop smooth />
    </div>
);
