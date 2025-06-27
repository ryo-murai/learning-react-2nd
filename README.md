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


#### `faker` が非推奨になった

8.4.2章で登場

##### 書籍
```sh
$ npm i faker
```

```javascript
import faker from "faker";

// 中略

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));
```

##### 修正版
```sh
$ npm i @faker-js/faker
```

```javascript
import { faker } from '@faker-js/faker'

// 中略

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));
```

* 参考1 Faker.js公式
  - https://www.npmjs.com/package/@faker-js/faker
  - https://fakerjs.dev/guide/usage.html
* 参考2 非推奨の経緯
  - [colorsやfakerといったnpmパッケージの悪意あるコードが公開された事件について](https://qiita.com/SnykSec/items/23bcd8dc873239d2bece)


  #### `react-markdown` のAPI変更

  8.5.2章で登場

##### 書籍

```jsx
import ReactMarkdown from 'react-markdown';

// 中略

return <ReactMarkdown source={markdown} />;
```

##### 修正版

```jsx
import Markdown from 'react-markdown';

// 中略

return <Markdown>{markdown}</Markdown>;
```
