function doGet(e) {
  return createReturnJson({'name': 'Yuki'})
}

function createReturnJson(json) {
  var result = ContentService.createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
  return result;
}

function getJsonTest() {
  var url = "https://script.google.com/macros/s/AKfycbzaFXoAR309wWE1ehXPQLPQVcyyo4b3FH3LKsDBw7CkfaXTVufx/exec";
  var json = getJson(url);
  Logger.log(json); //参加者をログに出すよ
}

function getJson(url) {
  var response = UrlFetchApp.fetch(url);
  Logger.log(response);
  var json = JSON.parse(response.getContentText());
  return json;
}