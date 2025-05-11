// Components
import SocialMediaButtonList from '../social-media-buttons/button-list/SocialMediaButtonList'

// Styles
import './Contact.css'

export default function Contact ({ socialMedia }) {
  return (
    <section id='contact' className='contact-section'>
      <h2>CONTACT</h2>
      <section className='contact-content'>
        <p>I’m excited to explore new opportunities and contribute to innovative projects, teams and companies.</p>
        <p>Get in touch if you're looking for a dedicated web developer to join your team.</p>
        <div className='contact-info-list'>
          <article className='contact-info'>
            <img src='/email.gif' alt='email-gif-icon' />
            <p>: {socialMedia.email}</p>
          </article>
          <article className='contact-info'>
            <img src='/phone.gif' alt='email-gif-icon' />
            <p>: {socialMedia.phone}</p>
          </article>
        </div>

        <SocialMediaButtonList socialMedia={socialMedia} />
      </section>
    </section>
  )
}
