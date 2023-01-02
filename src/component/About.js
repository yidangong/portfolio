import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Reveal } from 'react-reveal/';

class About extends Component {
    render() {
        let yidanData = this.props.yidanData;
        var { aClass } = this.props;
        return (
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{yidanData.aboutme}</h2>
                                    <h6>{yidanData.role}</h6>
                                    <div className='description'>
                                        <p>I am a passionate user experience designer with an interdisciplinary background in advertising and language teaching.</p>
                                        <p>I am interested in the domain of Edtech, promising to craft research-based user-centered experiences to promote a more inclusive learning environment and personalized learning experiences.</p>
                                    </div>
                                    {/* <Link to="/"  className="theme_btn active">Hire Me</Link> */}
                                    <Link to="/docs/resume.pdf" className="theme_btn" target="_blank" download>Download Resume</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-3">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/portrait.png')} alt="" width="350" /></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
