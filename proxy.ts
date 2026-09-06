import {NextResponse, type NextRequest} from "next/server"
import {proxy as nextraProxy} from "nextra/locales"

// nextra trusts the NEXT_LOCALE cookie without checking it against the locales
// this site has, so a cookie of `vi` redirects to /vi, which its own regex reads
// as "no locale", forever. Cookies are shared across ports on localhost, so a
// sibling app sets it for this site too.
const LOCALES: string[] = JSON.parse(process.env.NEXTRA_LOCALES ?? "[]")
const COOKIE = "NEXT_LOCALE"

export function proxy(request: NextRequest) {
  const cookie = request.cookies.get(COOKIE)?.value
  if (cookie && !LOCALES.includes(cookie)) {
    request.cookies.delete(COOKIE)
  }
  return nextraProxy(request) ?? NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_pagefind|favicon.ico|.*\\..*).*)"],
}
