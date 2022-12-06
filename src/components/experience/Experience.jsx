import React from 'react'
import './experience.css'
import {TbCheckbox} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <TbCheckbox/>
            <div><h4>HTML</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
            <TbCheckbox/>
            <div><h4>CSS</h4>
            <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
            <TbCheckbox/>
           <div> <h4>JAVASCRIPT</h4>
            <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
            <TbCheckbox/>
           <div> <h4>BOOTSTRAP</h4>
            <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
            <TbCheckbox/>
            <div><h4>REACT JS</h4>
            <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
       
        <div className="experience_Backtend">
          <h3>Back-End Experience</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <TbCheckbox/>
            <div><h4>NODE JS</h4>
            <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience_details'>
            <TbCheckbox/>
            <div><h4>JAVA</h4>
            <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
      </div>

       
   
    </section>
  )
}

export default Experience