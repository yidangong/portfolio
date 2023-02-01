/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

const data = [
    {
        id: "java",
        title: "Java",
        text: "In this exercise, I recreated the graphical version of the classic race between the tortoise and the hare for a two-lap race. I utilized random number generation to simulate this well-known event. To enhance the user experience, I added two buttons, \"Start\" and \"Stop,\" which could be clicked using the mouse. This gave the user the ability to easily control the race with a simple press of a button.",
        img: "race.gif",
        link: "TortoiseHareRace/index.html",
    },
    {
        id: "js",
        title: "JavaScript",
        text: "I created a JavaScript-based game for a class project. The game features a canvas that alternates between day and night scenes, and players can navigate the spaceship by pressing the \"up\", \"down\", \"left\", and \"right\" buttons.",
        img: "js.png",
        link: "javascript/index.html",
    },
    {
        id: "html",
        title: "HTML/CSS",
        text: "For a class project, I designed an online pet shop by writing HTML and CSS in Atom. The design incorporates elements such as a navigation bar, hero image, and grid layout to present the products. The pet shop is centered around a grid that showcases various groups of pets. The top of the page features a hero image and navigation bar, with a search engine for customers to filter their results by pet age, breed, and location. Each pet is represented by an image in the grid, with options to learn more about the pet by clicking a button.",
        img: "html.png",
        link: "html_css/index.html",
    },
]

class Projects extends Component {
    render() {
        return (
            <section className="projects" id="projects">
                <div className="container padding_b">
                    <h1>Class Projects</h1>
                    {
                        data.map(project => (
                            <div className="row padding_t" id={project.id}>
                                <div className="col-lg-5 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                    <h3>{project.title}:</h3>
                                    <p>{project.text}</p>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-10 col-xs-12 mx-auto align-self-center">
                                    <a href={`../docs/Programming/${project.link}`} className="see_btn" target="_blank" data-text="See Document" >
                                        <img src={require(`../../../image/projects/programming/${project.img}`)} alt='' />
                                    </a>
                                    <h5>Click the image to see details</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Projects