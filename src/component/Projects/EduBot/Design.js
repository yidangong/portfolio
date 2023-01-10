import React, { Component } from "react";

const designData = [
    {
        title: "Various Topic Selections",
        subtitle: "Users can choose from a wide variety of topics to practice",
        gif: "feature_1.gif",
    },
    {
        title: "Spoken Conversation",
        subtitle: "Users can choose to chat in a spoken form",
        gif: "feature_2.gif",
    },
    {
        title: "Reading Selections",
        subtitle: "It leads to different pieces of reading every time the user chooses a different option",
        gif: "feature_3.gif",
    },
    {
        title: "Practice of Integrated English Skills",
        subtitle: "Users can engage in reading, listening, and writing activities while focusing on a specific speaking topic",
        gif: "feature_4.gif",
    },
    {
        title: "Guided Conversations",
        subtitle: "A pop-up hint will guide users to continue the conversation",
        gif: "feature_5.gif",
    },
    {
        title: "Notebook",
        subtitle: "Users can take notes at any time and review them later. The bot can also assist them in adding new words to their notes",
        gif: "feature_6.gif",
    },
    {
        title: "Mock Test Experience",
        subtitle: "The bot is designed to act as an examiner, leading users through the steps of a real speaking test",
        gif: "feature_7.gif",
    },
    {
        title: "Grammar Feedback",
        subtitle: "The bot offers personalized grammar feedback in various forms during and after practice",
        gif: "feature_8.gif",
    },
    {
        title: "Learning Progress Check",
        subtitle: "Users can access their accounts to view completed, in-progress, and saved topics",
        gif: "feature_9.gif",
    },
]

class Design extends Component {
    render() {
        return (
            <section id="design">
                <div className="container">
                    <h1>Final Design</h1>
                    <h3>Features</h3>
                    {
                        designData.map(val => (
                            <div className="final_design padding_t">
                                <h5>{val.title}</h5>
                                <p>{val.subtitle} </p>
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 col-sm-10 col-xs-12 mx-auto align-self-center">
                                        <img src={require(`../../../image/projects/edubot/feature/${val.gif}`)} alt='' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        )
    }
}

export default Design