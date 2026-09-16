import Link from "next/link"
import {getDictionary} from "../../../../dictionaries"

const RELEASES = "https://api.github.com/repos/tradalab/redishub/releases/latest"

type Release = {
  tag_name: string
  assets: {name: string; browser_download_url: string}[]
}

// Only the installers. A release also carries a .sig per artifact and the
// SHA256SUMS file, and offering those as downloads would be offering a reader
// something they cannot run.
const INSTALLER = /\.(msi|dmg|AppImage)$/
const OS_LABEL: [RegExp, string][] = [
  [/-windows-/, "Windows"],
  [/-macos-/, "macOS"],
  [/-linux-/, "Linux"],
]

function installers(release: Release) {
  return (release.assets ?? [])
    .filter(a => INSTALLER.test(a.name))
    .map(a => ({
      url: a.browser_download_url,
      file: a.name,
      os: OS_LABEL.find(([re]) => re.test(a.name))?.[1] ?? a.name,
    }))
    .sort((x, y) => OS_LABEL.findIndex(([, l]) => l === x.os) - OS_LABEL.findIndex(([, l]) => l === y.os))
}

async function loadRelease(): Promise<Release | null> {
  try {
    const res = await fetch(RELEASES, {
      next: {revalidate: 600},
      headers: {Accept: "application/vnd.github+json"},
    })
    if (!res.ok) return null
    return (await res.json()) as Release
  } catch {
    // GitHub being unreachable must not take the page down with it.
    return null
  }
}

export default async function Page({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params
  const t = (await getDictionary(lang)).download
  const release = await loadRelease()
  // A reachable release that lists no installer is as useless to a visitor as an
  // unreachable one, so it takes the same message rather than an empty list.
  const builds = release ? installers(release) : []
  const version = release?.tag_name?.replace(/^v/, "") ?? ""
  const checksums = release?.assets?.find(a => a.name === "SHA256SUMS")?.browser_download_url

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">{t.title}</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{t.subtitle}</p>

      {builds.length > 0 ? (
        <>
          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
            {t.latest} <span className="font-semibold text-neutral-900 dark:text-neutral-100">{version}</span>
            {" · "}
            <Link href={`/${lang}/docs/changelog`} className="underline underline-offset-4 hover:text-brand">
              {t.whatsNew}
            </Link>
          </p>

          <ul className="mt-8 space-y-3">
            {builds.map(b => (
              <li key={b.url}>
                <a
                  href={b.url}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-5 py-4 transition hover:border-brand dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{b.os}</span>
                  <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">{b.file}</span>
                </a>
              </li>
            ))}
          </ul>

          {checksums ? (
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-500">
              <a href={checksums} className="underline underline-offset-4 hover:text-brand">
                {t.checksums}
              </a>
            </p>
          ) : null}

          <p className="mt-10 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200">
            {t.unsigned}
          </p>
        </>
      ) : (
        <p className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          {t.unavailable}
        </p>
      )}

      <p className="mt-10 text-sm text-neutral-500 dark:text-neutral-500">
        <Link href={`/${lang}/docs`} className="underline underline-offset-4 hover:text-brand">
          {t.docsLink}
        </Link>
      </p>
    </main>
  )
}
