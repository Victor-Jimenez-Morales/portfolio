// Styles
import './NavListLink.css'

export default function NavListLink ({ children, setOpen, href }) {
  const handleClick = () => {
    setOpen(false)
  }

  return (
    <li className='nav-list-item'>
      <a className='nav-link' onClick={handleClick} href={href}>
        {children}
      </a>
    </li>
  )
}
