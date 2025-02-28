import data from '../../data/data'
import './Projects.css'

const template = () => {
  return `
  <section class="projects" id="projects">
    <h2>Mis Proyectos</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
      <li class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <img src="${
          project.preview || 'https://via.placeholder.com/300'
        }" alt="Vista previa del proyecto">
        <div class="project-links">
          <a href="${project.link}" target="_blank">🌐 VISUALIZAR</a>
        </div>
      </li>
      `
        )
        .join('')}
    </ul>
  </section>
  `
}

const Projects = () => {
  return template()
}

export default Projects
