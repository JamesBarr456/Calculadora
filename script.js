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
            if (input !== "=") { //Pregunto si el valor no es =
                if (screen.textContent == "0") { //Si se ingreso un cero si o si debe agregar una coma para continuar operando
                    if (input === ".") {
                        Agregar(input)
                    }
                } else {
                    Agregar(input) //Si se agrega cuandl otro valor distitno de cero inicialmente se puede continuar operando
                }

            } else {
                screen.textContent = eval(screen.textContent); //Me devuelve el resultado de mi operacion
            }
        }
    }
})