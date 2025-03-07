import data from '../../data/data'
import './Experience.css'

const template = () => {
  return `
  <section class="experience" id="experience">
    <h2>Experiencia Laboral</h2>
    <ul>
      ${data.experience
        .map(
          (item) => `
      <li>
        <h3>${item.startDate} - ${item.endDate}</h3>
        <h4>${item.company}</h4>
        <h4>${item.position}</h4>
        <p>${item.description}</p>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>`
}

const Experience = () => {
  return template()
}

export default Experience
