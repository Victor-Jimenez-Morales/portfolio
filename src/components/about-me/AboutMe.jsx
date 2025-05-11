// Styless
import './AboutMe.css'

export default function AboutMe () {
  return (
    <section id='about-me' className='aboutme-section'>
      <h2>ABOUT <span>ME</span></h2>
      <div className='aboutme-content'>
        <p>
          Tech enthusiast with a passion for computers, videogames, and programming. Holding a Higher Technician degree in Web Application Development and a Master Degree in Full-Stack Web Development. Skilled in HTML5, CSS3, JavaScript and SQL. Also have knowledge in PHP and frameworks like Laravel and libraries like React, Bootstrap and Tailwind CSS. Have a strong drive for continuous learning.
          My goal is to become a top Full-Stack Developer, maximizing both my technical skills and my ability to work well in teams and individually.
        </p>

        <img className='aboutme-img' src='/yo.jpg' alt='Picture of myself' />
      </div>
    </section>
  )
}
