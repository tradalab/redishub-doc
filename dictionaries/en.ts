const en = {
  nav: {
    home: "Home",
    documentation: "Documentation",
    download: "Download",
  },
  landing: {
    titleBrand: "RedisHub",
    titleRest: "Modern Redis Client for Desktop & Web",
    subtitle:
      "Browse, edit and monitor Redis, from a single server to Sentinel and Cluster. Runs as a native desktop app on Windows, macOS and Linux, or as a web service you deploy with Docker.",
    downloadCta: "Download Desktop",
    deployCta: "Deploy Web",
    features: [
      {title: "Key Explorer", desc: "Browse large keyspaces, filter with substring, glob and regex patterns saved as presets, and edit every type: strings, hashes, lists, sets, sorted sets, streams, RedisJSON and Graph."},
      {title: "Redis Modules", desc: "A dedicated RedisJSON editor, and a Cypher console for graph keys with completion and an interactive node-link view. Works with RedisGraph and FalkorDB."},
      {title: "Secure Connectivity", desc: "Reach servers through an SSH tunnel, TLS with client certificates (mTLS), or an HTTP or SOCKS5 proxy. Sentinel and Cluster are discovered automatically, with address mapping for nodes behind NAT."},
      {title: "Monitoring & Analysis", desc: "Stream live commands with Monitor, publish and subscribe with Pub/Sub, review the Slow Query log, and profile the keyspace by type, size, memory and TTL in Analysis."},
      {title: "Safe by Default", desc: "Read-only mode blocks every write command at the command layer, not just in the UI, and dangerous commands ask for confirmation before they run."},
      {title: "Organized Connections", desc: "Sort connections into groups, give them colors and tags, and see each one's live state: connecting, connected with its round-trip time, or unreachable."},
    ],
  },
  download: {
    title: "Download RedisHub",
    subtitle: "Download the latest version of RedisHub for your system.",
    latest: "Latest release",
    whatsNew: "what changed",
    checksums: "SHA-256 checksums",
    unsigned:
      "These builds are not code-signed. Windows SmartScreen warns before running the installer, and macOS needs right-click then Open the first time. Both are expected; check the download against the checksums above if you want certainty.",
    unavailable: "The release list could not be reached just now. Try again in a moment.",
    docsLink: "Read the documentation",
  },
}

export default en
