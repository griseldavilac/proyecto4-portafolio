import './Header.css'
import { showSection } from '../Main/Main.js'

const template = () => {
  return `
  <header>
    <h1>Grisel Dávila</h1>
    
    <button id="menu-toggle" class="menu-toggle">☰</button> 

    <nav id="nav-menu">
      <ul>
        <li><a href="#aboutme">Sobre mí</a></li>
        <li><a href="#education">Educación</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
      </ul>
    </nav>
  </header>
  `
}

export const addNavListeners = () => {
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const sectionId = link.getAttribute('href').replace('#', '')
      showSection(sectionId)
    })
  })

  // ✅ Menú hamburguesa para móviles
  const menuToggle = document.getElementById('menu-toggle')
  const navMenu = document.getElementById('nav-menu')

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open')
  })
}

const Header = () => {
  return template()
}

export default Header
