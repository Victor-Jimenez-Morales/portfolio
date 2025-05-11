// Styles
import './SocialMediaButton.css'

export default function EyeButton ({ link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <i className='icon fa-solid fa-eye' />
    </a>
  )
}
