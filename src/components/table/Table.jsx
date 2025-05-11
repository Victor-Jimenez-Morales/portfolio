// Styles
import './Table.css'

export default function Table ({ children }) {
  return (
    <table className='table'>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}
