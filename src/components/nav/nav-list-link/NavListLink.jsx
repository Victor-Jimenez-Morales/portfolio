// React Router Components
import { NavLink } from 'react-router-dom'

// Styles
import './NavListLink.css'

export default function NavListLink ({ children, setOpen, href }) {
  const handleClick = () => {
    setOpen(false)
  }

  return (
    <li className='nav-list-item'>
      <NavLink
        className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
        onClick={handleClick}
        to={href}
      >
        {children}
      </NavLink>
    </li>
  )
}
