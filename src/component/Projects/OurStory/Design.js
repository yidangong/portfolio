import React, { Component } from "react";

const designData = [
    {
        step: "STEP 1",
        subtitle: "Choose a room and read (different reading materials)",
        iphone: "step_1/iphone.gif",
        ipad: "step_1/ipad.gif",
    },
    {
        step: "STEP 2",
        subtitle: "iPhone: Describe; iPad: Choose",
        iphone: "step_2/iphone.gif",
        iphone_t: "Describe",
        ipad_h: "step_2/ipad.gif",
        ipad_t: "Choose",
    },
    {
        step: "STEP 3",
        subtitle: "iPhone: Choose; iPad: Describe",
        iphone: "step_3/iphone.gif",
        iphone_t: "Choose",
        ipad_h: "step_3/ipad.gif",
        ipad_t: "Describe",
    },
    {
        step: "STEP 4",
        subtitle: "See and reorder the pictures",
        iphone: "step_4/iphone.gif",
        ipad_h: "step_4/ipad.gif",
    },
    {
        step: "STEP 5",
        subtitle: "Record and Edit",
        iphone: "step_5/iphone.gif",
    },
    {
        step: "STEP 6",
        subtitle: "View Feedback (Grammar and Pronunciation)",
        iphone: "step_6/iphone.gif",
    },
    {
        step: "STEP 7",
        subtitle: "Complete",
        iphone: "step_7/iphone.gif",
    },
    {
        step: "Study a Story",
        subtitle: "Choose a room and read (different reading materials)",
        iphone: "study_story/iphone.gif",
    },
]

class Design extends Component {
    render() {
        return (
            <div className="container" id="design">
                <h1>Final Design</h1>
                <p>Parents and children work together to collect different story scenes through rounds of information gap activities which require each user to read, describe, and choose the corresponding pictures based on the other's description. Reading texts are randomly assigned story elements that are leveled and dependent on children's age and parents' English proficiency. After composing and recording a story based on the collected scenes, parents get pronunciation and grammar feedback before completing it. </p>
                <p>Finally, a story is completed when the parent does the vocabulary review, and children can finish the task at any time after recording by listening to it while sleeping.</p>
                {
                    designData.map((val, i) => {
                        if (val.ipad) {
                            return (
                                <div className="final_design">
                                    <p><span className="title">{val.step} </span> {val.subtitle} </p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto align-self-center">
                                            <img src={require(`../../../image/projects/our_story/final_design/${val.iphone}`)} alt='' />
                                            <h5>{val.iphone_t}</h5>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                            <img src={require(`../../../image/projects/our_story/final_design/${val.ipad}`)} alt='' />
                                            <h5>{val.ipad_t}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (val.ipad_h) {
                            return (
                                <div className="final_design">
                                    <p><span className="title">{val.step} </span> {val.subtitle} </p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 mx-auto align-self-center">
                                            <img src={require(`../../../image/projects/our_story/final_design/${val.iphone}`)} alt='' />
                                            <h5>{val.iphone_t}</h5>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                            <img src={require(`../../../image/projects/our_story/final_design/${val.ipad_h}`)} alt='' />
                                            <h5>{val.ipad_t}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                                return (
                                    <div className="final_design">
                                        <p><span className="title">{val.step} </span> {val.subtitle} </p>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                                <img src={require(`../../../image/projects/our_story/final_design/${val.iphone}`)} alt='' />
                                                <h5>{val.iphone_t}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    })
                }
            </div>
        )
    }
}

export default Design