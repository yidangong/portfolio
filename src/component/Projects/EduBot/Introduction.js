import React, { Component } from "react";

class Introduction extends Component {
    render() {
        return (
            <section id="intro">
                <div className="container">
                    <h1>Introduction</h1>

                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm=12 col-xs-12 mx-auto">
                            <h2 className="t_color">Project Brief</h2>
                            <p className="t_color_bk">I collaborated with another designer to create an array of functionality of an English learning website named Edubot; which is aimed to guide language learners to practice ILETS (a Standardized English Test) speaking by chatting with a trained AI model that can engage in coherent and diverse conversations in both written and spoken forms.</p>

                            <div className="row padding_t">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <h3>Background</h3>
                                    <p className="t_color_bk">Speaking English is not an easy task because speakers need to be proficient in many important components such as pronunciation, grammar, vocabulary, fluency, and comprehension. IELTS test takers often find the speaking section to be the most challenging, as it requires them to react quickly and produce coherent and fluent speaking for several minutes. In addition, the speaking section can be particularly overwhelming for test takers due to the anxiety that can be caused by the fear of making mistakes and interacting with native speakers.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <img src={require(`../../../image/projects/edubot/speaking_anxiety.jpeg`)} alt='' />
                                </div>
                            </div>

                            <div className="row padding_t">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <h3>Target Group</h3>
                                    <p className="t_color_bk">We need to target a constantly growing number of customers around the world who take the test for education, life, and work purposes.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <img src={require(`../../../image/projects/edubot/target_group.png`)} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Introduction