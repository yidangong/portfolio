import React, { Component } from "react";

class Mockups extends Component {
    render() {
        return (
            <section className="mockups" id="mockups">
                <div className="container">
                    <h1>High- Fidelity Design Mockups</h1>
                    <img src={require(`../../../image/projects/edubot/mockup_1.png`)} alt='' />
                    <img src={require(`../../../image/projects/edubot/mockup_2.png`)} alt='' />
                    <img src={require(`../../../image/projects/edubot/mockup_3.png`)} alt='' />
                </div>
            </section>
        )
    }
}

export default Mockups