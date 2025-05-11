// Components
import NavListLink from '../nav-list-link/NavListLink'

// Styles
import './NavList.css'

export function NavList ({ isOpen, setOpen }) {
  const navClassName = isOpen ? 'nav-list show' : 'nav-list hide'

  return (
    <ul className={navClassName}>
      <NavListLink setOpen={setOpen} href='#introduction'>INTRODUCTION</NavListLink>
      <NavListLink setOpen={setOpen} href='#about-me'>ABOUT ME</NavListLink>
      <NavListLink setOpen={setOpen} href='#work-education-experience'>WORKING & EDUCATION EXPERIENCE</NavListLink>
      <NavListLink setOpen={setOpen} href='#projects'>PROJECTS</NavListLink>
      <NavListLink setOpen={setOpen} href='#skills'>SKILLS</NavListLink>
      <NavListLink setOpen={setOpen} href='#contact'>CONTACT</NavListLink>
    </ul>
  )
}
