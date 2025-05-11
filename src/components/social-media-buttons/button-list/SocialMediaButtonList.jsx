// Components
import GithubButton from '../button/GithubButton'
import LinkedinButton from '../button/LinkedinButton'
import WhatsappButton from '../button/WhatsappButton'
import EmailButton from '../button/EmailButton'

// Styles
import './SocialMediaButtonList.css'

export default function SocialMediaButtonList ({ socialMedia }) {
  return (
    <div className='social-media-button-list'>
      <GithubButton link={socialMedia.githubLink} />
      <LinkedinButton link={socialMedia.linkedinLink} />
      <WhatsappButton phone={socialMedia.phone} />
      <EmailButton email={`mailto:${socialMedia.email}`} />
    </div>
  )
}
