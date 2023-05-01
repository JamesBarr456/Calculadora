 const operacion = ["*", "+", "-", "/"];
 let screen = document.querySelector(".calc__screen p");
 let btns = document.querySelectorAll(".btns button"); 
 let resultado = "";


 
 //-----------------------------------------------------
 function Delete() {
     screen.textContent = screen.textContent.slice(0, -1);
     resultado = resultado.slice(0, -1)
 }

 function Reset() {
     screen.textContent = "";
 }

 function Agregar(value) {
     resultado += value;
     screen.textContent += value;
 }

 function Resultado(value) {
     if (eval(value).toresultadoing() === "Infinity") {
         screen.textContent = "∞";
         setTimeout(() => {
             screen.textContent = "";
             resultado = "";
         }, 2000)
     } else if (eval(value).toresultadoing() === "NaN") {
         screen.textContent = "Indeterminado";
         setTimeout(() => {
             screen.textContent = "";
             resultado = "";
         }, 2000)
     } else {
         if (eval(value).toresultadoing().length < 16) {
             screen.textContent = eval(value);
             resultado = eval(value);
         } else {
             screen.textContent = eval(value).toExponential(5)
         }
     }
 }

 //----------------------------------------------------------

 btns.forEach(btn => { //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
     btn.onclick = function () {

         let input = btn.dataset.btn; //Almacenamos el valor del boton clickeado

         // 
         if (screen.textContent.length > 15) {
             screen.textContent = Number(resultado).toExponential(5);
         }

         switch (input) {
             case "del":
                 if (screen.textContent !== "") {
                     Delete();
                 }
                 break;
             case "reset":
                 Reset();
                 resultado = "";
                 break;
             case "=":
                 if (screen.textContent.length !== 0) { //Evito que ingrese un resultado vacio a la fn
                     if (!operacion.includes(resultado[resultado.length - 1])) { //Evito que ingrese a la r
                         Resultado(resultado)
                     }
                 }
                 break;
             case ".":
                 if (resultado == "0" || resultado !== "" && !resultado.includes(".")) {
                     Agregar(input)
                 }
                 break;
             default:
                 if (operacion.includes(input)) { //Si es una simbolo de operacion
                     if (screen.textContent.length !== 0) {
                         resultado += input;
                         Reset();
                     }

                 } else {
                     if (resultado !== "0") {
                         Agregar(input)
                     } else {
                         if (input === "0") return
                     }
                 };
                 break
         };

         console.log(resultado);

     }
 });