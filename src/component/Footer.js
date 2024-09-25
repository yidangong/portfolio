import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let yidanData = this.props.yidanData;
        var {fClass}= this.props;
        return(
            <section className={`footer-area ${fClass}`}>
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo2.png')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    yidanData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className} ></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                        
                        <h6>Made with love by <a href="http://www.gongyidan.com" target="_blank" rel="noopener noreferrer">Yidan Gong</a></h6>
                        <p>© 2022 YidanGong - All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;