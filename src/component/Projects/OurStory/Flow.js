import React, { Component } from "react";

class Flow extends Component {
    render() {
        return (
            <div className="container" id="flow">
                <h1>User Task Flow</h1>
                <p><span className="t_blod">Task Definition:</span> Parents and children work together to collect different scenes of a story through rounds of information gap activity which requires each user to read, describe, and choose the corresponding picture based on the other's description.</p>
                <div className="row">
                    <div className="col-4 mx-auto">
                        <div className="row">
                            <div className="col-4 mx-auto">
                                <img src={require(`../../../image/projects/our_story/parent.png`)} alt='' />
                            </div>
                        </div>
                        <p className="t_center"><span className="t_blod">Parents:</span> English Learners</p>
                    </div>
                    <div className="col-4 mx-auto">
                        <div className="row">
                            <div className="col-4 mx-auto">
                                <img src={require(`../../../image/projects/our_story/children.png`)} alt='' />
                            </div>
                        </div>
                        <p className="t_center"><span className="t_blod">Children:</span> English Teachers</p>
                    </div>
                </div>
                <div className="scroll_view">
                    <div className="gridscroll">
                        <img src={require(`../../../image/projects/our_story/task_flow.png`)} alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Flow