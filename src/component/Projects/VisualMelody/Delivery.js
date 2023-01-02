import React, { Component } from "react";

class Delivery extends Component {
    render() {
        return (
            <div className="delivery bg_color" id="delivery">
                <div className="container">
                    <h1>04 - Delivery</h1>
                    <h3>Design description</h3>
                    <p className="t_color_bk">VisualMelody is a device used as a teaching tool to support music education for hard-of-hearing students in the kindergarten classroom. It features a visual and fun way to stimulate musical exploration in hard of hearing students. The device's interactive screen displays a story-based interactive game of the underwater world, providing a visual aid to the visualisation of music. At the same time, the interactive screen is connected to a gravity-sensitive interactive music mat, enabling learners to follow the on-screen display and select and step on the corresponding notes from Do to Ti, promoting the interest of hard of hearing students in learning music.</p>
                    <div className="row padding_b">
                        <div className="col-lg-3 col-md-5 col-sm-6 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/underwater_world_centered_storytelling.png`)} alt='' />
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/gamification.png`)} alt='' />
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/multi_sensory_stimulation.png`)} alt='' />
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/musical_notes_learning.png`)} alt='' />
                        </div>
                    </div>

                    <h3>Final design</h3>
                    <img src={require(`../../../image/projects/visual_melody/final_design.png`)} alt='' />

                    <h3>Rules of the Game</h3>
                    <img src={require(`../../../image/projects/visual_melody/rules_game.png`)} alt='' />
                    <div className="row padding_t">
                        <div className="col-lg-9 col-md-10 col-sm-11 col-xs-12 mx-auto align-self-center">
                            <p className="t_color_bk">The interactive story screen with its rich content and lively interactive animation format can stimulate children's curiosity and desire for exploration by drawing out stories and scenes from the underwater world to provide a fun space for children to explore and enhance students interest in learning music. At the same time, using a storytelling format makes the information and content more accessible to children. The interactive screen uses the story of the underwater world as a backdrop to tell children about exploring the underwater world through music. Children can choose their favorite characters and by visualizing the sounds, the pitch of the scale makes up the different heights of the seaweed and children can learn music through playful interaction.</p>
                        </div>
                    </div>

                    <div className="row padding_t">
                        <div className="col-lg-3 col-md-4 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/select_role.png`)} alt='' />
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <h3 className="t_color_bk">Select a role</h3>
                            <p>Different underwater creatures are provided for children to choose their favorite characters to enhance their interest and sense of immersion.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/roles.png`)} alt='' />
                        </div>
                        <div className="col-4 mx-auto align-self-center">
                            <h3 className="t_color_bk t_center">Roles</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/scale_height.png`)} alt='' />
                        </div>
                        <div className="col-4 mx-auto align-self-center">
                            <h3 className="t_color_bk t_center">Tone scale height</h3>
                        </div>
                    </div>

                    <h3>arduino</h3>
                    <p>I used a microcontroller to simulate how children interact with the device while using it. The gravity sensor detects the position of the scale that the child is walking on, the SD card stores the sound information corresponding to the scale in advance, and the height of the scale is displayed on the screen while the sound is sent through the small speaker. When the child is learning music, the engagement process is completed with sound visualization.</p>
                    <div className="row padding_b">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/arduino.png`)} alt='' />
                        </div>
                    </div>
                    <div className="row padding_t padding_b">
                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 mx-auto align-self-center">
                            <a href="../docs/VisualMelody/TouchMusicTen.ino" target="_blank" data-text="Source Code" >
                                <img src={require(`../../../image/projects/visual_melody/code.png`)} alt='' />
                                <p className="t_center">Clieck to Download Source Code</p>
                            </a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Delivery