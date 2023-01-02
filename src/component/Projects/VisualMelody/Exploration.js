import React, { Component } from "react";

const responseData = [
    {
        name: "Dong",
        title: "Music Teacher",
        img: "dong.png",
        content: "Students with a certain listening ability can use music to detect, distinguish and identify information, and gradually understand the meaning of information through long-term training. The pattern of the sound can also be summarized through the pitch, length, etc.",
    },
    {
        name: "Gillian",
        title: "Music Teacher",
        img: "gillian.png",
        content: "The students I have worked with who are hard of hearing have had devices the teachers wear around their necks that connect to their hearing aids but I have found that students in my class find it distracting with all the back and forth between the whole group and individual work we do.",
    },
    {
        name: "Erica",
        title: "Music Teacher",
        img: "erica.png",
        content: "We use the Roger Touchscreen Mic its a FM system. It helps him hear me even if my voice is low. It's heavy on the neck and chest when I want to move and talk at the same time.",
    },
    {
        name: "Professor Smith",
        title: "Special Education Professor",
        img: "smith.png",
        content: "Children who are hard of hearing are usually stronger in otther senses. Thus, we often use visual aids like pictures, actions like touching, and sign languages to help students understand words and phrases.",
    },
    {
        name: "Professor Huang",
        title: "Special Education Professor",
        img: "huang.png",
        content: "Children with mild to moderate hearing impairment can still hear sounds but with certain frequencies and picthes in lower volume and clarity. Some of them may also have other disabilities like amentia and ADHD.",
    },
    {
        name: "Lucas",
        title: "Children with Hearing Impairment",
        img: "lucas.png",
        content: "I don't like wearing a hearing aid, others think I'm different.",
    },
    {
        name: "Isabella",
        title: "Children with Hearing Impairment",
        img: "isabella.png",
        content: "I like music classes! Music makes me feel relaxed.",
    },
]

const insightData = [
    {
        title: "Information Processing",
        content: "Hearing and understanding the full message is difficult due to hearing impairments, and some children lack listening experiences.",
        img: "information_processing.png",
    },
    {
        title: "Sound Distractions",
        content: "Children with hearing impairment can be distracted by environmental sounds during lessons.",
        img: "sound_distractions.png",
    },
    {
        title: "Dependence on Teachers",
        content: "Hearing impaired children learn music in the classroom following the teacher's educational aids, which hearing impaired children lack the ability to use on their own.",
        img: "dependence_teachers.png",
    },
    {
        title: "Visual Attraction",
        content: "The fun look is more appealing to hearing impaired children.",
        img: "visual_attraction.png",
    },
    {
        title: "Visual Assistance",
        content: "Hearing impaired children need to use pictures, images and gestures in order to understand information.",
        img: "visual_assistance.png",
    },
    {
        title: "Concurrent Disabilities",
        content: "Some hearing impaired children also have other kinds of disabilities.",
        img: "concurrent_disabilities.png",
    },
]

class Exploration extends Component {
    render() {
        return (
            <div className="container exploration" id="exploration">
                <h1>01 - Exploration</h1>

                <div className="interview">
                    <h3>Interview</h3>
                    <div>
                        <h5>Purpose of Interview</h5>
                        <p>In-depth research on users to uncover the needs, pain points and expectations of children at elementary age who are hard of hearing. Getting to know the current situation of how to help them learn music in preschool; looking for problems and obstacles in actual teaching practice and daily life with currently used helping devices; and analyzing pros and cons of those devices to provide data for the new device development.</p>
                    </div>
                    <div className="questions">
                        <h5>Interviewees</h5>
                        <p>I interviewed 10 pairs of parents and children in both special and common schools from China and the United States; 13 music teachers who teach hard of hearing children with mild to severe impairment; 2 audiologists who go to school once a week to check childre's ears; 2 professors in special education. </p>
                        <div className="row">
                            <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto align-self-center">
                                <img src={require("../../../image/projects/visual_melody/interview.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="response">
                    <h3>Quotes from interviewees</h3>
                    {
                        responseData.map((data, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <div className="row">
                                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 summary">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 align-self-center">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <img className="profile" src={require(`../../../image/projects/visual_melody/${data.img}`)} alt='' />
                                                        </div>
                                                        <div className="col-6 value">
                                                            <p>{data.name}</p>
                                                            <p className="yellow">{data.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 align-self-center">
                                                    <p className="content">{`"${data.content}"`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 summary">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 align-self-center">
                                                    <p className="content">{`"${data.content}"`}</p>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-10 col-xs-12 align-self-center">
                                                    <div className="row">
                                                        <div className="col-6 value_right">
                                                            <p>{data.name}</p>
                                                            <p className="yellow">{data.title}</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <img className="profile" src={require(`../../../image/projects/visual_melody/${data.img}`)} alt='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="insight">
                    <h3>Insights</h3>
                    {
                        insightData.map((val) => {
                            return (
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 mx-auto">
                                        <img src={require(`../../../image/projects/visual_melody/${val.img}`)} alt='' />
                                    </div>
                                    <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 mx-auto text">
                                        <h5>{val.title}</h5>
                                        <p>{val.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="theoretical">
                    <h3>Theoretical support</h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/theoretical_1.png`)} alt='' />
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <h5>Why are sensory stimulations important to children who are hard-of-hearing? </h5>
                            <p>Hard of hearing children are more likely than their hearing peers to have sensory processing and integration difficulties which can impact everyday life and learning. The good news is that sensory integration difficulties can be changed through creating sensory-friendly learning environments (Sensory integration & speech and language therapy).</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-7 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <h5>Benefits of tactile and visual stimuli for hard-of-hearing children </h5>
                            <p>Marlatt (2014) has suggested that hard of hearing students are likely to be more visual learners than auditory learners, and visual stimuli can facilitate language and communication development in these children. Essentially, hard of hearing students utilize their visual acuity in conjunction with their auditory perception. Furthermore, research indicates that the implementation of visual and tactile aids has resulted in gradual improvements in speech and language acquisition in hard of hearing children during a six-week training program (Goldstein et al.).</p>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/theoretical_2.png`)} alt='' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <img src={require(`../../../image/projects/visual_melody/theoretical_3.png`)} alt='' />
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-8 col-xs-10 mx-auto align-self-center">
                            <h5>Music therapy and senses of sight and touch</h5>
                            <p>In the first US schools for children with hearing impairments, William Wolcott Turner and David Ely Bartlett, who were teachers, observed that the expressive qualities of music could be perceived through the senses of sight and touch (Turner and Bartlett). Since then, many clinical resources in numerous countries have recommended singing, playing instruments, movement, and listening exercises to enhance language development, speech production, auditory acuity, socialization, and the development of musicality (Hsiao and Gfeller, 2011).</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exploration;