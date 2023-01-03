import React, { Component } from "react";

const interviewData = [
    {
        title: "Lack of Time",
        question: "It is difficult for them to find a fixed time in a day to comfortably learn English because they have jobs to do and families to take care of. ",
        answer: "I start my work at 9pm from Monday to Friday, when i get home at 6pm, I have to cook for my son and do housework.",
        name: "Eleonora",
    },
    {
        title: "Stress in Talking to Native Speakers",
        question: "They usually avoid talking to native speakers in work and life because they are too shy to ask for repetition and worry about their accents. ",
        answer: "I don't like talking to natives, because sometimes they speak so fast and i can't understand, but I don't want to ask them for a repeat.",
        name: "Raghad",
    },
    {
        title: "Tense Relationship with children ",
        question: "Their children sometimes refuse to talk to them because they have difficulty understanding why their parents cannot speak English and question their identity. ",
        answer: "My daughter sometimes doesn't want to talk to me because she blames me for not speaking fluent English. She felt ashamed of it when we are in the public.",
        name: "Dilek",
    },
    {
        title: "Limited Chance for Promotion",
        question: "They are designated to do jobs not require fluent English skills, which might bring barriers to promotion. ",
        answer: "I work in a supermarket, but in the office by myself as an office assistant. I only talk to people who also speak Spanish.",
        name: "Gloria",
    },
    {
        title: "Lack of Socialization",
        question: "Some of them do not have a job. They moved to the U.S. because of a change in their husband’s work, hence staying at home and taking care of families all day. ",
        answer: "I'm a housewife and my main job is to take care of my husband and a 9-year-old son. The only chance I speak English is when my husband's friends come to our home, but I usually stay in the bedroom because they speak so fast and I can't understand their speaking especially when they use idioms.",
        name: "Joon",
    },
]

const opportunityData = [
    {
        title: "Communicative and Interactive",
        content: "A solution that helps practice English speaking in a interactive way ",
    },
    {
        title: "Learning by Playing",
        content: "A solution that attracts children and parents to engage in a game to learn and teach English",
    },
    {
        title: "Enhance child-parent relationship ",
        content: "A solution that encourages team work to promote child-parent relationship",
    },
]

class Insights extends Component {
    render() {
        return (
            <div className="bg_color">
                <div className="container insights" id="insights">
                    <h1>Insights</h1>

                    {
                        interviewData.map((val, i) => (
                            <div className="insight bg_color_os">
                                <h3>Insight {i + 1}</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                        <div className="question">
                                            <h5 className="t_center">{val.title}</h5>
                                            <p>{val.question}</p>
                                        </div>
                                    </div>
                                    <div className="answer col-lg-6 col-md-6 col-sm-12 col-xs-12 align-self-center">
                                        <p><span className="blod">"</span>{val.answer}<span className="blod">" - {val.name}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm=12 col-xs-12 mx-auto">
                            <h2 className="t_color">POV</h2>
                            <p className="t_color_bk">New U.S. immigrant workers who are also family caregivers need to improve different English skills sufficiently and get comfortable using them in life and work because they want to integrate into society and seek better career opportunities</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm=12 col-xs-12 mx-auto">
                            <h2 className="t_color">HOW MIGHT WE...</h2>
                            <p className="t_color_bk">HMW create tasks that help adults learn English by interacting with their children who might be native speakers</p>
                        </div>
                    </div>

                    <h2 className="t_color">Opportunities</h2>
                    {
                        opportunityData.map((val) => (
                            <div className="insight bg_color_os opportunity">
                                <h5>{val.title}</h5>
                                <p>{val.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Insights