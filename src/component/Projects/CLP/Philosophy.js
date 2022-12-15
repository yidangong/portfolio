import React, { Component } from "react";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

class Philosophy extends Component {
    render() {
        return (
            <div className="teaching_philosophy bg_color" id="philosophy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <a href="../docs/CLP/teaching-philosophy.pdf" target="_blank" data-text="See Document" >
                                <img
                                    className="fact_img"
                                    src={require("../../../image/projects/clp/teaching-philosophy.png")}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-lg-7">
                            <div className="clients_content_two">
                                <SectionTitleTwo btitle="My Teaching Philosophy" />
                                <h4>Task-based language teaching</h4>
                                <p>Reading, listening, writing, and speaking are the four main language skills. The communicative language teaching (CLT) approach integrates all of these skills. As one of the key categories of CLT, task-based language teaching (TBLT) is what I believe brings efficiency to students' language acquisition by applying tasks related to real-life circumstances. For example, ordering pizza online, giving directions according to a map, making a travel plan, these are all tasks that students can work in class to learn English within meaningful contexts.</p>
                                <a href="../docs/CLP/teaching-philosophy.pdf" ><p className="read_btn"><i className="arrow_left" /> See Details</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Philosophy;