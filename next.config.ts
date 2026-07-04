import nextra from "nextra"

const withNextra = nextra({
  search: {codeblocks: false},
})

export default withNextra({
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  output: "standalone",
  productionBrowserSourceMaps: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.js"
    }
  }
})
