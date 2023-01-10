import React, { Component } from "react";

class Research extends Component {
    render() {
        return (
            <section className="bg_color" id="research">
                <div className="container">
                    <h1>Research</h1>
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 align-self-center">
                            <h5>Literature Review</h5>
                            <p>We conducted a series of literature reviews to educate ourselves about using a chatbot to teach languages, how to distill curriculum in conversation, and how to provide feedback effectively.</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 align-self-center">
                            <img src={require(`../../../image/projects/edubot/literature_review.png`)} alt='' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 align-self-center">
                            <h5>Semi-structured Interviews</h5>
                            <p>We conducted interviews with test takers and IELTS teachers from various countries in order to gain insight into their motivations, methods, and challenges related to learning and teaching the IELTS test.</p>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 align-self-center">
                            <img src={require(`../../../image/projects/edubot/interview.png`)} alt='' />
                        </div>
                    </div>
                    <div className="row">
                        <h5>Competitive Analysis</h5>
                        <img src={require(`../../../image/projects/edubot/competitive_analysis.png`)} alt='' />
                    </div>
                </div>
            </section>

        )
    }
}

export default Research