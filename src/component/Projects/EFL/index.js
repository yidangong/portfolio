import React from "react";
import Feedback from "./Feedback";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import TeachingMoments from "./TeachingMoments";

export const EFL = () => (
    <div>
        <Navbar mContainer="custome_container" mainlogo="logo.png" stickylogo="logo.png"/>
        <Introduction />
        <Feedback />
        <TeachingMoments />
    </div>
);
