import './header.css'
import React from 'react'
import CTA from './CTA'
import ME from './../../assets/max.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div className='container header_container'>
      <h5>HI I am</h5>   
      <h1>Maqhawe Leonard</h1>
      <h1>Thabethe</h1>
      <h5 className='text-light'>Software Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      
    </div>
  )
}

export default Header