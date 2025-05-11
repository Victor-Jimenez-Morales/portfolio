// Styles
import './SocialMediaButton.css'

export default function WhatsappButton ({ phone }) {
  return (
    <a href={`https://wa.me/${phone}`} target='_blank' rel='noreferrer'>
      <i className='icon fa-brands fa-whatsapp' />
    </a>
  )
}
