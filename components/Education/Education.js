// Importamos los datos desde data.js
import data from '../../data/data'
import './Education.css' // Importamos los estilos de Education

// Función que genera la estructura de la sección de Educación
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

// Función para manejar el botón de cambio entre Educación y Experiencia
export const addToggleListener = () => {
  const toggleBtn = document.getElementById('toggle-btn')
  if (!toggleBtn) return

  toggleBtn.addEventListener('click', () => {
    if (window.location.hash === '#education') {
      window.location.hash = '#experience'
      toggleBtn.textContent = 'Mostrar Educación'
    } else {
      window.location.hash = '#education'
      toggleBtn.textContent = 'Mostrar Experiencia'
    }
  })
}

// Exportamos correctamente el módulo
const Education = () => {
  return template()
}

export default Education
