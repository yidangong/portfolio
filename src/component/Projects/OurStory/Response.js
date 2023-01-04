import React, { Component } from "react";

const featureData = [
    {
        title: "Practice Integrated English Skills: ",
        content: "Parents and children will take turns reading a paragraph and describing it in their own words to help each other choose the corresponding pictures. After creating the story based on the images they collected, parents are responsible for recording the story and editing the texts.",
        gif: "integrated_skills.gif",
    },
    {
        title: "Diversified Reading Materials: ",
        content: "Each time starting to create a story, our system randomly assigns reading passages and their according pictures based on children's age and parents' language proficiencies. ",
        gif: "diversified_reading.gif",
    },
    {
        title: "Dictionary and Notes: ",
        content: "In the process of reading, parents can press and hold any word to see its meaning and add it to the dictionary. ",
        gif: "dictionary.gif",
    },
    {
        title: "Immediate Grammar and Structure Feedback: ",
        content: "Before completing a story, parents recevie grammar structure feedback soon after recording it. By automatically generating texts, it requires parents to see grammar explanations and correct the errors by editing them.",
        gif: "feedback.gif",
    },
    {
        title: "Customized Language Input: ",
        content: "Users can publish their completed stories in the community and choose others' stories to listen to and study based on their language proficiencies and interests. They are also free to like, comment, and collect published stories. ",
        gif: "languag_input.gif",
    },
]

class Response extends Component {
    render() {
        return (
            <div className="bg_color">
                <div className="container" id="response">
                    <h1>Design Response</h1>
                    <p className="response_content">Our Story is an English Learning Application that engages first-generation immigrants (English Learners) and second-generation immigrants (Native English Speakers) to create bedtime stories through collaborating in information-gap activities and games. </p>

                    <div className="row response">
                        <div className="col-lg-10 mx-auto align-self-center">
                            {/* <h2>Video</h2>
                        <p className="t_center"><span className="t_blod">Our Story Misson:</span> Create precious family game time for parents and children who need learning and entertaining.</p>
                        <img src={require(`../../../image/projects/our_story/background.png`)} alt='' /> */}

                            <h2>Features</h2>
                            <div className="row">
                                <div className="col-4 mx-auto">
                                    <div className="row">
                                        <div className="col-4 mx-auto">
                                            <img src={require(`../../../image/projects/our_story/ipad.png`)} alt='' />
                                        </div>
                                    </div>
                                    <p className="t_center"><span className="t_blod">Children:</span> iPad Users</p>
                                </div>
                                <div className="col-4 mx-auto">
                                    <div className="row">
                                        <div className="col-4 mx-auto">
                                            <img src={require(`../../../image/projects/our_story/iphone.png`)} alt='' />
                                        </div>
                                    </div>
                                    <p className="t_center"><span className="t_blod">Parents:</span> iPone Users</p>
                                </div>
                            </div>
                            <img className="feature_img" src={require(`../../../image/projects/our_story/features.png`)} alt='' />

                            <div className="features">
                                {
                                    featureData.map(val => (
                                        <div className="row feature">
                                            {/* <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto feature"> */}
                                            <h5>{val.title}</h5>
                                            <p>{val.content}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* {
                                featureData.map((val, i) => {
                                    if (i % 2 === 0) {
                                        return (
                                            <div className="row feature_gif">
                                                <div className="col-lg-4 col-md-4 col-sm-8 col-xs-10 mx-auto">
                                                    <img src={require(`../../../image/projects/our_story/${val.gif}`)} alt='' />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.content}</p>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="row feature_gif">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto align-self-center">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.content}</p>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-8 col-xs-10 mx-auto">
                                                    <img src={require(`../../../image/projects/our_story/${val.gif}`)} alt='' />
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            } */}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Response