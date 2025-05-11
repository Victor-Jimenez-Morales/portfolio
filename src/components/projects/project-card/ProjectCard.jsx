// Styles
import EyeButton from '../../social-media-buttons/button/EyeButton'
import GithubButton from '../../social-media-buttons/button/GithubButton'
import './ProjectCard.css'

export default function ProjectCard ({ imgSrc, title, description, githubLink, projectLink }) {
  return (
    <article className='project-card'>
      <a href={projectLink} target='_blank' rel='noreferrer'>
        <img src={imgSrc} alt='project-img' />
      </a>
      <div className='project-card-body'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className='project-card-buttons'>
          <GithubButton link={githubLink} />
          <EyeButton link={projectLink} />
        </p>
      </div>
    </article>
  )
}
