const especiales = ["reset", "del"];
var screen = document.querySelector(".calc__screen p");
var btns = document.querySelectorAll(".btns button"); //Este me trae todas las etiquetas button de la seccion btns

btns.forEach(btn => { //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
    btn.onclick = function () {

        let valor = btn.dataset.btn; //Almacenamos el valor del boton clickeado


        if (especiales.includes(valor)) {
            if (valor === "reset") {
                screen.textContent = "";
            } else if (valor === "del") {
                screen.textContent = screen.textContent.slice(0, -1)
            }
        } else {
            if (valor !== "=") {
                screen.append(valor);
            } else {                
                screen.textContent = eval(screen.textContent);
            }
        }
    }
})