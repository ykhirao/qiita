# タイトル

Vue.jsでv-forをネストする

# v-forをnestするには同じ名前を使うだけ

同じ変数名を使ってやればいいだけみたいです。

```html
<div v-for='category in categories'>
  <div v-for='blog in category.blogs'>
    <div>{{blog.title}}</div>
    <div>{{blog.text}}</div>
  </div>
</div>

```
これだけです！

ちゃんとした完成形は [JSFiddle](https://jsfiddle.net/de6ohg2z/) においてあるので動作はそちらを確認ください。htmlとJSは以下にも書いているのでそちらでも確認できます。

## コード

```html
<script src="https://unpkg.com/vue@2.5.3/dist/vue.js"></script>

<div id='demo'>
  <template v-for='category in categories'>
    <div v-if="category.blogs.length > 0">
      <h2>{{category.name}}</h2>
      <ul>
        <li v-for='blog in category.blogs'>{{blog.title}} - {{blog.img}}</li>
      </ul>
    </div>
  </template>
</div>
```

```javascript
new Vue({
  el: '#demo',
  data: {
    categories: [
      { 
        name: 'カテゴリ1',
        blogs: [
          {
            title: "タイトル1",
            img: 'https://goo.gl/hvjbc4'
          },
          {
            title: "タイトル2",
            img: 'https://goo.gl/hvjbc4'
          },
          {
            title: "タイトル3",
            img: 'https://goo.gl/hvjbc4'
          }
        ]
      },
      { 
        name: 'カテゴリ2',
        blogs: []
      },
      { 
        name: 'カテゴリ3',
        blogs: [
          {
            title: "タイトル1",
            img: 'https://goo.gl/hvjbc4'
          },
          {
            title: "タイトル2",
            img: 'https://goo.gl/hvjbc4'
          }
        ]
      }
    ]
  }
})
```

## 出力結果

> データ：カテゴリ(複数、0~)ごとにブログ(複数、0~3)をもたせています。

- カテゴリ1
  - タイトル1 - https://goo.gl/hvjbc4
  - タイトル2 - https://goo.gl/hvjbc4
  - タイトル3 - https://goo.gl/hvjbc4
- カテゴリ2(ブログ記事がなければカテゴリも非表示)
- カテゴリ3
  - タイトル1 - https://goo.gl/hvjbc4
  - タイトル2 - https://goo.gl/hvjbc4

こんな感じになるはずです。

# なぜこの記事を書いたか

弊社ではCMSを開発しているのですが、そこでかなりの時間ハマってしまったので共有しておこうと思い記事を書かせていただきました。

普段は、CMS( https://start.eat.auto/ )の機能開発をしていて、Vue.js, jQuery, Ruby on Railsとかを使っているWebエンジニア1年目のペーペーです。これ以下はだらだらと書くので読む必要ないと思います！

## 検索編1 [ v-for ネスト ]でぐぐった

まずこれがあかんかったです。日本語で情報を検索しようとしました。

```js

var doc = document.querySelectorAll('h3 > a');
var tmp = "";
doc.forEach(function(val,index){
   // tmp += index + '. ' + val.innerHTML + "\n";
   tmp += `${index+1}. ${val.innerHTML} \n`;
});
console.log(tmp);

```

1. リストレンダリング — Vue.js 
2. 体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita 
3. vue.js - Nested arrays of objects and v-for - Stack Overflow 
4. Vue.jsの入れ子のComponentで {{ Hoge.fuga }} を渡したいだけの人生 ... 
5. 【Vue.js】v-forでリスト表示してみる – Snaplog 
6. Vue.js で el がネストしてる場合の処理 · GitHub 
7. Vue.jsでv-repeatをネストするには - console.lealog(); 
8. v-forとv-ifでリストレンダリング制御したいと思っていた俺がアホだった ... 
9. Vue.js で文字やリストを動的に表示する | Cubix 
10. Vue.jsメモ 

唯一それっぽい記事がでてきたのは[体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita](https://qiita.com/hosomichi/items/6f22ebd15bcc0afe1ab0)でしたがv-repeatのネストでvue.js 0.12の環境ではこれが正解みたいです。

これは同じところにハマるひとのためにもQiitaに書かなきゃねと思って今回の記事にいたります。

## 公式ドキュメントを漁る

ここからが長かったのですが、公式ドキュメントを読みこんだり、v-repeatは本当に動かないのかなと試したり、配列のlengthを取得してぐるぐるしようとしたり、かなりの労力がごにょごにょし化していきました…

公式ドキュメントの読みこみついでにタイポ修正の [PR](https://github.com/vuejs/jp.vuejs.org/pull/333) を、前職の同僚 @re-fort に手伝ってもらいながら出したりしました。初めてのOSS系のPRで緊張しながら出したら1分ほどで @kazupon さんにマージされたので「平日の昼間にはやっ」と思ったのですが、こちらも仕事中にPR出したのでそんなものかもしれないですね。

## 検索編2 [ v-for nest ]でぐぐった

1. vue.js - Nested arrays of objects and v-for - Stack Overflow 
2. vuejs2 - Vue.js v-for nested in Table - Stack Overflow 
3. リストレンダリング — Vue.js 
4. Nested v-for question... - Laracasts 
5. v-forとv-ifでリストレンダリング制御したいと思っていた俺がアホだった。 - Qiita 
6. Vue.jsの入れ子のComponentで {{ Hoge.fuga }} を渡したいだけの人生 ... 
7. 体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita 
8. Vue.jsでv-repeatをネストするには - console.lealog(); 
9. v-ref inside v-for is not defined · Issue #2044 · vuejs/vue · GitHub 
10. How do I create a nested v-for · Issue #3465 · vuejs/vue · GitHub 

日本語は10件に出てこなかったのに、英語だと一番上にでてきた。。

[Nested arrays of objects and v-for](https://stackoverflow.com/questions/37534249/nested-arrays-of-objects-and-v-for)

これが今回の教訓ですね。英語で調べたら一発ででてきました。  
最初から英語で検索すればよかったと思います。英語嫌いなひともぜひ調べ物は英語で。

調べ物は

1. 日本語で検索する
1. ドキュメント読む
1. 英語で検索する

の３つをちゃんと全部やりましょう。

## 最終的な微修正

v-forでネストできるとわかったあとはまあ問題もなく順調にコーディングが終わり、最終的には以下のような感じに落ち着きました。

```html
<div id='demo'>
  <div v-for='category in categories'>
    <h2>{{ category.name }}</h2>
    <ul v-for='blog in category.blogs'>
      <li>{{blog.title}} - {{blog.img}}</li>
    </ul>
  </div>
</div>

```

って書くとブログを持っていないカテゴリも表示してしまうので`<template>`と`v-if`でなんとなく制御してみました。

```html
<script src="https://unpkg.com/vue@2.5.3/dist/vue.js"></script>

<div id='demo'>
  <template v-for='category in categories'>
    <div v-if="category.blogs.length > 0">
      <h2>{{category.name}}</h2>
      <ul>
        <li v-for='blog in category.blogs'>{{blog.title}} - {{blog.img}}</li>
      </ul>
    </div>
  </template>
</div>

```

## まとめ
1. v-forはネストできる
1. 検索はちゃんと英語でも調べる
1. Vue.jsの日本語訳のコミッターは常に募集しているらしいので[Vue.jsのSlack](http://vuejs-jp-slackin.herokuapp.com/)とかで聞いてみるといいかもですね。






