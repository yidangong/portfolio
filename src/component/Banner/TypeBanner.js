import React, {Component} from 'react';
import { Parallax} from 'react-parallax';
import Reveal from 'react-reveal/Reveal/';
import Typer from './Typer';

class TypeBanner extends Component {
    render(){
        let yidanData = this.props.yidanData;
        return(
            <section id="home">
                <Parallax bgImage={require('../../image/bg.jpg')} strength={800} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            {/* <Reveal effect="fadeInUp"><h5 className="wow fadeInUp animated">HELLO</h5></Reveal> */}
                            <Reveal effect="fadeInUp" duration={1500}><h2 className="wow fadeInLeft animated">{yidanData.name}</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={5000}> <Typer heading={'I am an/a '} dataText={["UI/UX Designer", "ESL Teacher", "Web Developer"]} /></Reveal>
                            <ul className="list_style social_icon">
                            {
                                yidanData.socialLinks && yidanData.socialLinks.map(item =>{
                                return(
                                        <li key={item.name}>
                                            <a  href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a> 
                                        </li>
                                        )
                                    }
                                )
                            }
                            </ul>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}

export default TypeBanner;