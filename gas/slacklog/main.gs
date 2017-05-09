function doGet() {


    // 「page.html」を読み込んで、利用可能な状態にする
    var html = HtmlService.createTemplateFromFile("index");
  
    // HTMLをレンダリング
    return html.evaluate();
}

function sample() {
 var response = UrlFetchApp.fetch("http://www.google.com/");
// Logger.log(response.getContentText());
// Logger.log(response);
}

function sample2() {
 var response = UrlFetchApp.getRequest("http://www.google.com/");
 for(i in response) {
   Logger.log(i + ": " + response[i]);
 }
 Logger.log(response.getContentText());
}
