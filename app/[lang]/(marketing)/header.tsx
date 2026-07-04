"use client"

import {useTheme} from "next-themes"
import {useEffect, useRef, useState} from "react"
import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {GithubIcon, LanguagesIcon, MenuIcon, MoonIcon, SunIcon, XIcon} from "lucide-react"

const LOCALES = [
  {locale: "en", name: "English"},
  {locale: "ja", name: "日本語"},
]

export function Header({lang, nav}: { lang: string; nav: { home: string; documentation: string } }) {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    setMenuOpen(false)
    setLangOpen(false)
  }, [pathname])
  useEffect(() => {
    if (!langOpen) return
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [langOpen])
  if (!mounted) return null

  const navItems = [
    {label: nav.home, href: `/${lang}`},
    {label: nav.documentation, href: `/${lang}/docs`},
  ]

  const localeHref = (target: string) => {
    const segments = pathname.split("/")
    segments[1] = target
    return segments.join("/") || `/${target}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/logo/favicon-96x96.png" alt="RedisHub Logo" width={32} height={32} className="object-contain"/>
          <span className="font-bold text-lg">
            <span className="text-indigo-500">Redis</span>Hub
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-2 py-2 transition-colors border-b-2
                  ${isActive ? "border-indigo-500 text-indigo-500" : "border-transparent text-neutral-600 dark:text-neutral-400"}
                  hover:border-indigo-500 hover:text-indigo-500
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(open => !open)}
              className="flex items-center gap-1 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Change language"
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              <LanguagesIcon className="h-5 w-5"/>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 min-w-32 rounded-md border border-neutral-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
                {LOCALES.map(l => (
                  <Link
                    key={l.locale}
                    href={localeHref(l.locale)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-3 py-1.5 text-sm ${l.locale === lang ? "text-indigo-500" : "text-neutral-600 dark:text-neutral-400"} hover:bg-neutral-100 dark:hover:bg-neutral-800`}
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="https://github.com/tradalab/redishub"
            target="_blank"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <GithubIcon className="h-5 w-5"/>
          </Link>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5"/> : <MoonIcon className="h-5 w-5"/>}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <XIcon className="h-5 w-5"/> : <MenuIcon className="h-5 w-5"/>}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-neutral-200 dark:border-neutral-800 px-6 py-3 flex flex-col gap-1 text-sm font-medium">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  px-2 py-2 rounded-md transition-colors
                  ${isActive ? "text-indigo-500" : "text-neutral-600 dark:text-neutral-400"}
                  hover:text-indigo-500
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
