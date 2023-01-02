import React, { Component } from "react";
import Concept from "./Concept";
import Delivery from "./Delivery";
import Exploration from "./Exploration";
import InsightOpportunity from "./InsightsOpportunity";

class Content extends Component {
    render() {
        return (
            <section className="dhh_content" id="content">
                <div className="bg_color title">
                    <h1>How I got there?</h1>
                </div>
                <Exploration />
                <InsightOpportunity />
                <Concept />
                <Delivery />
            </section>
        );
    }
}

export default Content;