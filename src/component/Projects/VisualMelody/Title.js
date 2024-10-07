import React, { Component } from 'react';
import { Parallax } from 'react-parallax/';
import { Reveal } from 'react-reveal/';
const image = require('../../../image/projects/visual_melody/visual_melody.png');

class Title extends Component {
    render() {
        return (
            <section className='dhh_title bg_color' id="title">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2>VisualMelody</h2>
                            </Reveal>

                            <h4 className="wow fadeInUp anoimated">VisualMelody is a device used as a teaching tool to support music education for hard-of-hearing students in the kindergarten classroom. It features a visual and fun way to stimulate musical exploration in hard of hearing students.</h4>
                        </div>
                    </div>
                </Parallax>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                            <h3>Duration</h3>
                            <p>3 Months</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                            <h3>Project Type</h3>
                            <p>Interactive Design<br/>User Experience</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                            <h3>My Role</h3>
                            <p>Research and Analysis<br/>Visual Design</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                            <h3>Team Members</h3>
                            <p>Yidan Gong (me)</p>
                            <p>Ruochen Fu</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Title;