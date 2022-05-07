import React from "react";
import Navbar from "./component/Navbar/Navbar";
import DBanner from "./component/Banner/DeveloperBanner";
import DAbout from "./component/Developer/DeveloperAbout";
import DLogo from "./component/Developer/DeveloperLogo";
import DPortfolio from "./component/Developer/DeveloperPortfolio";
import DTestimonial from "./component/Developer/DeveloperTestimonial";
import DExprience from "./component/Developer/DeveloperExperience";
import DAwards from "./component/Developer/DeveloperAwards";
import DBlog from "./component/Blog/DeveloperBlog";
import ContactTwo from "./component/ContactTwo";
import FooterTwo from "./component/FooterTwo";
import yidanData from "./component/yidanData";

export const HomeDeveloper = () => (
  <div className="body_wrapper">
    <Navbar
      mClass="dark_menu"
      mContainer="custome_container"
      mainlogo="logo2.png"
      stickylogo="logo.png"
    />
    <DBanner yidanData={yidanData} />
    <DAbout yidanData={yidanData} />
    <DLogo />
    <DPortfolio />
    <DTestimonial />
    <DExprience />
    <DAwards yidanData={yidanData} />
    <DBlog />
    <ContactTwo secClass="dContact" yidanData={yidanData} />
    <FooterTwo className="d_footer_area" yidanData={yidanData} />
  </div>
);
