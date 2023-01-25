import React from 'react'
import './about.css'
import ME from './../../assets/about_icon1.jpeg'
import {FiAward} from 'react-icons/fi'
import {ImUsers} from 'react-icons/im'
import {FaProjectDiagram} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'className='about_section'>
      <h5>Get to know me</h5>
      <h2>About ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image3" />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Year</small>

            </article>

            <article className='about_card'>
              <ImUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>5+ Local</small>

            </article>

            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>

            </article>
          </div>
            <p>
            I Graduated from the Cape Peninsula University of Technology for a diploma in computer engineering.
            I have always been motivated by the growth of technology in South Africa to become a software developer.
            And throughout my academic journery, I have been exposed to the most up-to-date tools to develop modern web applications.

            </p>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>      
    </section>
  )
}

export default About