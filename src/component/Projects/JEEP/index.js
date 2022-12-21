import React from "react";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import TeachingMoments from "./TeachingMoments";

export const JEEP = () => (
    <div>
        <Navbar mContainer="custome_container" mainlogo="logo.png" stickylogo="logo.png"/>
        <Introduction />
        <TeachingMoments />
    </div>
);
