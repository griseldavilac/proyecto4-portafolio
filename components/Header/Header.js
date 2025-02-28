import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Grisel Dávila</h1>
    
    <button id="menu-toggle" class="menu-toggle">☰</button> 

    <nav id="nav-menu">
      <ul>
        <li><a href="#aboutme">Sobre mí</a></li>
        <li><a href="#education" data-section="education">Educación</a></li>
        <li><a href="#experience" data-section="experience">Experiencia</a></li>
        <li><a href="#projects">Proyectos</a></li>
      </ul>
    </nav>
  </header>
  `
}

export const addNavListeners = () => {
  document.querySelectorAll('[data-section]').forEach((link) => {
    link.addEventListener('click', (e) => {
      showSection(e.target.getAttribute('data-section'))
      document.getElementById('nav-menu').classList.remove('open') // Cierra el menú al hacer clic
    })
  })

  // Evento para abrir/cerrar el menú en móviles
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
