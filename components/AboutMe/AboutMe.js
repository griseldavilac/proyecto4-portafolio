import data from '../../data/data'
import './AboutMe.css'

const AboutMe = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Sobre Mí</h2>
      <div class="about-container">
        <img class="avatar round" src="${data.avatar}" alt="${data.name}" />
        <div class="about-text">
          <p>🙋‍♀️ <strong>${data.name}</strong></p>
          <p>📍 <strong>${
            data.address || 'Ubicación no disponible'
          }</strong></p>
          <p>📞 <a href="tel:${data.phone}">${data.phone}</a></p>
          <p>📧 <a href="mailto:${data.email}">${data.email}</a></p>
          <p>🔗 <a href="${data.linkedin}" target="_blank">LinkedIn</a></p>
        </div>
      </div>

      <h3>Habilidades</h3>
      <ul class="skills-list">
        ${data.skills.map((skill) => `<li>${skill}</li>`).join('')}
      </ul>

      <p>${data.aboutMe}</p>
    </section>
  `
}

// ✅ Animación de la imagen al hacer clic
export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')
  if (avatar) {
    avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
  }
}

// ✅ Exportamos correctamente
export { AboutMe }
