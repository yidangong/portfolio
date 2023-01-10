import React, {Component} from 'react';
import Slider from 'react-slick';

 class TestimonialSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        autoplay: true,
        pauseOnHover:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings} className="testimonial_slider">
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../../image/projects/edubot/testimonial_1.png')} alt=""/>
                    </div>
                    <h6>Cameron</h6>
                    <p>I find the grammar correction useful.</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../../image/projects/edubot/testimonial_2.png')} alt=""/>
                    </div>
                    <h6>Nobi</h6>
                    <p>It is good to have a not-judging conversational partner.</p>
                </div>
                <div className="item">
                    <div className="author_img">
                        <img src={require('../../../image/projects/edubot/testimonial_3.png')} alt=""/>
                    </div>
                    <h6>Noah</h6>
                    <p>I like this course, I really learnt a lot.</p>
                </div>
          </Slider>
        </div>
      );
    }
  }
  export default TestimonialSlider;