import React, { Component } from "react";

class Ideation extends Component {
    render() {
        return (
            <div className="container" id="ideations">
                <h1>Ideation</h1>
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-8 col-xs-10 mx-auto align-self-center">
                        <img src={require(`../../../image/projects/our_story/ideations.png`)} alt='' />
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-8 col-xs-10 mx-auto align-self-center">
                        <p>I created 4 concept sketches and evaluated them against the design opportunities. The final concept chosen was an English learning activity in which users must read, describe, and select corresponding pictures based on someone else's description. They must then use these pictures to compose a story to complete the activity. </p>
                    </div>
                </div>
                <h5 className="padding_t">Wireframe</h5>
                <p>Process (Parents) Mobile End Interface Wireframe</p>
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mx-auto align-self-center">
                        <a href="../docs/OUR_STORY/wireframe.pdf" target="_blank" data-text="See Document" >
                            <img src={require(`../../../image/projects/our_story/wireframe.png`)} alt='' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ideation