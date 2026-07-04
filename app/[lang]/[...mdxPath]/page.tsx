import {generateStaticParamsFor, importPage} from "nextra/pages"
import {useMDXComponents as getMDXComponents} from "../../../mdx-components"

export const generateStaticParams = generateStaticParamsFor("mdxPath")

export async function generateMetadata(props: {
  params: Promise<{ lang: string; mdxPath: string[] }>
}) {
  const {lang, mdxPath} = await props.params
  const {metadata} = await importPage(mdxPath, lang)
  const path = mdxPath.join("/")
  return {
    ...metadata,
    alternates: {
      canonical: `/${lang}/${path}`,
      languages: {
        en: `/en/${path}`,
        ja: `/ja/${path}`,
      },
    },
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: {
  params: Promise<{ lang: string; mdxPath: string[] }>
}) {
  const params = await props.params
  const {lang, mdxPath} = params
  const result = await importPage(mdxPath, lang)
  const {default: MDXContent, toc, metadata} = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params}/>
    </Wrapper>
  )
}
