import './style.css?inline'
import Header, { addNavListeners } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Main, addMainListeners } from './components/Main/Main'
import { addAboutListeners } from './components/AboutMe/AboutMe'

const render = () => {
  document.querySelector('#app').innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `
}

render()
addAboutListeners()
addMainListeners()
addNavListeners() // ✅ Agregamos los eventos de navegación
