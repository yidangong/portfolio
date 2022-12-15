import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";
class Navbar extends Component {
  render() {
    var { mClass, mContainer, mainlogo, stickylogo } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            <a className="navbar-brand logo_h" href="../">
              <img src={require("../../../image/" + mainlogo)} alt="" />
              <img src={require("../../../image/" + stickylogo)} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item-bk">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Introduction
                  </Link>
                </li>
                <li className="nav-item-bk">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="philosophy"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Philosophy
                  </Link>
                </li>
                <li className="nav-item-bk">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="course_needs"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Syllabus & Needs
                  </Link>
                </li>
                <li className="nav-item-bk">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="lesson_plan"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Lesson Plan
                  </Link>
                </li>
                <li className="nav-item-bk">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="teaching_moments"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Teaching Moments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default Navbar;
