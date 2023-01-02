import React, { Component } from "react";

const data = [
    {
        insight: {
            title: "Information Processing",
            content: "Hearing and understanding the full message is difficult due to hearing impairments, and some children lack listening experiences.",
            img: "information_processing.png",
        },
        opportunity: {
            title: "Systematic Listening Experience",
            content: "A device that creates diversified but systematic listening expereince for children may help tranmit it to concrete and accurate information.",
            img: "systematic_listening_experience.png",
        },
    },
    {
        insight: {
            title: "Dependence on Teachers",
            content: "Hearing impaired children learn music in the classroom following the teacher's educational aids, which hearing impaired children lack the ability to use on their own.",
            img: "dependence_teachers.png",
        },
        opportunity: {
            title: "Accessible to All kinds of Activities",
            content: "A portable device that can be used by hearing-impaired themselves in different forms of activties such as individual and whole class interactions.",
            img: "accessible_activities.png",
        },
    },
    {
        insight: {
            title: "Visual Assistance",
            content: "Hearing impaired children need to use pictures, images and gestures in order to understand information.",
            img: "visual_assistance.png",
        },
        opportunity: {
            title: "Stimuli on Visual and Tactile Sense",
            content: "A device that helps enhance auditory and information processing by stimulating other senses.",
            img: "stimuli_sense.png",
        },
    },
    {
        insight: {
            title: "Concurrent Disabilities",
            content: "Some hearing impaired children also have other kinds of disabilities.",
            img: "concurrent_disabilities.png",
        },
        opportunity: {
            title: "Equitable for all kinds of disabilities",
            content: "A device that is accessible to all kinds of disabilities.",
            img: "equitable_disabilities.png",
        },
    },
    {
        insight: {
            title: "Visual Attraction",
            content: "The fun look is more appealing to hearing impaired children.",
            img: "visual_attraction.png",
        },
        opportunity: {
            title: "Child-Friendly",
            content: "A device that attracts children by its looking to alleviate the feeling of inferiority.",
            img: "child-friendly.png",
        },
    },
]

class InsightOpportunity extends Component {
    render() {
        return (
            <div className="opportunity bg_color" id="insights">
                <div className="container">
                    <h1>02 - Insights and opportunity area</h1>
                    <p>After reviewing secondary research and interview results, I synthesized the insights together and listed opportunity areas for the design solution.</p>
                    <div className="row title">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-auto">
                            <h3>Insights</h3>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-auto">
                            <h3>Opportunities</h3>
                        </div>
                        {
                            data.map((val) => {
                                return (
                                    <div className="row item">
                                        <div className="col-lg-5 col-md-6 mx-auto align-self-center">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 mx-auto align-self-center">
                                                    <h5>{val.insight.title}</h5>
                                                    <p>{val.insight.content}</p>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mx-auto align-self-center">
                                                    <img src={require(`../../../image/projects/visual_melody/${val.insight.img}`)} alt='' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 mx-auto align-self-center">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mx-auto align-self-center">
                                                    <img src={require(`../../../image/projects/visual_melody/${val.opportunity.img}`)} alt='' />
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
                </div>
            </div>

        )
    }
}

export default InsightOpportunity