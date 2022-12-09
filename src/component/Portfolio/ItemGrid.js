import React, { Component } from 'react';
import ProjectData from './ProjectData';

class ItemGrid extends Component {
    state = {
        category: '*',
        projects: ProjectData
    }

    onFilterChange = (filter) => {
        if (filter === '*') {
            this.setState({
                category: '*',
                projects: ProjectData
            });
        } else {
            const newProjects = ProjectData.filter(project => {
                return project.category === filter;
            })
            this.setState({
                category: filter,
                projects: newProjects
            });
        }
    }

    isActive = (category) => {
        return category === this.state.category ? 'active' : '';
    }

    render() {
        return (
            <div>
                <ul className="list_style portfolio_menu text-center">
                    <li className={`${this.isActive('*')}`} data-wow-delay="0.1s" onClick={() => { this.onFilterChange("*") }}>ALL</li>
                    <li className={`${this.isActive('uxui')}`} data-wow-delay="0.3s" onClick={() => { this.onFilterChange("uxui") }}>UX/UI Design</li>
                    <li className={`${this.isActive('teaching')}`} data-wow-delay="0.3s" onClick={() => { this.onFilterChange("teaching") }}>Teaching</li>
                </ul>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {this.state.projects.map((Val, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <a href={Val.ref}>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="row blog_post">
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 blog_img">
                                                    <img className="img-fluid" src={require(`../../image/portfolio/${Val.img}`)} alt="" />
                                                </div>
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 post_content">
                                                    <h2>{Val.title}</h2>
                                                    <p className='description'>{Val.desc}</p>
                                                    <p className="read_btn"><i className="arrow_left" /> See Details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            } else {
                                return (
                                    <a href={Val.ref}>
                                        <div className="col-lg-12 col-md-12 image_right">
                                            <div className="row blog_post">
                                                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 post_content">
                                                    <h2>{Val.title}</h2>
                                                    <p className='description'>{Val.desc}</p>
                                                    <p className="read_btn">See Details <i className="arrow_right" /></p>
                                                </div>
                                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 blog_img">
                                                    <img className="img-fluid" src={require(`../../image/portfolio/${Val.img}`)} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemGrid;
