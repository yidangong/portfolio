import React, { Component } from 'react';
import { Parallax } from 'react-parallax/';
import { Reveal } from 'react-reveal/';
const image = require('../../../image/projects/programming/programming.jpg');

class Title extends Component {
    render() {
        return (
            <section className='title' id="title">
                <Parallax bgImage={image} strength={500} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2 className='t_color_w'>Programming</h2>
                            </Reveal>

                            <h4 className="wow fadeInUp anoimated">Class projects focus on designing, creating, and maintaining websites and mobile platforms, with an emphasis on problem-solving through computer programming exploration.</h4>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}

export default Title;