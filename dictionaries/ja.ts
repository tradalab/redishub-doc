import type {Dictionary} from "./index"

const ja: Dictionary = {
  nav: {
    home: "ホーム",
    documentation: "ドキュメント",
    download: "ダウンロード",
  },
  landing: {
    titleBrand: "RedisHub",
    titleRest: "デスクトップ & Web 向けのモダンな Redis クライアント",
    subtitle:
      "Redis エコシステムのためのプロフェッショナルで高性能なコマンドセンター。ネイティブのデスクトップアプリ、または集中管理型の Web サービスとして利用できます。",
    downloadCta: "デスクトップ版をダウンロード",
    deployCta: "Web でデプロイ",
    features: [
      {title: "Redis に最適化", desc: "Redis のデータ探索と管理のために設計された、スムーズで直感的なワークフロー。"},
      {title: "モダンな UI 体験", desc: "現代的な UI パターンで構築された、クリーンで洗練されたレスポンシブなインターフェース。"},
      {title: "ハイブリッド展開", desc: "Windows、macOS、Linux 上でネイティブアプリとして実行、または Docker で Web サービスとして展開。"},
      {title: "キーエクスプローラー", desc: "構造化されたナビゲーションとリアルタイム更新で、キーを閲覧・表示・編集。"},
      {title: "リアルタイム監視", desc: "Monitor ツールでライブコマンドをストリーミングし、サーバーの状態を一目で把握。"},
      {title: "開発者フレンドリー", desc: "シンプルで予測可能、生産性と明快さを重視して構築。"},
    ],
  },
  download: {
    title: "RedisHub をダウンロード",
    subtitle: "お使いのシステム向けの最新版 RedisHub をダウンロードします。",
    latest: "最新リリース",
    whatsNew: "変更点",
    checksums: "SHA-256 チェックサム",
    unsigned:
      "これらのビルドはまだコード署名されていません。Windows では SmartScreen が警告し、macOS では初回のみ右クリックから「開く」が必要です。どちらも想定どおりの動作です。確認したい場合は上のチェックサムと照合してください。",
    unavailable: "リリース一覧を取得できませんでした。しばらくしてからもう一度お試しください。",
    docsLink: "ドキュメントを読む",
  },
}

export default ja
