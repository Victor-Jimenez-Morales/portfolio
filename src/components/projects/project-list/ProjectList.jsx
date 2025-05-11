// Components
import ProjectCard from '../project-card/ProjectCard'

// Styles
import './ProjectList.css'

export default function ProjectsSection ({ projects }) {
  return (
    <div className='project-list'>
      {
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
          />
        ))
      }
    </div>
  )
}
