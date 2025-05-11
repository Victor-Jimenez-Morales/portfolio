// Components
import ProjectList from '../project-list/ProjectList'

// Styles
import './ProjectSection.css'

export default function ProjectSection ({ projects }) {
  return (
    <section id='projects' className='projects-section'>
      <h2>PROJECTS</h2>
      <ProjectList projects={projects} />
    </section>
  )
}
