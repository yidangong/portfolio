import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Reveal } from 'react-reveal';
const image = require('../../../image/projects/our_story/our_story.png');

class Title extends Component {
    render() {
        return (
            <section className='title' id="title">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 className='t_color_w'>Our Story</h2>
                            </Reveal>

                            <h4 className="wow fadeInUp anoimated">An English Learning Application for ESL (English as a Second Language) learners to enhance integrated English skills by actively engaging in various learning tasks in an interactive and communicative way. </h4>
                        </div>
                    </div>
                </Parallax>
                <div className='bg_color_os'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Individual Project</h3>
                                <p>UX/UI Designer<br />Design Researcher<br />Video Filming & Editing</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Project Type</h3>
                                <p>Instructional Design<br />User Experience Design<br />Human Computer Interaction</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Team of One</h3>
                                <p>Yidan Gong (me)</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Duration</h3>
                                <p>August 2022 - December 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Title;