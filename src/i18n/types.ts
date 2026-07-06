export interface Translations {
  nav: {
    ariaLabel: string
    banner: string
    sobreMi: string
    competencias: string
    experiencia: string
    certificaciones: string
    educacion: string
    contacto: string
  }
  languageSelector: {
    ariaLabel: string
    es: string
    en: string
  }
  banner: {
    name: string
    handle: string
    taglinePrefix: string
    taglineHighlight: string
    taglineSuffix: string
    description: string
    quote: string
    photoAlt: string
    badges: {
      fullstack: string
      uiux: string
      blockchain: string
      iot: string
      gaming: string
    }
    stats: {
      yearsLabel: string
      educationValue: string
      educationLabel: string
      certificationsLabel: string
    }
    actions: {
      experience: string
      contact: string
      downloadCv: string
    }
    scrollHintLabel: string
  }
  about: {
    eyebrow: string
    clapButtonLabel: string
    title: string
    paragraphOne: string
    paragraphTwo: string
    paragraphThree: string
    cards: {
      webMobile: { title: string; description: string }
      blockchain: { title: string; description: string }
      gaming: { title: string; description: string }
      iot: { title: string; description: string }
    }
  }
  techStack: {
    title: string
    subtitle: string
    avoidLabel: string
    groups: {
      frontend: { title: string; caption: string }
      backend: { title: string; caption: string }
      db: { title: string; caption: string }
      mobile: { title: string; caption: string }
      gaming: { title: string; caption: string }
      iot: { title: string; caption: string }
    }
  }
  experience: {
    title: string
    subtitle: string
    gateTitle: string
    gateSubtitle: string
    closeLabel: string
    presentLabel: string
    jobs: {
      ximil: ExperienceJobText
      avancys: ExperienceJobText
      sic: ExperienceJobText
      bbva: ExperienceJobText
      perspectivaK: ExperienceJobText
      codelabs: ExperienceJobText
      freelance: ExperienceJobText
    }
  }
  certifications: {
    title: string
    subtitle: string
    closeLabel: string
    prevLabel: string
    nextLabel: string
    imageAlt: string
  }
  footer: {
    createdByPrefix: string
  }
  education: {
    title: string
    description: string
    university: { title: string; description: string }
    selfTaught: { title: string; description: string }
    virtualLearning: { title: string; description: string }
    botany: { title: string; description: string }
  }
  contact: {
    title: string
    subtitle: string
    github: string
    linkedin: string
    twitter: string
    instagram: string
    telegram: string
    emailTrigger: string
    emailSend: string
    emailCopy: string
    emailCopied: string
    captchaAnswerLabel: string
    captchaRetry: string
  }
}

interface ExperienceJobText {
  company: string
  role: string
  responsibilityOne: string
  responsibilityTwo: string
  badgeOne: string
  badgeTwo: string
  badgeThree?: string
}
