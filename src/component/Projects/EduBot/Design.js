import React, { Component } from "react";

const designData = [
    {
        title: "Various Topic Selections",
        subtitle: "Users can choose from a wide variety of topics to practice",
        gif: "feature_1.mp4",
    },
    {
        title: "Spoken Conversation",
        subtitle: "Users can choose to chat in a spoken form",
        gif: "feature_2.mp4",
    },
    {
        title: "Reading Selections",
        subtitle: "It leads to different pieces of reading every time the user chooses a different option",
        gif: "feature_3.mp4",
    },
    {
        title: "Practice of Integrated English Skills",
        subtitle: "Users can engage in reading, listening, and writing activities while focusing on a specific speaking topic",
        gif: "feature_4.mp4",
    },
    {
        title: "Guided Conversations",
        subtitle: "A pop-up hint will guide users to continue the conversation",
        gif: "feature_5.mp4",
    },
    {
        title: "Notebook",
        subtitle: "Users can take notes at any time and review them later. The bot can also assist them in adding new words to their notes",
        gif: "feature_6.mp4",
    },
    {
        title: "Mock Test Experience",
        subtitle: "The bot is designed to act as an examiner, leading users through the steps of a real speaking test",
        gif: "feature_7.mp4",
    },
    {
        title: "Grammar Feedback",
        subtitle: "The bot offers personalized grammar feedback in various forms during and after practice",
        gif: "feature_8.mp4",
    },
    {
        title: "Learning Progress Check",
        subtitle: "Users can access their accounts to view completed, in-progress, and saved topics",
        gif: "feature_9.mp4",
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
                                        <video src={require(`../../../image/projects/edubot/feature/${val.gif}`)} autoPlay loop muted playsInline />
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