import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/restuarant.jpg'
import IMG2 from '../../assets/tours.jpg'
import IMG3 from '../../assets/netflix.png'
import IMG4 from '../../assets/Google maps clone.png'

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
    title: 'Restuarant',
    github: 'https://github.com',
    demo: '#demo'

  },
  {
    id: 2,
    Image: IMG2,
    title: 'Bookings',
    github: 'https://github.com',
    demo: '#demo'

  },
  {
    id: 3,
    Image: IMG3,
    title: 'Netflix',
    github: 'https://github.com',
    demo: '#demo'

  }
]