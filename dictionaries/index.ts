import type en from "./en"

export type Dictionary = typeof en

const dictionaries = {
  en: () => import("./en").then(m => m.default),
  ja: () => import("./ja").then(m => m.default),
} as const

export type Locale = keyof typeof dictionaries

export async function getDictionary(lang: string): Promise<Dictionary> {
  const load = dictionaries[lang as Locale] ?? dictionaries.en
  return load()
}
