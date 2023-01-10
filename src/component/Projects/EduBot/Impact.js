import React, { Component } from "react";
import TestimonialSlider from "./TestimonialSlider";

class Impact extends Component {
    render() {
        return (
            <section className="bg_color" id="impact">
                <div className="container">
                    <h1>The Impact</h1>
                    <p>We collected <span className="t_color_og t_blod">120 conversations</span> using our tool on Amazon Mechanical Turk platform from <span className="t_color_og t_blod">100 users</span> who chatted with it.</p>

                    <h3 className="padding_t padding_b">Survey</h3>
                    <div className="row">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                    <p>We asked users to rank the usefulness of our chatbot on a 1-5 Likert scale, with five meaning instrumental, and our chatbot achieved an <span className="t_color_og t_blod">average score of 4.3</span>.</p>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                    <img src={require(`../../../image/projects/edubot/survey.png`)} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="padding_t padding_b">Result</h3>
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/edubot/result_1.png`)} alt='' />
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/edubot/result_2.png`)} alt='' />
                        </div>
                    </div>

                    <h3 className="padding_t padding_b">Testimonials</h3>
                    <div className="testimonial_area testimonial_area_three">
                        <TestimonialSlider />
                    </div>
                </div>
            </section>
        )
    }
}

export default Impact