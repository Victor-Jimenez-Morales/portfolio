// Styles
import './SocialMediaButton.css'

export default function LinkeinButton ({ link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <i className='icon fa-brands fa-linkedin' />
    </a>
  )
}
