import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

class Philosophy extends Component {
    render() {
        return (
            <div className="teaching_philosophy bg_color" id="philosophy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <a href="../docs/CLP2/teaching-philosophy.pdf" target="_blank" data-text="See Document" >
                                <img
                                    className="fact_img"
                                    src={require("../../../image/projects/clp2/teaching-philosophy.png")}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-lg-7">
                            <div className="clients_content_two">
                                <SectionTitleTwo btitle="My Teaching Philosophy" />
                                <h4>Communicative Language Teaching (CLT)</h4>
                                <p>The communicative language teaching (CLT) approach integrates reading, listening, writing, and speaking. Seeing language as a tool for communication, I believe CLT is a good approach which emphasizes the interaction as the medium as well as the ultimate goal of language study. “Real- life circumstances” is what a teacher wants to bring to the class, which means that we should make each activity close to students’ lives and let the class be student-centered. For example, role plays, information gap activity, and game. All these activities should be conducted to maximize and prioritize small group discussions.</p>
                                <a href="../docs/CLP2/teaching-philosophy.pdf" ><p className="read_btn"><i className="arrow_left" /> See Details</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Philosophy;