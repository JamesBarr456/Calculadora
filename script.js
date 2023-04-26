const especiales = ["reset", "del"];
const operacion = ["*", "+", "-", "/"];
var screen = document.querySelector(".calc__screen p");
var btns = document.querySelectorAll(".btns button"); //Este me trae todas las etiquetas button de la seccion btns


function Delete() {
    screen.textContent = screen.textContent.slice(0, -1)
}

function Reset() {
    screen.textContent = "";
}

function Agregar(value) {
    screen.append(value);
}

function Repeat(str, value) {
    return str.indexOf(value) !== -1;
}

btns.forEach(btn => { //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
    btn.onclick = function () {

        let input = btn.dataset.btn; //Almacenamos el valor del boton clickeado

        if (especiales.includes(input)) {
            if (input === "reset") {
                Reset();
            } else if (input === "del") {
                Delete();
            }
        } else {
            if (input == "=") { //Pregunto si el valor no es ´=´
                screen.textContent = eval(screen.textContent); //Me devuelve el resultado de mi operacion
            } else {
                if (operacion.includes(input)) { //Si es una simbolo de operacion
                    if (Repeat(screen.textContent, input)) {//si el simbolo se repetiria en el screen
                        console.log("se repite")
                    } else {
                        Agregar(input)
                    }
                } else{
                    if (screen.textContent == "0"){//si en el screen ya se ingreso un 0
                        if (input === "."){//si el valor a agregar es un punto
                            Agregar(input)
                        }else{
                            console.log("Agregar un punto")
                        }
                    } else {
                        Agregar(input) 
                    }
                }
            }
        }
    }
})
