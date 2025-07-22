// Hooks
import { useState } from 'react'

// Components
import { Divide as Hamburger } from 'hamburger-react'
import { NavList } from '../nav-list/NavList'

// Styles
import './Nav.css'

export default function Nav () {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav>
      <div className='main-nav'>
        <img
          className='main-nav-logo'
          src='/logo.webp'
          alt='Portfolio Logo'
        />

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.5}
          size={48}
          color='var(--nav-link)'
          rounded
        />
      </div>

      <NavList isOpen={isOpen} setOpen={setOpen} />
    </nav>
  )
}
