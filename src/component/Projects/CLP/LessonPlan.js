import React, { Component } from "react"
import { Fade } from "react-reveal";

class LessonPlan extends Component {
    render() {
        return (
            <section className="course_plan bg_color" id="lesson_plan">
                <div className="container">
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6" key="lesson-plan-one">
                                <h2 className="t_color">Lesson Plan One</h2>
                                <div className="course_item wow fadeInUp" data-wow-delay="0.1s">
                                    <a href="../docs/CLP/lesson-plan-one.pdf" className="see_btn" target="_blank" data-text="See Document" >
                                        <img src={require("../../../image/projects/clp/lesson-plan-one.png")} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6" key="lesson-plan-two">
                                <h2 className="t_color">Lesson Plan Two</h2>
                                <div className="course_item wow fadeInUp" data-wow-delay="0.1s">
                                    <a href="../docs/CLP/lesson-plan-two.pdf" className="see_btn" target="_blank" data-text="See Document" >
                                        <img src={require("../../../image/projects/clp/lesson-plan-two.png")} alt="" />
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

export default LessonPlan;