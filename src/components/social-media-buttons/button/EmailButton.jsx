// Styles
import './SocialMediaButton.css'

export default function EmailButton ({ email }) {
  return (
    <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
      <i className='icon fa-solid fa-envelope' />
    </a>
  )
}
