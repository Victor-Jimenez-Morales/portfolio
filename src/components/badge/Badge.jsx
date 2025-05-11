// Styles
import './Badge.css'

export default function Badge ({ name, iconPath, background, textColor }) {
  const badgeStyle = {
    backgroundColor: background
  }

  const textStyle = {
    color: textColor
  }

  return (
    <article className='badge' style={badgeStyle}>
      <img className='badge-icon' src={iconPath} alt={`${name} icon`} />
      <span style={textStyle}>{name}</span>
    </article>
  )
}
