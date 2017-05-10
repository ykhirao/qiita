function doGet() {


  // 「page.html」を読み込んで、利用可能な状態にする
  var html = HtmlService.createTemplateFromFile("index");

  // HTMLをレンダリング
  return html.evaluate();
}

function sample() {
  var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
  output.setTitle("test");
  Logger.log(output.getTitle());
}

function now(){

  function setFormat(symbol, arr){
    var fin = arr.length;
    var text = "";
    for (var i = 0; i < fin; i++) {
      tmp = ("0" + arr[i]).slice(-2); // 1ケタだと0を付ける
      text += tmp;
      if (i == fin - 1) break;
      text += symbol;
    }
    return text;
  }

  var now = new Date();
  var y = now.getFullYear();
  var M = now.getMonth()+1;
  var week = now.getDay();
  var d = now.getDate();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var WEEK = new Array("日","月","火","水","木","金","土");

  var ymd = setFormat("/", [y, M, d]);
  var hms =setFormat(":", [h, m, s]);
    Logger.log(ymd + " " + hms);
  return ymd + " " + hms

}
