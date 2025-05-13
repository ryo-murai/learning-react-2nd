# 書籍: Reactハンズオンラーニング 第2版 やってみた

![img](https://www.oreilly.co.jp/books/images/picture_large978-4-87311-938-0.jpeg)

https://www.oreilly.co.jp/books/9784873119380/


## やってみて違うコードになったところメモ

### 5章
#### `react-dom`の`render`は React18から　`react-dom/client`の `createRoot`に置き換えられた

書籍のコード
```javascript
import { render } from "react-dom";

render(<Menu recipes={data} />, document.getElementById("root"));
```

修正したコード [index.js](chap5/recipes-app/src/index.js)
```javascript
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <Menu recipes={data} />
);
```

出典
https://ja.react.dev/blog/2022/03/08/react-18-upgrade-guide

※ 次章以降も同様に `createRoot`に読み替え

#### `create-react-app`が非推奨になった

出典
https://github.com/facebook/create-react-app/pull/17003


代替として６章では
`npm create vite@latest xxx-app` を実行

なお、書籍では *.js に対してJSXトランスパイルを設定する前提だが viteだと *.jsxでないといけない。なので JSXを含むファイルは拡張子を .jsx に読み替えて実施




