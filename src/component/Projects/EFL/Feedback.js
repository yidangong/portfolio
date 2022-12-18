import React, { Component } from "react";
import { ScrollView } from "react-native";
import SectionTitleTwo from "../../Banner/SectionTitleTwo";

class Feedback extends Component {
    render() {
        return (
            <div className="feedback bg_color" id="feedback">
                <div className="container">
                    <SectionTitleTwo btitle="Daily Feedback" />
                    <p>Examples of daily feedback returned to parents, including students' pictures in class, overall performance, and content learned in class with each word's pronunciation. </p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 scroll_view">
                            <ScrollView style={{ height: 600, width: "100%" }}>
                                <img src={require("../../../image/projects/efl/feedback-1.jpg")} alt="" />
                            </ScrollView>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <ScrollView style={{ height: 600, width: "100%" }}>
                                <img src={require("../../../image/projects/efl/feedback-2.jpg")} alt="" />
                            </ScrollView>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <ScrollView style={{ height: 600, width: "100%" }}>
                                <img src={require("../../../image/projects/efl/feedback-3.jpg")} alt="" />
                            </ScrollView>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;