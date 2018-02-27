> Vue.jsでクリックイベントを２つ持たせる方法

# Vue.jsでクリックイベントを２つ持たせる方法

単純にクリックイベントに２つ書けばいけます。

```javascript
v-on:click="click_1(); click_2()"
@click="click_1(); click_2()"
```

あんまり使わないとは思いますが、検索で出てこなかったので書いておきます。

# その他

## 動作サンプル
https://ykhirao.github.io/qiita/click_vuejs/

## ソースコード

[最新版](https://github.com/ykhirao/qiita/blob/master/click_vuejs/index.html)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://unpkg.com/vue@2.5.3/dist/vue.js"></script>
  <title>Vue.js</title>
  <style>
    p {
      padding: 2em;
      width: 200px;
      border: solid;
    }
    p:hover {
      border-color: #6C9BD2;
      color: #6C9BD2;
    }
  </style>
</head>
<body>
  <div id='demo'>
    <p v-on:click="click_1(); click_2()">クリックイベントはこちら</p>
    <ul v-for="text in list">
      <li>{{text}}</li>
    </ul>
  </div>
  <script>
    new Vue({
      el: '#demo',
      data: {
        list: []
      },
      methods: {
        click_1: function() {
          this.list.push("by click 1")
        },
        click_2: function() {
          this.list.push("by click 2")
        }
      }
    })
  </script>
</body>
</html>

```



