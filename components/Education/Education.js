import data from '../../data/data'
import './Education.css'

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Educación</h2>
      ${data.education
        .map(
          (edu) => `
        <div class="education-card">
          <h3>${edu.degree}</h3>
          <h4>${edu.university}</h4>
          <p>Año de Graduación: ${edu.graduationYear}</p>
        </div>
      `
        )
        .join('')}

      <h3>Cursos Relevantes</h3>
      <div class="education-card">
        ${data.relevantCourses
          .map(
            (course) => `
          <h4>${course.title}</h4>
          <p>${course.institution}</p>
          <p>Duración: ${course.duration}</p>
        `
          )
          .join('')}
      </div>
    </section>
  `
}

const Education = () => {
  return template()
}

export default Education
