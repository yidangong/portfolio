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
                                <SectionTitleTwo stitle="Student-Centered, Interactive, Commucative" btitle="Teaching Adults Worldwide English Integrated Skills (Online)"/>
                                <p>This is a 60-hour English course I taught online with a co-teacher from January to April 2022 at the Community Language Program at <br/>Teachers College, Columbia University.</p>
                                <div className="row">
                                    <CounterItem col="col-md-6 s_item" CText='9' pdescription='Class Size'/>
                                    <CounterItem col="col-md-6 s_item" CText='60' pdescription='Teaching Hours'/>
                                    <CounterItemText col="col-md-12" CText='Intermediate II' pdescription='Student Level'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                          <img className="fact_img" src={require('../../../image/projects/clp/program-logo.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Introduction;