import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Hariprasath</span>, Full Stack Developer Based in Chennai.</h1>
        <p>I am a Full Stack Developer from Velachery, Chennai a Recently Graduated on 2024</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me </AnchorLink></div>
            <a href={cv} download><div className="hero-resume">My resume</div></a>
        </div>

    </div>
  )
}

export default Hero