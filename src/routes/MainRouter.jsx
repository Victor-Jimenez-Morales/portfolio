import { Route, Routes } from 'react-router-dom'

// Components
import Introduction from '../components/introduction/Introduction'
import AboutMe from '../components/about-me/AboutMe'
import WorkAndEducation from '../components/work-education/WorkAndEducation'
import ProjectSection from '../components/projects/project-section/ProjectSection'
import SkillSection from '../components/skills/SkillSection'
import Contact from '../components/contact/Contact'

export default function MainRouter ({ socialMedia, workEdExperience, projects, skills }) {
  return (
    <Routes>
      <Route
        path='/'
        element={<Introduction socialMedia={socialMedia} />}
      />
      <Route
        path='/introduction'
        element={<Introduction socialMedia={socialMedia} />}
      />
      <Route
        path='/about-me'
        element={<AboutMe />}
      />
      <Route
        path='/work-education-experience'
        element={<WorkAndEducation workEdExperience={workEdExperience} />}
      />
      <Route
        path='/projects'
        element={<ProjectSection projects={projects} />}
      />
      <Route
        path='/skills'
        element={<SkillSection skills={skills} />}
      />
      <Route
        path='/contact'
        element={<Contact socialMedia={socialMedia} />}
      />
    </Routes>
  )
}
