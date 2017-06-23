function doGet(e) { //アクセスが来たら実行します

  if(!e.parameter.action) { //actionが指定されてない場合
    return createContent(e.parameter.callback , {error :'action is required '});
  }

  switch(e.parameter.action) { //actionによって振り分け
    case 'nullpo':
      return createContent(e.parameter.callback , {response : "GA"});
    case 'hoge':
      return createContent(e.parameter.callback , {response : "HUGA"});
    default : 
      return createContent(e.parameter.callback , {error : "unsupported operation"});
   } 
}

function createContent(callback , returnObject ) { //JSONまたはJSONPの文字列を返します
  if(callback) {
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(returnObject) + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return ContentService.createTextOutput(JSON.stringify( JSON.stringify(returnObject))).setMimeType(ContentService.MimeType.JSON);
  }  
}
