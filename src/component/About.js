import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let yidanData = this.props.yidanData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{yidanData.aboutme}</h2>
                                    <h6>{yidanData.role}</h6>
                                    <p>{yidanData.aboutdetails}</p>
                                    {/* <Link to="/"  className="theme_btn active">Hire Me</Link> */}
                                    <Link to="/docs/resume.pdf" className="theme_btn" target="_blank" download>Download Resume</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/portrait.jpg')} alt="" width="500"/></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
