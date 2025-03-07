import './style.css?inline'
import Header, { addNavListeners } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Main, showSection } from './components/Main/Main'
import { AboutMe } from './components/AboutMe/AboutMe.js'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}

render()
addNavListeners()

// ✅ Función para desplazarse a la sección correspondiente
const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70, // ✅ Ajuste para que el título no se corte
      behavior: 'smooth'
    })
  }
}

// ✅ Escucha los clics en el menú de navegación
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const sectionId = link.getAttribute('href').replace('#', '')
    scrollToSection(sectionId)
    showSection(sectionId) // ✅ Se asegura de mostrar la sección correcta
  })
})
