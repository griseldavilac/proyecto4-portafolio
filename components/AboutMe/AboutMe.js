// Importamos los datos del usuario desde data.js
import data from '../../data/data'
// Importamos los estilos de AboutMe
import './AboutMe.css'

// Función que genera la estructura de la sección About Me
const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Sobre Mí</h2>
      <img class="avatar" src="${
        data.avatar || 'https://via.placeholder.com/150'
      }" alt="${data.name}" />
      
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Ubicación:</strong> ${
        data.address ? data.address : 'Ubicación no disponible'
      }</p>
      <p><strong>Teléfono:</strong> <a href="tel:${data.phone}">${
    data.phone
  }</a></p>
      <p><strong>Correo:</strong> <a href="mailto:${data.email}">${
    data.email
  }</a></p>
      <p><strong>LinkedIn:</strong> <a href="${
        data.linkedin
      }" target="_blank">Ver perfil</a></p>

      <h3>Habilidades</h3>
      <ul>
        ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>

      <p>${data.aboutMe}</p>
    </section>
  `
}

// Función para añadir eventos, en este caso, animar la imagen de perfil al hacer clic
export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')

  if (avatar) {
    avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
  }
}

// Exportamos la función AboutMe para ser usada en otros archivos
export const AboutMe = () => {
  return template()
}
