$('#btn').click(function(){
    $('#input').value();
});

var input = [];
var konami = [78, 73, 74, 73, 13];

$(window).keyup(function(e){
    console.log(e.keyCode);
    input.push(e.keyCode);

    if (input.toString().indexOf(konami) >= 0)
    {
      alert("OK");
      input = [];
    }
    if (e.keyCode == 13) {
        input = [];
    }
});
$('#input').keyup(function(e){
    console.log(e.keyCode);
});