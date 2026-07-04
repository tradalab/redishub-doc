import Link from "next/link"
import Image from "next/image"
import {getDictionary} from "../../../dictionaries"

export default async function Page({params}: { params: Promise<{ lang: string }> }) {
  const {lang} = await params
  const t = (await getDictionary(lang)).landing

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <section className="mb-24 grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            <span className="text-indigo-500 dark:text-indigo-400">{t.titleBrand}</span>
            <br />
            {t.titleRest}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
            {t.subtitle}
          </p>

          <div className="mt-8 flex gap-4">
            <Link href={`/${lang}/download`} className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500 transition">
              {t.downloadCta}
            </Link>

            <Link
              href={`/${lang}/docs/user-guide/web-mode`}
              className="rounded-lg border border-indigo-600 px-6 py-3 font-medium text-indigo-600 hover:bg-indigo-50 transition dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-950/30"
            >
              {t.deployCta}
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl md:h-96 md:w-96 dark:bg-indigo-400/10" />
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image src="/logo.png" alt="RedisHub Logo" width={500} height={500} className="w-full h-auto object-contain rounded-2xl shadow-xl" priority />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {t.features.map(f => (
          <div key={f.title} className="rounded-xl border p-6 bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
