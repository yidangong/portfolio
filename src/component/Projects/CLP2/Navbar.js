import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    var { mainlogo } = this.props;
    return (
      <React.Fragment>
        <header className="header_area_one p_absoulte">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-9 col-7">
                <div className="menu_left">
                  <a href="/#" className="logo">
                    <img src={require("../../../image/" + mainlogo)} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-3 col-8">
                <div className="menu_right">
                  <div className="burger_menu">
                    <span className="text" data-text="menu"></span>
                    <div
                      id="nav-icon2"
                      className={this.state.isExpanded ? "open" : ""}
                      onClick={() => this.handleToggle()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className={
            this.state.isExpanded ? "offcanvas_menu open" : "offcanvas_menu"
          }
        >
          <div className="closer_icon" onClick={() => this.handleToggle()}>
            <i className="icon_close"></i>
          </div>
          <div className="menu_body">
            <div className="menu_title">
              <h2>Summer 2022 Lower Intermediate I</h2>
              <p>
                This is a 60-hour English course I taught in person with a co-teacher from July to Augest 2022 at the Community Language Program at <br/>Teachers College, Columbia University.
              </p>
            </div>
            <div className="off_menu">
              <ul id="menu" className="nav">
                <li data-menuanchor="Course-Syllabus" className="">
                  <a href="#Course-Syllabus">Course Syllabus</a>
                </li>
                <li data-menuanchor="Need-Analysis" className="">
                  <a href="#Need-Analysis">Need Analysis</a>
                </li>
                <li data-menuanchor="Teaching-Philosophy" className="">
                  <a href="#Teaching-Philosophy">Teaching Philosophy</a>
                </li>
                <li data-menuanchor="Lesson-Plan" className="">
                  <a href="#Lesson-Plan">Lesson Plan</a>
                </li>
                <li data-menuanchor="Teaching-Moments-1" className="">
                  <a href="#Teaching-Moments-1">Teaching Moments 1</a>
                </li>
                <li data-menuanchor="Teaching-Moments-2" className="">
                  <a href="#Teaching-Moments-2">Teaching Moments 2</a>
                </li>
                <li data-menuanchor="Teaching-Moments-3" className="">
                  <a href="#Teaching-Moments-3">Teaching Moments 3</a>
                </li>
                <li data-menuanchor="Teaching-Moments-4" className="">
                  <a href="#Teaching-Moments-4">Teaching Moments 4</a>
                </li>
                <li data-menuanchor="Teaching-Moments-5" className="">
                  <a href="#Teaching-Moments-5">Teaching Moments 5</a>
                </li>
                <li data-menuanchor="Teaching-Moments-6" className="">
                  <a href="#Teaching-Moments-6">Teaching Moments 6</a>
                </li>
              </ul>
            </div>
            <div className="copy_right_menu">
              <p>
                © <a href="/#">Yidan</a> 2022. All Rights Reseverd Design by
                YidanGong
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Navbar;
