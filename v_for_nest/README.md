# タイトル

Vue.jsでv-forをネストする

# v-forをnestするために

## やりたいこと

```html

<div v-for>
  <div v-for>
    <div v-for>
      v-forをネストしてデータをすべて出力したい。
    </div>
  </div>
</div>

````

## 今回扱うデータ

ブログのカテゴリごとに記事を出力する。

> データ：カテゴリ(数：0以上)ごとにブログ(数：0~3)をもたせています。
> ブログにはタイトルと画像URLを持たせています。

![img](https://raw.githubusercontent.com/ykhirao/qiita/master/v_for_nest/assets/ss%202017-12-11%2017.41.52.jpg)

## v-forをnestするには同じ名前を使うだけ

同じ変数名を使ってやればデータにアクセスできるです。

```html
<div v-for='category in categories'>
  <div v-for='blog in category.blogs'>
    <div>{{blog.title}}</div>
    <div>{{blog.text}}</div>
  </div>
</div>
```

## 完成形
 
 [JSFiddle](https://jsfiddle.net/de6ohg2z/) においてあるので動作はそちらを確認ください。
 
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

## コード

htmlとJSは以下にも書いているのでそちらでも確認できます。

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


# いろいろ試した話

弊社ではCMSを開発しているのですが、そこでかなりの時間ハマってしまったので共有しておこうと思い記事を書かせていただきました。

普段は、CMS( https://start.eat.auto/ )の機能開発をしていて、Vue.js, jQuery, Ruby on Railsとかを使っているWebエンジニア1年目のペーペーです。これ以下はだらだらと書くので読む必要はないと思います！

## 検索編1 [ v-for ネスト ]でぐぐった

私のドハマリ日のまずはじめはGoogle先生に頼ろうとして、日本語での検索からスタートしました。

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
1. 体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita 
1. vue.js - Nested arrays of objects and v-for - Stack Overflow 
1. Vue.jsの入れ子のComponentで {{ Hoge.fuga }} を渡したいだけの人生 
1. 【Vue.js】v-forでリスト表示してみる – Snaplog 
1. Vue.js で el がネストしてる場合の処理 · GitHub 
1. Vue.jsでv-repeatをネストするには - console.lealog(); 
1. v-forとv-ifでリストレンダリング制御したいと思っていた俺がアホだった 
1. Vue.js で文字やリストを動的に表示する | Cubix 
1. Vue.jsメモ 

唯一それっぽい記事がでてきたのは[体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita](https://qiita.com/hosomichi/items/6f22ebd15bcc0afe1ab0)でしたがv-repeatのネストでvue.jsのversion0.12の環境ではこれが正解みたいです。

そう。日本語で情報がまったく出てこなかったのです。
これは同じところにハマるひとのためにもQiitaに書かなきゃねと思って今回の記事を書いてます〜

## 公式ドキュメントを漁る

ここからが長かったのですが、公式ドキュメントを読みこんだり、v-repeatは本当に動かないのかなと試したり、配列のlengthを取得してぐるぐるしようとしたりしてました。

公式ドキュメントの読みこみついでにタイポ修正の [PR](https://github.com/vuejs/jp.vuejs.org/pull/333) を、前職の同僚 [@ re-fort](https://qiita.com/re-fort) に手伝ってもらいながら出したりしました。初めてのOSS系のPRで緊張しながら出したら1分ほどで [@ kazupon](https://qiita.com/kazupon) さんにマージされたので「平日の昼間にはやっ」と思ったのですが、こちらも仕事中にPR出したのでそんなものかもしれないですね。

## 検索編2 [ v-for nest ]でぐぐった

1. vue.js - Nested arrays of objects and v-for - Stack Overflow 
1. vuejs2 - Vue.js v-for nested in Table - Stack Overflow 
1. リストレンダリング — Vue.js 
1. Nested v-for question - Laracasts 
1. v-forとv-ifでリストレンダリング制御したいと思っていた俺がアホだった。 - Qiita 
1. Vue.jsの入れ子のComponentで {{ Hoge.fuga }} を渡したいだけの人生 
1. 体で覚えるVue.js - v-repeatネスト編 〜 JSおくのほそ道 #027 - Qiita 
1. Vue.jsでv-repeatをネストするには - console.lealog(); 
1. v-ref inside v-for is not defined · Issue #2044 · vuejs/vue · GitHub 
1. How do I create a nested v-for · Issue #3465 · vuejs/vue · GitHub 

日本語は10件に出てこなかったのに、英語だと一番上にでてきた。。
ありがとうStack Overflow。

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

上記のように書くとブログを持っていないカテゴリも表示してしまうので`<template>`と`v-if`でなんとなく制御してみました。

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






