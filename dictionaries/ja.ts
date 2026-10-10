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
      "単一サーバーから Sentinel、Cluster まで、Redis のデータを閲覧・編集・監視できます。Windows、macOS、Linux のネイティブデスクトップアプリとして、または Docker でデプロイする Web サービスとして動作します。",
    downloadCta: "デスクトップ版をダウンロード",
    deployCta: "Web でデプロイ",
    features: [
      {title: "Key Explorer", desc: "大規模なキースペースを閲覧し、部分一致・glob・正規表現のパターンで絞り込み、プリセットとして保存できます。String、Hash、List、Set、Sorted Set、Stream、RedisJSON、Graph のすべての型を編集できます。"},
      {title: "Redis モジュール", desc: "RedisJSON 専用エディタと、補完付きの Cypher コンソールで Graph キーを操作し、結果をインタラクティブなノードリンク図で表示します。RedisGraph と FalkorDB に対応しています。"},
      {title: "セキュアな接続", desc: "SSH トンネル、クライアント証明書付き TLS (mTLS)、HTTP または SOCKS5 プロキシ経由で接続できます。Sentinel と Cluster はノードを自動検出し、NAT 越しのノードにはアドレスマッピングを使えます。"},
      {title: "監視と分析", desc: "Monitor でコマンドをリアルタイムに表示し、Pub/Sub でメッセージを送受信し、Slow Query ログを確認できます。Analysis ではキースペースを型・サイズ・メモリ・TTL ごとに分析します。"},
      {title: "デフォルトで安全", desc: "読み取り専用モードは UI だけでなくコマンド層ですべての書き込みコマンドをブロックします。危険なコマンドは実行前に確認を求めます。"},
      {title: "整理された接続", desc: "接続をグループに分け、色とタグを付けられます。接続中、接続済み (往復時間つき)、到達不能といった各接続のライブ状態がひと目でわかります。"},
    ],
  },
  download: {
    title: "RedisHub をダウンロード",
    subtitle: "お使いのシステム向けの最新版 RedisHub をダウンロードします。",
    latest: "最新リリース",
    whatsNew: "変更点",
    checksums: "SHA-256 チェックサム",
    unsigned:
      "これらのビルドはコード署名されていません。Windows では SmartScreen が警告し、macOS では初回のみ右クリックから「開く」が必要です。どちらも想定どおりの動作です。確認したい場合は上のチェックサムと照合してください。",
    unavailable: "リリース一覧を取得できませんでした。しばらくしてからもう一度お試しください。",
    docsLink: "ドキュメントを読む",
  },
}

export default ja
