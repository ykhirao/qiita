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

}
