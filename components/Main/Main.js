import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe.js'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

const template = () => {
  return `
  <main>
    <section id="aboutme" class="hidden">${AboutMe()}</section>
    <div id="content">${Education()}</div>
    <section id="projects" class="hidden">${Projects()}</section>
  </main>
  `
}

export const Main = () => {
  return template()
}

// ✅ Función para mostrar la sección correcta
export const showSection = (section) => {
  document.querySelectorAll('main section').forEach((sec) => {
    sec.classList.add('hidden')
  })

  if (section === 'education') {
    document.getElementById('content').innerHTML = Education()
  } else if (section === 'experience') {
    document.getElementById('content').innerHTML = Experience()
  } else {
    document.getElementById(section)?.classList.remove('hidden')
  }

  // ✅ Desplaza suavemente a la sección correspondiente
  setTimeout(() => {
    window.scrollTo({
      top: document.getElementById(section).offsetTop - 70,
      behavior: 'smooth'
    })
  }, 100)
}
