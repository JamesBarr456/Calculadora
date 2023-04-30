const operacion = ["*", "+", "-", "/"];
let screen = document.querySelector(".calc__screen p");
let btns = document.querySelectorAll(".btns button"); //Este me trae todas las etiquetas button de la seccion btns

let str = "";

//-----------------------------------------------------
function Delete() {
    screen.textContent = screen.textContent.slice(0, -1)
}

function Reset() {
    screen.textContent = "";
}

function Agregar(value) {
    screen.append(value);
}

function Repeat(string, value) {
    return string.indexOf(value) !== -1;
}

function Resultado(value) {
    screen.textContent = eval(value);
}

function Longitud(value) {
    return value.length < 16
}

function Exponencial() {
    screen.textContent = Number(screen.textContent).toExponential(5)
}

//----------------------------------------------------------

btns.forEach(btn => { //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
    btn.onclick = function () {

        let input = btn.dataset.btn; //Almacenamos el valor del boton clickeado

        // 
        switch (input) {
            case "del":
                Delete();
                break;
            case "reset":
                Reset();
                str = ""
                break;
            case "=":
                str += screen.textContent;
                Resultado(str); //Me devuelve el resultado de mi operacion
                break;
            default:
                if (operacion.includes(input)) { //Si es una simbolo de operacion
                    str += screen.textContent + input;
                    Reset();
                } else {
                    if (screen.textContent == "0") { //si en el screen ya se ingreso un 0
                        if (input === ".") { //si el valor a agregar es un punto
                            Agregar(input)
                        }
                    } else {
                        if (Longitud(screen.textContent)) {
                            Agregar(input)
                        } else {
                            Exponencial();
                        }
                    }
                }
                break
        }
    }
})

// if (!Repeat(screen.textContent, input)) { //si el simbolo se repetiria en el screen
//     Agregar(input)