# 3分で無料APIを作りJSONを返させる方法

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

## 対象としている人

Ajaxで叩くAPIを用意してあげようとしている新人教育中の優しい先輩

.