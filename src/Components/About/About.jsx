import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img1} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Motivated and detail-oriented MCA graduate with hands-on experience in Python full stack development.
                    </p>
                    <p>Proficient in HTML, CSS, JavaScript, React, and Python, with a strong foundation in front-end and back-end
                    development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"80%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap</p><hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>DJango</p><hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>MySql</p><hr style={{width:"50%"}} />
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Full Stack Development</h1>
                <p>Course Finished in Basent Technology, Velachery.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Python</h1>
                <p>Course Finished in Guvi.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>

        </div>

    </div>
  )
}

export default About