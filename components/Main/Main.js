import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div id="content">
      ${Education()} <!-- Por defecto se muestra Educación -->
    </div>
    ${Projects()}
  </main>
  `
}

export const Main = () => {
  return template()
}

export const addMainListeners = () => {
  const content = document.querySelector('#content')

  // Función para cambiar la vista entre Educación y Experiencia
  window.showSection = (section) => {
    content.innerHTML = section === 'education' ? Education() : Experience()
  }
}
