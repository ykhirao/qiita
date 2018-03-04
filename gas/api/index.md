# 3分でJSONを返す無料APIを作る方法

## まとめ

> Google Apps Script(GAS)を使う

以下のコードをGASに貼り付けて、「公開」「ウェブアプリケーションとして導入」を押して発行されたURLを叩くと文字列のJSONが返ってくる。

```js
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({'name': 'Qiita'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

![スクリーンショット](./ss.jpg)

参考： https://developers.google.com/apps-script/guides/content#serving_json_from_scripts

## 対象としている人

Ajaxで叩くAPIを用意してあげようとしている新人教育中の優しい先輩

## MyJSONを使う

無料Webサービスではこれが簡単かと思います。
http://myjson.com/

```shell
curl https://api.myjson.com/bins/f36ox
# {"k":"v"}
```

## 終わりに

AjaxとかAPIとかよくわかってなかった時期がありました。それくらいのレベルの人に教えるときに先輩エンジニアがAPI作っといたのでこれ自由に叩いていいよっていってくれる世界素敵ですね！！
