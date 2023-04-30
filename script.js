const operacion = ["*", "+", "-", "/", "."];
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

function Resultado(value) {
    if (eval(value).toString().length < 16 ){
        screen.textContent = eval(value);
    }else {
        screen.textContent = eval(value).toExponential(5)
    }
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
                    if (screen.textContent.length !== 0) {
                        str += screen.textContent + input;
                        Reset();
                    }
                } else {
                    if (screen.textContent == "0") { //si en el screen ya se ingreso un 0
                        if (input === ".") { //si el valor a agregar es un punto
                            Agregar(input)
                        }
                    } else {
                        if (screen.textContent.length < 16) {
                            Agregar(input)
                        } else {
                            screen.textContent = Number(screen.textContent).toExponential(5);
                        }
                    }
                }
                break
        }
    }
})