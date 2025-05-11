// Styles
import Table from '../table/Table'
import TableCell from '../table/TableCell'
import TableRow from '../table/TableRow'
import './WorkAndEducation.css'

export default function WorkAndEducation ({ workEdExperience }) {
  return (
    <section id='work-education-experience' className='experience-section'>
      <h2>WORKING & EDUCATION <span>EXPERIENCE</span></h2>
      <Table>
        {
          workEdExperience.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {item.title}
              </TableCell>
              <TableCell>
                <p>{item.company}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </TableCell>
            </TableRow>
          ))
        }
      </Table>
    </section>
  )
}
