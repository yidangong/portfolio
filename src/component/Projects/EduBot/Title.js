import React, { Component } from 'react';
import { Parallax } from 'react-parallax/';
import { Reveal } from 'react-reveal/';
const image = require('../../../image/projects/edubot/edubot.png');

class Title extends Component {
    render() {
        return (
            <section className='title' id="title">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 className='t_color_w'>Articulate AI — Chatbots as Personal Language Tutors</h2>
                            </Reveal>

                            <h4 className="wow fadeInUp anoimated">A conversational platform for non-native English speakers. 3000+ registered users the first day from 100+ countries. According to our first adopters, over 87% of users would recommend the bot to a friend or family.</h4>
                        </div>
                    </div>
                </Parallax>
                <div className='bg_color_os'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Project Type</h3>
                                <p>Product Design</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>My Role</h3>
                                <p>End to end product designer</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Timeline</h3>
                                <p>August 2022-Present</p>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 item'>
                                <h3>Tools</h3>
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Title;