//MENU//
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// Ir direto para o conteúdo
$('#irDireto').click(function(e){
    e.preventDefault();

    $('irDireto').focus();
}); 

$('#irDireto2').click(function(e){
    e.preventDefault();

    $('irDireto2').focus();
});




