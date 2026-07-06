import { es } from './es'
import { en } from './en'
import type { Translations } from './types'
import type { Locale } from './index'

const STORAGE_KEY = 'az-cv-lang'

const dictionaries: Record<Locale, Translations> = { es, en }

function readPath(dict: Translations, path: string): string | undefined {
    return path.split('.').reduce<unknown>((acc, key) => {
        if (acc && typeof acc === 'object' && key in acc) {
            return (acc as Record<string, unknown>)[key]
        }
        return undefined
    }, dict) as string | undefined
}

function detectLocale(): Locale {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

function applyLocale(locale: Locale): void {
    const dict = dictionaries[locale]
    document.documentElement.lang = locale

    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const value = readPath(dict, el.dataset.i18n ?? '')
        if (typeof value === 'string') el.textContent = value
    })

    document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
        const value = readPath(dict, el.dataset.i18nAria ?? '')
        if (typeof value === 'string') el.setAttribute('aria-label', value)
    })

    document.querySelectorAll<HTMLImageElement>('[data-i18n-alt]').forEach((el) => {
        const value = readPath(dict, el.dataset.i18nAlt ?? '')
        if (typeof value === 'string') el.alt = value
    })

    document.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((el) => {
        const isActive = el.dataset.langOption === locale
        el.classList.toggle('language-selector__option--active', isActive)
        el.setAttribute('aria-pressed', String(isActive))
    })

    localStorage.setItem(STORAGE_KEY, locale)
}

function setupLanguageButtons(): void {
    document.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((el) => {
        el.addEventListener('click', () => {
            const value = el.dataset.langOption
            if (value === 'es' || value === 'en') applyLocale(value)
            el.blur()
        })
    })
}

// Conteo de 0 al valor final para los bloques de cifras del Banner. El HTML
// ya trae el valor final correcto (ej. "+10") por si esto no llega a correr;
// esto es solo mejora progresiva, sincronizada con la propia animación de
// entrada CSS del bloque (arranca justo cuando esa animación empieza, sin
// duplicar el delay en JS). La animación de entrada corre en el CONTENEDOR
// `.stat-block` (el padre), no en el número: por eso el listener se pone ahí,
// no en `[data-counter-target]` directamente (si no, "animationstart" nunca
// llega y el número se queda fijo en su valor final desde el principio).
function setupCounters(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.querySelectorAll<HTMLElement>('[data-counter-target]').forEach((el) => {
        const target = Number(el.dataset.counterTarget)
        if (!Number.isFinite(target)) return
        const prefix = el.dataset.counterPrefix ?? ''
        const duration = 1400
        const animatedAncestor = el.closest<HTMLElement>('.stat-block') ?? el

        const runCounter = () => {
            const start = performance.now()

            const tick = (now: number) => {
                const progress = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)
                el.textContent = `${prefix}${Math.round(eased * target)}`
                if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
        }

        animatedAncestor.addEventListener('animationstart', runCounter, { once: true })
    })
}

applyLocale(detectLocale())
setupLanguageButtons()
setupCounters()
