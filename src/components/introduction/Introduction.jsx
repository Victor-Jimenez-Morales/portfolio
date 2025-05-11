// Components
import SocialMediaButtonList from '../social-media-buttons/button-list/SocialMediaButtonList'

// Styles
import './Introduction.css'

export default function Introduction ({ socialMedia }) {
  return (
    <section id='introduction' className='introduction-section'>
      <h1 className='introduction-title'>VICTOR <span>JIMENEZ</span></h1>

      <p className='introduction-text'>
        WELCOME ALL TO MY PORFTOLIO, I'M VICTOR, A PASSIONATE OF WEB DEVELOPMENT!
      </p>

      <a href='https://drive.google.com/file/d/1fOeYDeZjzABCJYEogVH5YbXzZsBBuLwH/view?usp=sharing' className='introduction-button' target='_blank' rel='noreferrer'>
        Download my CV!
      </a>

      <SocialMediaButtonList socialMedia={socialMedia} />
    </section>
  )
}
