const operador = [ "*", "/", "+", "-",];
const especial = [ "reset", "del", "=", "."];
var screen = document.querySelector(".calc__screen p");
var btns = document.querySelectorAll(".btns button"); //Este me trae todas las etiquetas button de la seccion btns
var value1 = "";  //Primer valor ingresado
var value2 = "";  //Segundo valor ingresado
var value = "";   //Valor despues de una operacion

btns.forEach( btn => {  //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
    btn.onclick = function() {
        //----------------------------
        //Valores para funcionamiento
        let valor = btn.dataset.btn; //Almacenamos el valor del boton clickeado
       

        //----------------------------
        if(operador.includes(valor)){ //Es un operador?
          
        } 
        
        else if (especial.includes(valor)){//Es un especial?
            
        } 
        
        else { //Es un numero
            
        }
    }
}
)