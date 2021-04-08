function guardar(){
   
    var _nom = document.getElementById("nomb").value;
    var _cat = document.getElementById("cat").value;
    var _precio = document.getElementById("precio").value;
    

    var fila="<tr><td>"+_nom+"</td><td>"+_cat+"</td><td>"+_precio+"</td></tr>";
   
    var btn = document.createElement("TR");
    btn.innerHTML=fila;
    document.getElementById("Transaccion").appendChild(btn);
 
}

function ingresos(){
    
}
