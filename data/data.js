// Datos personales y profesionales de Grisel
const data = {
  name: 'Grisel',
  email: 'grisel.davilac@gmail.com',
  phone: '699158829',
  linkedin: 'https://www.google.com',
  avatar:
    'https://img.freepik.com/vector-gratis/linda-chica-hacker-operando-laptop-dibujos-animados-vector-icono-ilustracion-personas-tecnologia-aislada-plana_138676-9487.jpg', // ✅ Imagen de perfil
  address: 'Madrid, España', // ✅ Ubicación

  aboutMe:
    '💻 Apasionada por la tecnología y el desarrollo web. 📚 En constante aprendizaje.',

  education: [
    {
      degree: 'Máster en Desarrollo Web',
      university: 'MBA',
      graduationYear: 'En curso'
    },
    {
      degree: 'Técnico Superior en ASIR',
      university: 'INSTITUTO',
      graduationYear: '2014'
    }
  ],

  relevantCourses: [
    {
      title: 'Robótica para la Docencia',
      institution: 'Centro de Formación Tecnológica Avanzada',
      duration: 'Junio - Agosto (3 meses)'
    }
  ],

  experience: [
    {
      position: 'Técnico de Sistemas',
      company: 'Envialia',
      startDate: '2019',
      endDate: '2024',
      description: 'Administración y mantenimiento de sistemas informáticos.'
    },
    {
      position: 'Asistente de soporte técnico',
      company: 'Empresa TPV',
      startDate: '2015',
      endDate: '2018',
      description: 'Resolución de incidencias en sistemas TPV.'
    }
  ],

  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Git',
    'Marketing Digital'
  ],

  projects: [
    {
      title: 'PRIMARK',
      description:
        'Replica del sitio web de Primark, enfocada en la presentación de productos y diseño responsivo.',
      link: 'https://primark-proyecto1.netlify.app/',
      preview: 'https://via.placeholder.com/300'
    },
    {
      title: 'TIENDA',
      description:
        'Aplicación web para filtrar y buscar productos de manera eficiente, mejorando la experiencia del usuario en la navegación de catálogos.',
      link: 'https://tienda-de-filtros.netlify.app/',
      preview: 'https://via.placeholder.com/300'
    },
    {
      title: 'PINTEREST',
      description:
        'Clon de la interfaz de Pinterest, permitiendo la visualización de imágenes en un diseño de cuadrícula atractivo y funcional.',
      link: 'https://pinterest-copia3.netlify.app/',
      preview: 'https://via.placeholder.com/300'
    }
  ]
}

export default data
