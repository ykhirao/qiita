# JSONを返す無料APIを3分で作る方法

## はじめに

この記事の読書対象者は以下のようなエンジニアです。

  * Ajaxで叩くAPIを用意してあげようとしている新人教育中の優しい先輩
  * なんかのサンプルアプリを作っているときのモックとして

## API作成

* 実際に通信する
  * Google Apps Script (GAS)で作成する
  * MyJson (既存のWebサービス)でJsonを登録する
* ローカルサーバーを立てる
  * json-server（npmで導入する）

### Google Apps Script(GAS)を使う

以下のコードをGASに貼り付けて、「公開」「ウェブアプリケーションとして導入」を押して発行されたURLを叩くと文字列のJSONが返ってくる。

```js
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({'name': 'Qiita'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

![スクリーンショット](https://qiita-image-store.s3.amazonaws.com/0/112929/24a66c74-687a-b18a-017f-5aa59d0e73b6.jpeg)

参考： <https://developers.google.com/apps-script/guides/content#serving_json_from_scripts>

GetメソッドにtokenをつけてたらJsonを返すとかそういう処理もできるのでオススメ！

### MyJSONというWebサービスを使う

無料Webサービスではこれが簡単かと思います。<http://myjson.com/>

```shell
curl https://api.myjson.com/bins/f36ox
# {"k":"v"}
```

Jsonがあれば5秒で作れるのでオススメ！

### localに[json-server](https://github.com/typicode/json-server)を立てて使う

Node.js等を使える人はjson-serverがおすすめみたいです！

参考：[JSON Serverを使って手っ取り早くWebAPIのモックアップを作る](https://qiita.com/futoase/items/2859a60c8b240da70572)

```
npm install -g json-server
```

https://qiita.com/futoase/items/2859a60c8b240da70572

npmインストールとか必要だけどAPIモックにするのにはすごく便利なのでオススメ！

## 終わりに

AjaxとかAPIとかよくわかってなかった時期がありました。それくらいのレベルの人に教えるときに先輩エンジニアが「API作っといたのでこれ自由に叩いていいよ」って感じの世界素敵ですね！！

それでは素敵なAPIライフを！！
