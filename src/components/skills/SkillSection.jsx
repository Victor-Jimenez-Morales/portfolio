// Components
import Badge from '../badge/Badge'

// Styles
import './SkillSection.css'

export default function SkillSection ({ skills }) {
  return (
    <section id='skills'>
      <h2 className='skill-section-title'>SKILLS</h2>
      <div className='skill-group-list'>
        {
          skills.map((skillGroup, index) => (
            <section key={index}>
              <h3 className='skill-group-title'>{skillGroup.title}</h3>
              <div className='badge-list'>
                {
                  skillGroup.skills.map((skill, i) => (
                    <Badge key={i} name={skill.name} iconPath={skill.iconPath} background={skill.background} textColor={skill.text} />
                  ))
                }
              </div>
            </section>
          ))
        }
      </div>
    </section>
  )
}
