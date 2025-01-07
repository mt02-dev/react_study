# Tailwind CSS 
## 導入
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