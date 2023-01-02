import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <section className="skill_area_two dhh_intro" id="introduction">
        <div className='container'>
          <h1>Introduction</h1>
          <div className='background'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <h3>Background</h3>
                <p>Society can take a negative perspective toward deaf or hard of hearing people by casting them out and not acknowledging their existence, but many people who have lost or never had hearing, like Evelyn Glennie, have created music. Glennie was able to learn and make a career with music. A deaf composer, Beethoven, was scared of being shamed for his hearing loss, but he was still able to express himself through music.</p>
                <p>Hearing loss is one of the most common birth defects in the U.S. About 12,000 children are born each year with permanent hearing loss. 12 out of every 1,000 children in the United States are deaf (NCHA), another 30 will experience some degree of hearing loss (HLAA).</p>
              </div>
              <div className='col-lg-6 col-md-12 image'>
                <img src={require('../../../image/projects/visual_melody/intro_background.webp')} alt='' />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 image'>
                <img src={require('../../../image/projects/visual_melody/physical_abuse.png')} alt='' />
              </div>
              <div className='col-lg-6 col-md-12 image'>
                <img src={require('../../../image/projects/visual_melody/sexual_abuse.png')} alt='' />
              </div>
            </div>
            <div className='image_title'>
              <p>Children with hearing impairment are 3x more likely to be abused in the U.S</p>
            </div>
          </div>

          <div className='target_group'>
            <div className='title'>
              Target Group<span className='subtitle'>Pre-school Children</span>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <h5>About Hard of Hearing</h5>
                <p>Hard of hearing is a term that refers to someone with mild-to-severe hearing loss. In these individuals, some hearing capability is still present. </p>
              </div>
            </div>
            <div className='row image'>
              <div className='col-lg-4 col-md-8 mx-auto'>
                <figure>
                  <img src={require('../../../image/projects/visual_melody/mild_hearing_loss.jpeg')} alt='' />
                  <figcaption>Mild Hearing Loss</figcaption>
                </figure>
              </div>
              <div className='col-lg-4 col-md-8 mx-auto'>
                <figure>
                  <img src={require('../../../image/projects/visual_melody/moderate_hearing_loss.webp')} alt='' />
                  <figcaption>Moderate Hearing Loss</figcaption>
                </figure>
              </div>
              <div className='col-lg-4 col-md-8 mx-auto'>
                <figure>
                  <img src={require('../../../image/projects/visual_melody/severe_hearing_loss.jpg')} alt='' />
                  <figcaption>Severe Hearing Loss</figcaption>
                </figure>
              </div>
            </div>
            <div className='hearing_type'>
              <p>Children who are hard of hearing cannot experince music like those who are normally hearing in terms of: </p>
              <div className='row icon'>
                <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12 mx-auto'>
                  <figure>
                    <img src={require('../../../image/projects/visual_melody/frequency.png')} alt='' />
                    <figcaption>Frequency</figcaption>
                  </figure>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12 mx-auto'>
                  <figure>
                    <img src={require('../../../image/projects/visual_melody/pitch.png')} alt='' />
                    <figcaption>Pitch</figcaption>
                  </figure>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12 mx-auto'>
                  <figure>
                    <img src={require('../../../image/projects/visual_melody/volume.png')} alt='' />
                    <figcaption>Volume</figcaption>
                  </figure>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12 mx-auto'>
                  <figure>
                    <img src={require('../../../image/projects/visual_melody/clarity.png')} alt='' />
                    <figcaption>Clarity</figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className='situation'>
              <h3>Current Situation</h3>
              <p>Even a mild hearing loss can cause a child to miss as much as 50 percent of classroom discussion.</p>
              <div className='row item'>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto'>
                  <img src={require('../../../image/projects/visual_melody/fm_system.jpeg')} alt='' />
                </div>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto description'>
                  <h3>FM System</h3>
                  <p>A radio frequency is transmitted from the microphone and directly sent to the person wearing the receiver, resulting in a clearer signal.</p>
                </div>
              </div>
              <div className='row item'>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto'>
                  <img src={require('../../../image/projects/visual_melody/induction_loop_system.gif')} alt='' />
                </div>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto description'>
                  <h3>Induction Loop system</h3>
                  <p>Involves a wire cable that sends an electromagnetic signal within the area.</p>
                </div>
              </div>
              <div className='row item'>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto'>
                  <img src={require('../../../image/projects/visual_melody/soundfield_system.png')} alt='' />
                </div>
                <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-auto description'>
                  <h3>Soundfield System</h3>
                  <p>Consists of a microphone that transmits sound to speakers that are strategically placed around the room.</p>
                </div>
              </div>
            </div>

            <div className='row benefits'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto text'>
                <h3>Benefits of Music Therapy</h3>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto'>
                <img src={require('../../../image/projects/visual_melody/benefit_of_music_therapy.png')} alt='' />
              </div>
            </div>

            <div className='challenge'>
              <h3>Design challenge</h3>
              <p>How to help hard of hearing children enjoy and learn music then engage in the inclusive classroom? </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Introduction;