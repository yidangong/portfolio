import React, { Component } from "react";

class Flow extends Component {
    render() {
        return (
            <div className="container" id="flow">
                <h1>User Task Flow</h1>
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