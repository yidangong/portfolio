import React, { Component } from "react";

class Background extends Component {
    render() {
        return (
                <div className="container" id="background">
                    <div className="t_color">
                        <h1>Background</h1>
                    </div>
                    <div className="row backgound">
                        <div className="col-6 background_img">
                            <img src={require(`../../../image/projects/our_story/background.png`)} alt='' />
                        </div>
                        <div className="col-6 align-self-center">
                            <h3>The Context</h3>
                            <div className="background_context">
                                <p>First-generation immigrants in the United States who are also English learners want to become skillful English users because they see English as a key to integrating into society by holding effective communication in both work and family. However, these people are also busy with jobs and family care that they need more time and comfortable space to learn English. From the aspect of the U.S. ESL educational system, students are rarely put into the course level they fit and are forced to learn with those lower-level or higher-level English learners in the same class. As a result, they wasted time and energy without fulfilling their own needs in English learning. </p>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Background