# タイトル

v-forでネストする

# v-forをネストするには同じ名前を使うだけ

同じ名前を使ってやればいいので簡単。

```js
<div v-for='category in categories'>
  <div v-for='blog in category'>
    <div>{{blog.title}}</div>
    <div>{{blog.img}}</div>
  </div>
</div>
```


# はじめに




# スキルセット



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
