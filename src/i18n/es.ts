import type { Translations } from './types'

export const es: Translations = {
  nav: {
    ariaLabel: 'Navegación principal',
    banner: 'Inicio',
    sobreMi: 'Sobre mí',
    competencias: 'Conocimientos',
    experiencia: 'Experiencia',
    certificaciones: 'Certificaciones',
    educacion: 'Formación Profesional',
    contacto: 'Contacto',
  },
  languageSelector: {
    ariaLabel: 'Cambiar idioma',
    es: 'Español',
    en: 'Inglés',
  },
  banner: {
    name: 'Andrés F. Rivera',
    handle: 'Azano Rivers',
    taglinePrefix: 'Ing. Software, ',
    taglineHighlight: 'Botánico',
    taglineSuffix: ', Visionario.',
    description:
      'Desarrollador de Software Senior, Full Stack, con más de 10 años de experiencia en creación e innovación de productos digitales (Web, Mobile, BlockChain, Gaming). Incursionando en IoT (Domótica y Agricultura Urbana).',
    quote: 'Imagina lo grandes que podemos ser',
    photoAlt: 'Andrés Rivera trabajando en su laptop',
    badges: {
      fullstack: 'FullStack',
      uiux: 'UI/UX',
      blockchain: 'BlockChain',
      iot: 'IoT',
      gaming: 'Gaming',
    },
    stats: {
      yearsLabel: 'Años de Experiencia',
      educationValue: 'Autodidacta',
      educationLabel: 'Formación',
      certificationsLabel: 'Certificaciones',
    },
    actions: {
      experience: 'Experiencia',
      contact: 'Contáctame',
      downloadCv: 'Descargar CV',
      downloading: 'Espere...',
    },
    scrollHintLabel: 'Desplázate hacia abajo',
  },
  about: {
    eyebrow: 'Sobre Mí',
    clapButtonLabel: 'Salúdame',
    title: 'Más de 10 años creando productos digitales',
    paragraphOne:
      'Soy un Ingeniero de Software autodidacta con experiencia robusta en todo el ciclo de vida de la creación de Software. Desde el sector público al privado, he trabajado en proyectos para objetivos masivos, participando en arquitectura, backend, frontend y despliegues.',
    paragraphTwo:
      'Soy un creador de soluciones multisector, (bancario, público, gaming, blockchain e IoT) encaminado por los pilares de la 5° revolución industrial que buscan modelos "Human Centricity" reduciendo la agresividad del avance tecnológico a las necesidades humanas.',
    paragraphThree:
      'Soy un romántico de la tecnología, soluciones sustentables y polímata. El futuro necesita que cambiemos y yo te ayudaré a cambiar tu mundo.',
    cards: {
      webMobile: {
        title: 'Web / Móvil',
        description: 'Productos digitales multiplataforma, excelente experiencia de usuario y rendimiento.',
      },
      blockchain: {
        title: 'BlockChain',
        description: 'Contratos inteligentes y aplicaciones descentralizadas para uso industrial o particular.',
      },
      gaming: {
        title: 'Gaming',
        description: 'Experiencias inmersivas y divertidas para todo tipo de sectores.',
      },
      iot: {
        title: 'IoT',
        description: 'Ciudades Inteligentes y Cultivo Urbano, un futuro verde hiperconectado para todos.',
      },
    },
  },
  techStack: {
    title: 'CONOCIMIENTOS',
    subtitle: 'Stack Tecnológico',
    avoidLabel: 'No trabajo con las siguientes tecnologías:',
    groups: {
      frontend: {
        title: 'Frontend',
        caption: 'Evito usar librerías o preprocesadores de CSS',
      },
      backend: {
        title: 'Backend',
        caption: 'APIs, servicios y contenedores',
      },
      db: {
        title: 'DB',
        caption: 'Relacionales y no relacionales',
      },
      mobile: {
        title: 'Mobile',
        caption: 'Multiplataforma nativo',
      },
      gaming: {
        title: 'Gaming',
        caption: 'Multiplataforma, 2D, Pixel Art',
      },
      iot: {
        title: 'IoT',
        caption: 'Microprocesadores y hardware conectado',
      },
    },
  },
  experience: {
    title: 'EXPERIENCIA',
    subtitle: 'Trayectoria Profesional',
    gateTitle: '¡Empieza el viaje en el tiempo!',
    gateSubtitle: 'Ver mi Experiencia',
    closeLabel: 'Cerrar línea de tiempo',
    presentLabel: 'Presente',
    jobs: {
      ximil: {
        company: 'Ximil Technology',
        role: 'Soporte y Automatización (Convenio Escolar)',
        responsibilityOne: 'Gestión del software de notas y matrículas del colegio',
        responsibilityTwo: 'Primeros scripts para automatizar procesos administrativos repetitivos',
        badgeOne: 'Automatización',
        badgeTwo: 'Soporte',
      },
      avancys: {
        company: 'Avancys',
        role: 'Desarrollador de Software (Medio Tiempo)',
        responsibilityOne: 'Desarrollo y soporte de módulos ERP sobre Odoo',
        responsibilityTwo: 'Primer acercamiento formal a un stack de software empresarial',
        badgeOne: 'Odoo',
        badgeTwo: 'Python',
      },
      sic: {
        company: 'Superintendencia de Industria y Comercio',
        role: 'Analista, Delegatura de Protección de Datos Personales',
        responsibilityOne: 'Automatización y cruce de grandes volúmenes de datos',
        responsibilityTwo: 'Soporte de redes y bases de datos para la Delegatura',
        badgeOne: 'Bases de Datos',
        badgeTwo: 'Redes',
      },
      bbva: {
        company: 'BBVA',
        role: 'Ingeniero de Software',
        responsibilityOne: 'Desarrollo de la plataforma de comercio exterior del banco',
        responsibilityTwo: 'Integración de operaciones con divisas de múltiples países',
        badgeOne: 'JavaScript',
        badgeTwo: 'APIs',
      },
      perspectivaK: {
        company: 'Perspectiva-K',
        role: 'Desarrollador Frontend',
        responsibilityOne: 'Desarrollo de interfaces y experiencias de usuario',
        responsibilityTwo: 'Trabajo en equipo con diseño y backend para nuevos productos',
        badgeOne: 'Frontend',
        badgeTwo: 'JavaScript',
      },
      codelabs: {
        company: 'CodeLabs',
        role: 'Ingeniero de Software Mid',
        responsibilityOne: 'Desarrollo de productos digitales para el sector bancario',
        responsibilityTwo: 'Agentes y modelos de Inteligencia Artificial, y videojuegos',
        badgeOne: 'IA',
        badgeTwo: 'Gaming',
        badgeThree: 'FullStack',
      },
      freelance: {
        company: 'Freelance',
        role: 'Consultoría y Desarrollo Independiente',
        responsibilityOne: 'Productos digitales a medida para clientes propios',
        responsibilityTwo: 'En paralelo a mi trabajo formal, hasta hoy',
        badgeOne: 'Full Stack',
        badgeTwo: 'Astro',
      },
    },
  },
  certifications: {
    title: 'CERTIFICACIONES',
    subtitle: 'Formación Continua',
    closeLabel: 'Cerrar',
    prevLabel: 'Anterior',
    nextLabel: 'Siguiente',
    imageAlt: 'Certificado',
  },
  footer: {
    createdByPrefix: 'Creado por',
  },
  education: {
    title: 'FORMACIÓN PROFESIONAL',
    description: 'Base Universitaria y desarrollo Autodidacta',
    university: {
      title: 'Base Universitaria',
      description:
        'Ingeniería de Software en la Universidad ECCI, cursada hasta séptimo semestre. No concluida por eficiencia del tiempo y recursos.',
    },
    selfTaught: {
      title: 'Desarrollo Autodidacta',
      description:
        'Creación de Proyectos autodidactas, estudios de tecnologías FullStack y experimentación antes de la era de la IA. Programando desde los 12 años de edad.',
    },
    virtualLearning: {
      title: 'Formación Virtual y Certificados',
      description:
        'Estudios y certificaciones en plataformas virtuales como Platzi, Udemy, Coursera, con más de 90 certificaciones.',
    },
    botany: {
      title: 'Formación Botánica',
      description: 'Estudios en Tecnología Hortícola cursados en la Universidad Militar Nueva Granada. Actualidad.',
    },
  },
  contact: {
    title: 'CONTACTO',
    subtitle: '¿Conversamos?',
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    twitter: 'Perfil de X',
    instagram: 'Perfil de Instagram',
    telegram: 'Perfil de Telegram',
    emailTrigger: 'Mostrar correo',
    emailSend: 'Enviar correo',
    emailCopy: 'Copiar',
    emailCopied: '¡Copiado!',
    captchaAnswerLabel: 'Respuesta del captcha',
    captchaRetry: 'Vuelve a intentarlo...',
  },
}
