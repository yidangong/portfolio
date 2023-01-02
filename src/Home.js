import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TypeBanner from './component/Banner/TypeBanner';
import About from './component/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import yidanData from './component/yidanData';


export const Home = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <TypeBanner yidanData={yidanData}/>
      <About aClass="about_area" yidanData={yidanData}/>
      <Portfolio pClass="bg_color"/>
      <Contact yidanData={yidanData}/>
      <Footer yidanData={yidanData} fClass="bg_color"/>
  </div>
)


