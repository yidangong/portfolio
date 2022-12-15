import React, { Component } from "react"
import { Fade } from "react-reveal";

class CoursePlan extends Component {
    render() {
        return (
            <section className="course_plan" id="course_needs">
                <div className="container">
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6" key="need-analysis">
                                <h2 className="t_color">Needs Analysis</h2>
                                <div className="course_item wow fadeInUp" data-wow-delay="0.1s">
                                    <a href="../docs/CLP2/need-analysis.pdf" className="see_btn" target="_blank" data-text="See Document" >
                                        <img src={require("../../../image/projects/clp2/need-analysis.png")} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6" key="course-syllabus">
                                <h2 className="t_color">Course Syllabus</h2>
                                <div className="course_item wow fadeInUp" data-wow-delay="0.1s">
                                    <a href="../docs/CLP2/syllabus.pdf" className="see_btn" target="_blank" data-text="See Document" >
                                        <img src={require("../../../image/projects/clp2/syllabus.png")} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default CoursePlan;