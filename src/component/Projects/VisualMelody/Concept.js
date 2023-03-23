import React, { Component } from "react";

class Concept extends Component {
    render() {
        return (
            <div className="concept padding_b" id="concept">
                <div className="container">
                    <h1>03 - Concept Development</h1>
                    <h3>Brainstorming</h3>
                    <img src={require(`../../../image/projects/visual_melody/brainstorming.png`)} alt='' />

                    <h3>Ideation</h3>

                    <h5>Storytelling</h5>
                    <div className="row padding_b padding_t">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/storytelling-1.png`)} alt='' />
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/storytelling-2.png`)} alt='' />
                        </div>
                    </div>
                    <h5 className="padding_b t_center">Develop storytelling content that is more likely to immerse children in the content.</h5>

                    <h5 className="padding_t">Interactive</h5>
                    <div className="row padding_b padding_t">
                        <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                    <img src={require(`../../../image/projects/visual_melody/interactive-1.gif`)} alt='' />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                    <img src={require(`../../../image/projects/visual_melody/interactive-2.gif`)} alt='' />
                                </div>
                                <div className="col-12 mx-auto align-self-center padding_t">
                                    <img src={require(`../../../image/projects/visual_melody/interactive-3.gif`)} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 className="padding_t">Visualisation</h5>
                    <div className="row padding_b padding_t">
                        <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                    <img src={require(`../../../image/projects/visual_melody/visualisation-1.gif`)} alt='' />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                    <img src={require(`../../../image/projects/visual_melody/visualisation-2.gif`)} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="padding_b t_center">Visual representation of the pitch of a note.</h5>

                    <h3>Design definition</h3>
                    <p className="t_color_bk">Interactive sound visualization devices in the form of fun and games for hard-of-hearing students stimulate their interest in musical exploration.</p>
                </div>
            </div>
        )
    }
}

export default Concept