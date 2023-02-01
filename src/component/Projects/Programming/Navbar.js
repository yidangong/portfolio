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
                    to="java"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    Java
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="js"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    JavaScript
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="html"
                    spy={true}
                    smooth={true}
                    offset={-86}
                    duration={500}
                  >
                    HTML/CSS
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
