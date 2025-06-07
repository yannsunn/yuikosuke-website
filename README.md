# 油井宏介 ファイナンシャルプランナー公式サイト

Next.js + TypeScript + App Routerで構築されたファイナンシャルプランナー油井宏介の公式ウェブサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules + Global CSS
- **デプロイ**: Vercel
- **静的サイト生成**: Next.js Static Export

## 📁 プロジェクト構造

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (/)
│   ├── about/             # About page (/about)
│   ├── services/          # Services page (/services)
│   ├── contact/           # Contact page (/contact)
│   ├── privacy/           # Privacy page (/privacy)
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── styles/               # Page-specific styles
    ├── index.css
    ├── about.css
    ├── services.css
    ├── contact.css
    └── privacy.css

public/                   # Static assets
├── yuikosuke.jpg        # Profile image
├── robots.txt           # SEO
└── sitemap.xml          # SEO
```

## 🛠️ 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 静的サイト出力
npm run export

# リント
npm run lint
```

## 🌐 ページ構成

- **`/`** - トップページ（サービス概要、メリット、お客様の声など）
- **`/about`** - プロフィールページ（経歴、資格、会社情報など）
- **`/services`** - サービス詳細ページ（各種金融サービスの説明）
- **`/contact`** - お問い合わせページ（LINE・メール連絡先）
- **`/privacy`** - プライバシーポリシー

## ✨ 主な機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **フェードインアニメーション**: スクロール連動のスムーズなアニメーション
- **インタラクティブ要素**: ホバーエフェクト、クリックアニメーション
- **SEO最適化**: メタタグ、構造化データ、サイトマップ
- **アクセシビリティ**: セマンティックHTML、キーボードナビゲーション対応

## 🚀 デプロイ

Vercelで自動デプロイ設定済み。`main`ブランチへのプッシュで自動的にデプロイされます。

## 📝 編集について

このNext.jsプロジェクトは従来のHTMLサイトから移行されており、以下の利点があります：

1. **コンポーネント化**: 再利用可能なHeader/Footerコンポーネント
2. **型安全性**: TypeScriptによる型チェック
3. **最適化**: Next.jsの自動最適化機能
4. **保守性**: 構造化されたコードベース
5. **拡張性**: 新機能の追加が容易

## 📞 お問い合わせ

- **Email**: kosuke.yui@brightreach.co.jp
- **Tel**: 03-6222-7277
- **住所**: 〒104-0043 東京都中央区湊1-8-11 八丁堀エイトビル6階