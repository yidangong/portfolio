import React, { Component } from "react";

const interviewData = [
    {
        title: "Lack of Experience Talking to Native Speakers",
        question: "Many learners are hesitant to speak with native speakers because they are afraid of making mistakes in grammar and pronunciation. This fear can prevent them from practicing their language skills and improving their fluency.",
        answer: "I am nervous about the speaking part because i have little experience talking to native speakers (who are also examiners).",
        name: "Olivia",
    },
    {
        title: "Lack of Speaking Opportunities",
        question: "It can be difficult for English learners to find a speaking partner who is proficient in the language.",
        answer: "Sometimes students get afraid of speaking English because they don't want make mistakes.",
        name: "Emily",
    },
    {
        title: "Poor Integrated Skills",
        question: "A lack of proficiency in listening, reading, and writing can affect a learner's overall confidence when speaking in English.",
        answer: "How am I supposed to speak fluently if I don't understand others' talking and writing?",
        name: "Lily",
    },
    {
        title: "Lack of Feedback",
        question: "Sometimes learners do not receive timely feedback on their learning or language skills, which can impact their progress.",
        answer: "I have almost 20 students and I can't monitor everyone's performance in learning.",
        name: "Amanda",
    },
    {
        title: "Unsystematic Learning",
        question: "Many learners struggle to find a systematic approach to learning and practicing English speaking skills.",
        answer: "I feel lost sometimes, I don not know how and where to start every time I want to practice speaking.",
        name: "Hui",
    },
    {
        title: "Test Anxiety",
        question: "Learners often feel anxious about the test, which can significantly impact their performance.",
        answer: "I get so nervous while taking the test, I cannot focus on it.",
        name: "James",
    },
]

const opportunityData = [
    {
        insight: {
            title: "Lack of Experience Talking to Native Speakers",
            content: "Many learners are hesitant to speak with native speakers because they are afraid of making mistakes in grammar and pronunciation. This fear can prevent them from practicing their language skills and improving their fluency.",
            img: "insight_1.png",
        },
        opportunity: {
            title: "A Native Speaking Partner",
            content: "A trustworthy speaking partner (bot) that can simulate conversations with native speakers can provide learners with a realistic and immersive experience for practicing their language skills.",
            img: "opportunit_1.png",
        },
    },
    {
        insight: {
            title: "Poor Integrated Skills",
            content: "A lack of proficiency in listening, reading, and writing can affect a learner's overall confidence when speaking in English.",
            img: "insight_2.png",
        },
        opportunity: {
            title: "Practice English for All Skills",
            content: "A bot that can provide guidance for speaking activities designed to improve all language skills, including reading, speaking, listening, and writing.",
            img: "opportunit_2.png",
        },
    },
    {
        insight: {
            title: "Lack of Feedback",
            content: "Sometimes learners do not receive timely feedback on their learning or language skills, which can impact their progress.",
            img: "insight_3.png",
        },
        opportunity: {
            title: "Individualized Feeback",
            content: "A bot that can offer personalized learning and language feedback to learners.",
            img: "opportunit_3.png",
        },
    },
    {
        insight: {
            title: "Unsystematic Learning",
            content: "Many learners struggle to find a systematic approach to learning and practicing English speaking skills.",
            img: "insight_4.png",
        },
        opportunity: {
            title: "Systematic Learning Experience",
            content: "A bot that can guide learners through a structured and systematic learning approach.",
            img: "opportunit_4.png",
        },
    },
    {
        insight: {
            title: "Test Anxiety",
            content: "Learners often feel anxious about the test, which can significantly impact their performance.",
            img: "insight_5.png",
        },
        opportunity: {
            title: "Real Test Experience",
            content: "A bot that can simulate the experience of taking a real test and provide learners with the opportunity to practice mock tests.",
            img: "opportunit_5.png",
        },
    },
]

class Insights extends Component {
    render() {
        return (
            <section id="insights">
                <div className="container insights">
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

                    <div className="opportunity">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                <h3>Insights</h3>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-auto">
                                <h3>Opportunities</h3>
                            </div>
                        </div>
                        {
                            opportunityData.map((val) => {
                                return (
                                    <div className="row item">
                                        <div className="col-lg-5 col-md-6 col-sm-8 col-xs-10 mx-auto align-self-center">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 mx-auto align-self-center">
                                                    <h5>{val.insight.title}</h5>
                                                    <p>{val.insight.content}</p>
                                                </div>
                                                <div className="col-lg-2 col-md-4 col-sm-5 col-xs-5 mx-auto align-self-center">
                                                    <img src={require(`../../../image/projects/edubot/${val.insight.img}`)} alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-8 col-xs-10 mx-auto align-self-center">
                                            <div className="row">
                                                <div className="col-lg-2 col-md-4 col-sm-5 col-xs-5 mx-auto align-self-center">
                                                    <img src={require(`../../../image/projects/edubot/${val.opportunity.img}`)} alt='' />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 mx-auto align-self-center">
                                                    <h5>{val.opportunity.title}</h5>
                                                    <p>{val.opportunity.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm=12 col-xs-12 mx-auto">
                            <h2 className="t_color">POV</h2>
                            <p className="t_color_bk">Test takers preparing for the IELTS exam often need a native English speaking partner who can guide them through a learning experience that will help them improve their speaking skills and achieve a better performance on the test. This is especially important for those who are seeking employment, higher education, or a move to an English-speaking country, as a strong performance on the IELTS speaking test can be a key factor in realizing these goals.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-11 col-sm=12 col-xs-12 mx-auto">
                            <h2 className="t_color">HOW MIGHT WE...</h2>
                            <p className="t_color_bk">How might we create a safe, engaging, and comfortable speaking environment as well as designing learning tasks for IELSTS candidates to practice English speaking with the bot?</p>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Insights