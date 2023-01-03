import React, { Component } from "react";

class Research extends Component {
    render() {
        return (
            <div className="container" id="research">
                <h1>Research</h1>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 align-self-center">
                        <h5>Literature Review</h5>
                        <p>Having picked English learning of the new U.S. Immigrants as my focus area, I conducted literature review to get a better understanding of my target group. </p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <img src={require(`../../../image/projects/our_story/literature_review.png`)} alt='' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 align-self-center">
                        <h5>Semi-structured Interviews</h5>
                        <p>For primary research, I conducted semi-structured interviews with my students, who are new U.S. immigrants coming from Dominican Republic, France, Korea, Turkey, Saudi Arabia, and Columbia. I learned about the role English played in their work and life, and the barriers they met in learning English. </p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <img src={require(`../../../image/projects/our_story/interview.png`)} alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Research