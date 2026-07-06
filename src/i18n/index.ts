import { es } from './es'
import { en } from './en'
import type { Translations } from './types'

export type Locale = 'es' | 'en'

export const locales: Locale[] = ['es', 'en']
export const defaultLocale: Locale = 'es'

const dictionaries: Record<Locale, Translations> = { es, en }

export function getDictionary(locale: Locale): Translations {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export type { Translations }
