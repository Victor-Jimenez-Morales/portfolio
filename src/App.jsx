// Hooks
import { useAutoAnimate } from '@formkit/auto-animate/react'

// Components
import Nav from './components/nav/main-nav/Nav'

// Routes
import MainRouter from './routes/MainRouter'

// Styles
import './App.css'

// Constants
import { WORK_ED_EXPERIENCE, PROJECTS, SOCIAL_MEDIA, SKILLS } from './constants'

export default function App () {
  const [parent] = useAutoAnimate()

  return (
    <>
      <Nav />

      <main ref={parent}>
        <MainRouter
          socialMedia={SOCIAL_MEDIA}
          workEdExperience={WORK_ED_EXPERIENCE}
          projects={PROJECTS}
          skills={SKILLS}
        />
      </main>
    </>
  )
}
