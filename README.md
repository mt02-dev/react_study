# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Tailwind CSS 導入


```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

```

```postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

```tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 使用するファイルのパスを指定
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

メインとなるCSSファイルに以下記載
```main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## dark mode
### 事前準備
ユーザーのシステムの設定に基づいてダークモードが自動的に適用される。
```tailwind.config.js
module.exports = {
  darkMode: "media",
  //その他の設定
};
```

darkというクラスを最上位のの要素に追加(例えばbody)することでダークモードが有効
```tailwind.config.js
module.exports = {
  darkMode: "class",
  //その他の設定
};
```

## React Hooks
React コンポーネントが画面に表示されてから、消えるまでの一連の過程のことをライフサイクルと呼ぶ
コンポーネントが画面に表示されるとき、表示自体以外の追加作業を行うためにuseEffectが利用される


### useEffect
#### 副作用とは
Reactのコンポーネントの主な仕事(画面に何かを表示すること)以外の追加の作業や影響のことを指す
→インターネットからのデータの取得、ユーザーの操作に応じた画面の変更、リアルタイムでの情報更新など
　コンポーネントのメインの機能表示とは別に行う作業のこと

#### クリーンアップ関数
画面からコンポーネントが消えた時に実行される関数
→ タイマーやイベントリスナーなどの処理は使い終わったらそれを止めるクリーンアップ関数を書くことでメモリの無駄づかいを防げる
→ クリーンアップ関数は全ての実装に必要なわけではない
→ 継続的な処理かどうかが1つの判断基準となる
1. コンポーネントのアンマウント時
2. 依存配列の値が変更されて、effectが再実行される前
3. 次のレンダリングで新しいeffectが実行される前
```ts
useEffect(() => {
  // 副作用の処理
  return () =>{
    // クリーンアップ関数
  }
})


```