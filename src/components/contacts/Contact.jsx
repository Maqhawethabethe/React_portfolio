import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9y9oco', 'template_a9khqls', form.current, 'WGNanRH_cPftFUwPy')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options"> 
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>qhawes54@gmail.com</h5>
            <a href="mailto:qhawes54@gmail.com">send message</a>

          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+27618326875</h5>
            <a href="https://api.whatsapp.com/send?phone=0618326875" target='_blank'>send message </a>

          </article>
        </div>
        {/*end of contact*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'placeholder='Full Name' required/>
          <input type="text"name='email'placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
