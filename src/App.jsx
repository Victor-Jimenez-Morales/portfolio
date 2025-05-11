// Components
import Nav from './components/nav/main-nav/Nav'
import Introduction from './components/introduction/Introduction'
import AboutMe from './components/about-me/AboutMe'
import WorkAndEducation from './components/work-education/WorkAndEducation'
import ProjectSection from './components/projects/project-section/ProjectSection'
import SkillSection from './components/skills/SkillSection'
import Contact from './components/contact/Contact'

// Styles
import './App.css'

// Constants
import { WORK_ED_EXPERIENCE, PROJECTS, SOCIAL_MEDIA, SKILLS } from './constants'

export default function App () {
  return (
    <>
      <Nav />

      <main>
        <Introduction socialMedia={SOCIAL_MEDIA} />
        <AboutMe />
        <WorkAndEducation workEdExperience={WORK_ED_EXPERIENCE} />
        <ProjectSection projects={PROJECTS} />
        <SkillSection skills={SKILLS} />
        <Contact socialMedia={SOCIAL_MEDIA} />
      </main>
    </>
  )
}
