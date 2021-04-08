
//https://medium.com/daniiable-in-the-workplace/como-hacer-un-login-con-javascript-y-html-sencillo-aff1dab6a6bf

function ValorNumerico(evt)

{
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}

function go(){

if (document.form.password.value=='1234'){ 
        setTimeout ("redireccionar()", 1500);
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
} 


function redireccionar(){
  window.location.href="sesiontona.html";
} 

function cerrarsesion(){
  window.location.href="PokemonBankTonatiu.html";
} 


$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

