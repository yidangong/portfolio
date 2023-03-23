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
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="title"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Title
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="background"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Background
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="response"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Design Response
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="research"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Research
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="insights"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Insights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="ideations"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Ideations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="difinition"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Defination
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="flow"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    User Task Flow
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="design"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Final Design
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="reflection"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Reflection
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
