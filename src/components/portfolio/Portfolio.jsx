import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/simple-online-calculator.jpg'
import IMG2 from '../../assets/portfolio image.jpg'
import IMG3 from '../../assets/restuarant.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>
      My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        
        {
          data.map(({id, Image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github}className='btn' target='_blank'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Visit project</a>
            </div>
            </article>
            )
          })
        }
        
          </div>
      </section>
  )
}

export default Portfolio

//array data
const data = [
  {
    id: 1,
    Image: IMG1,
    title: 'Calculator',
    github: 'https://github.com/Maqhawethabethe/web-calculator.git',
    demo: 'https://chimerical-starship-aaca5b.netlify.app/'

  },
  {
    id: 2,
    Image: IMG2,
    title: 'Portfolio',
    github: 'https://github.com/Maqhawethabethe/React_portfolio.git',
    demo: 'https://incandescent-faun-68f42f.netlify.app'

  },
  {
    id: 3,
    Image: IMG3,
    title: 'Restuarant',
    github: 'https://github.com/Maqhawethabethe/Resturant-website-project.git',
    demo: '#demo'

  }

]