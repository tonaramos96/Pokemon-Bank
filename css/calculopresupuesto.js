// Dadas la division que contiene todas las pestañas y la de la pestaña que se 
// quiere mostrar, la funcion oculta todas las pestañas a excepcion de esa.
function cambiarPestanna(pestannas,pestanna) {
    
    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);
    
    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);
    
    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo 
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el  
        // borde superior del contenido que esta juesto debajo y se vea de este 
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background','rgb(0,102,113)');
        $(pestanna).css('padding-bottom','2px'); 
    });

}

function guardar(){
   
    var _nom = document.getElementById("nomb").value;
    var _cat = document.getElementById("cat").value;
    var _precio = document.getElementById("precio").value;
    var _stock = document.getElementById("stock").value;
    // if(_nom.trim()==''){
    //     alert("Ingrese nombre del producto");
    // }
    // if(_cat.trim()==''){
    //     alert("Ingrese categoria del producto");

    // }
    // if(_precio.trim()==''){
    //     alert("Ingrese precio del producto");
        
    // }
    // if(_stock.trim()==''){
    //     alert("Ingrese stock del producto");
        
    // }

    var fila="<tr><td>"+_nom+"</td><td>"+_cat+"</td><td>"+_precio+"</td><td>"+_stock+"</td></tr>";

    document.getElementById("tablita").innerHTML = fila;
}