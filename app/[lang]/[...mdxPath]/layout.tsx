import "nextra-theme-docs/style.css"
import React from "react"
import {Layout, Navbar} from "nextra-theme-docs"
import {getPageMap} from "nextra/page-map"
import Image from "next/image"

const I18N = [
  {locale: "en", name: "English"},
  {locale: "ja", name: "日本語"},
]

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const {lang} = await params
  return (
    <Layout
      i18n={I18N}
      navbar={
        <Navbar
          logo={
            <div className="flex items-center gap-2">
              <Image src="/logo/favicon-96x96.png" alt="RedisHub Logo" width={32} height={32} className="object-contain"/>
              <span className="font-bold text-lg">
                <span className="text-indigo-500">Redis</span>Hub
              </span>
            </div>
          }
          projectLink={"https://github.com/tradalab/redishub"}
        />
      }
      docsRepositoryBase={"https://github.com/tradalab/redishub-doc/tree/main"}
      pageMap={await getPageMap(`/${lang}/docs`)}
      search={false}
    >
      {children}
    </Layout>
  )
}
