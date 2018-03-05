# JSONを返す無料APIを3分で作る方法

## はじめに

この記事の読書対象者は以下のようなエンジニアです。

  * Ajaxで叩くAPIを用意してあげようとしている新人教育中の優しい先輩
  * なんかのサンプルアプリを作っているときのモックとして

## API作成

Google Apps Script(GAS)を使う方法と既存のWebサービスを使う方法があるので、この2種類を紹介しようと思います。

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

### MyJSONというWebサービスを使う

無料Webサービスではこれが簡単かと思います。<http://myjson.com/>

```shell
curl https://api.myjson.com/bins/f36ox
# {"k":"v"}
```

## 終わりに

AjaxとかAPIとかよくわかってなかった時期がありました。それくらいのレベルの人に教えるときに先輩エンジニアが「API作っといたのでこれ自由に叩いていいよ」って感じの世界素敵ですね！！

それでは素敵なGASライフを！！
