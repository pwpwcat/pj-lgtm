# LGTM Web App 🐱🖼️

「Looks Good To Me!」画像を作成・共有できる、React + TypeScript + Vite 製のWebアプリ

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Bundler**: Vite
- **Styling**: CSS Modules
- **State Management**: useState
- **Lint / Format**: ESLint

---

## ✨ 主な機能(仮)

- 画像アップロードまたはURL入力からLGTM画像を作成  
- 「LGTM」テキストのフォント・色・サイズ・位置をカスタマイズ  
- 生成画像をSNSシェア / ダウンロード可能  
- ローカル保存による作成履歴の表示

---

## 🚀 Getting Started

### 1. リポジトリをクローン

```bash
git clone https://github.com/pwpwcat/pj-lgtm.git
cd pj-lgtm
```

### 2. パッケージをインストール

```bash
npm i
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

➡️ アプリは `http://localhost:5173` で確認できます

---

## 🧪 利用可能なスクリプト

| コマンド         | 内容                         |
|------------------|------------------------------|
| `dev`            | 開発サーバー起動             |
| `build`          | 本番ビルド                   |
| `preview`        | ビルド済みアプリの確認       |
| `lint`           | ESLint による構文チェック     |

---

## 📦 ディレクトリ構成

```
├── src
│   ├── app
│   │   ├── App.tsx
│   │   ├── AppRoutes.tsx
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   ├── Button.module.sass
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer
│   │   │   │   ├── Footer.module.sass
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header
│   │   │   │   ├── Header.module.sass
│   │   │   │   ├── Header.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── global.css
│   │   ├── layout
│   │   │   └── index.tsx
│   │   └── pages
│   │       ├── about
│   │       │   ├── index.module.sass
│   │       │   └── index.tsx
│   │       └── home
│   │           ├── index.module.sass
│   │           └── index.tsx
│   ├── assets
│   │   └── stylesheets
│   │       ├── _index.sass
│   │       ├── _mixins.sass
│   │       └── _variables.sass
│   └── vite-env.d.ts
├── .node-version
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📝 TODO / 今後の展望

- [ ] 何か書く

---

## 📄 ライセンス

MIT License

---