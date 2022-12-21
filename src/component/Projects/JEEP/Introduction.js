import React, {Component} from 'react';
import anime from 'animejs/lib/anime.es.js';
import SectionTitleTwo from '../../../component/Banner/SectionTitleTwo';
import CounterItem from '../../Skill/CounterItem';
import CounterItemText from '../../Skill/CounterItemText';
class Introduction extends Component {
    componentDidMount(){
        function countup(el, target) {
            let data = { count: 0 };
            anime({
              targets: data,
              count: [0, target],
              duration: 2000,
              round: 1,
              delay: 200,
              easing: 'easeOutCubic',
              update() {
                el.innerText = data.count.toLocaleString();
              } });
          
          }
          
          function makeCountup(el) {
            const text = el.textContent;
            const target = parseInt(text, 10);
          
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                  countup(el, target);
                  io.unobserve(entry.target);
                }
              });
            });
          
            io.observe(el);
          }
          
          const els = document.querySelectorAll('[data-countup]');
          
        els.forEach(makeCountup);
    }
    render(){
        return(
            <section className="skill_area_two" id="introduction">
                <div className="container clp-intro">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                <SectionTitleTwo stitle="Student-Centered, Interactive, Commucative" btitle="Teaching ESL to Spanish Speakers in New York"/>
                                <p>This is a volunteer teaching program held by Community Impact at Columbia University. We offer free English classes for adult immigrants who live in the New York City area. Our mission is to help them become a lifelong learner; be an active member of the community; continue professional training or education; compete in the workplace. </p>
                                <div className="row">
                                    <CounterItem col="col-md-6 s_item" CText='13' pdescription='Class Size'/>
                                    <CounterItem col="col-md-6 s_item" CText='30' pdescription='Teaching Hours'/>
                                    <CounterItemText col="col-md-12" CText='Beginner' pdescription='Student Level'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <img className="fact_img" src={require('../../../image/projects/jeep/program-logo.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Introduction;