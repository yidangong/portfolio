import React, { Component } from "react";

const feedback = [
    {
        title: "Type 1",
        img: "type_1.png",
    },
    {
        title: "Type 2",
        img: "type_2.png",
    },
    {
        title: "Type 3",
        img: "type_3.png",
    },
    {
        title: "Type 4",
        img: "type_4.png",
    },
]

class Ideation extends Component {
    render() {
        return (
            <section className="ideation bg_color" id="ideations">
                <div className="container">
                    <h1>Ideation</h1>
                    <h3>Sketches</h3>
                    <p>We each came up with 9 concept sketches for a total of 18 ideas.</p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-10 mx-auto">
                            <img src={require(`../../../image/projects/edubot/sketch_1.png`)} alt='' />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-10 mx-auto">
                            <img src={require(`../../../image/projects/edubot/sketch_2.png`)} alt='' />
                        </div>
                    </div>

                    <h3>Downselection</h3>
                    <div className="row">
                        <div className="col-lg-8 col-md-9 col-sm-10 col-xs-12 mx-suto align-self-center">
                            <p>To narrow down our ideas and identify the most promising concept, we used a dot voting method to group similar concepts and then evaluated them against our design opportunities. After this process, we selected a concept that involved an English speaking journey with a native speaker (the bot) in the areas of reading, listening, speaking, and writing, followed by a mock test that simulated the IELTS speaking environment. This concept focused on various speaking topics and provided personalized grammar feedback to help users improve their speaking skills.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/edubot/downselection.png`)} alt='' />
                        </div>
                    </div>

                    <h3>Sitemap</h3>
                    <img src={require(`../../../image/projects/edubot/sitemap.png`)} alt='' />

                    <h3>Grammar Feedback</h3>
                    <p>The grammar feedback provided by the bot is both synchronous (given in real-time during the conversation) and asynchronous (given after the conversation has ended). If a learner makes a mistake, the bot will randomly provide one of four types of feedback. At the end of the conversation, the bot will also generate a grammar report for the learner to review.</p>
                    <div className="row">
                        {
                            feedback.map(val => (
                                <div className="col-lg-5 col-md-6 col-sm-8 col-xs-12 mx-auto align-self-center">
                                    <p className="t_center">{val.title}</p>
                                    <img className="padding_b" src={require(`../../../image/projects/edubot/${val.img}`)} alt='' />
                                </div>
                            ))
                        }
                        <div className="col-lg-5 col-md-6 col-sm-8 col-xs-12 mx-auto align-self-center padding_t">
                            <p className="t_center">A feedback example from the popup note</p>
                            <img className="padding_b" src={require(`../../../image/projects/edubot/feedback_1.png`)} alt='' />
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-8 col-xs-12 mx-auto align-self-center padding_t">
                            <p className="t_center">A feedback example from the Chatbot</p>
                            <img className="padding_b" src={require(`../../../image/projects/edubot/feedback_2.png`)} alt='' />
                        </div>
                    </div>

                    <h3>Reading Materials and the Language Assessment</h3>
                    <p>I created and wrote the reading materials and language assessments that are used in the conversations with the aim of helping learners acquire the topic-specific knowledge that is typically tested in the IELTS speaking exam.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/edubot/reading.png`)} alt='' />
                            <p className="t_center">Reading</p>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/edubot/grammar.png`)} alt='' />
                            <p className="t_center">Grammar Quiz</p>
                        </div>
                    </div>
                </div>

            </section >
        )
    }
}

export default Ideation