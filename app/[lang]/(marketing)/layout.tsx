import React from "react"
import {getDictionary} from "../../../dictionaries"
import {Header} from "./header"

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const {lang} = await params
  const dict = await getDictionary(lang)
  return (
    <>
      <Header lang={lang} nav={dict.nav}/>
      {children}
    </>
  )
}
