var url = 'https://api.myjson.com/bins/18cx3t';

json = JSON.parse('{"news":{"kyoto":{"weather":"rainy"},"tokyo":{"weather":"Sunny"}}}');
// console.log (json)

(function(){
  console.log("fetch")
  fetch( url )
  .then( function( data ) {
    return data.json();
  })
  .then( function( json ) {
    console.log( json.news.tokyo );
  })
})();

