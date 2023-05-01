const operacion = ["*", "+", "-", "/"];
let screen = document.querySelector(".calc__screen p");
let btns = document.querySelectorAll(".btns button"); //Este me trae todas las etiquetas button de la seccion btn
let str = "";

//-----------------------------------------------------
function Delete() {
  screen.textContent = screen.textContent.slice(0, -1);
  str = str.slice(0, -1);
}

function Reset() {
  screen.textContent = "";
}

function Agregar(value) {
  str += value;
  screen.textContent += value;
}

function Resultado(value) {
  if (eval(value).toString() === "Infinity") {
    screen.textContent = "∞";
    setTimeout(() => {
      screen.textContent = "";
      str = "";
    }, 2000);
  } else if (eval(value).toString() === "NaN") {
    screen.textContent = "Indeterminado";
    setTimeout(() => {
      screen.textContent = "";
      str = "";
    }, 2000);
  } else {
    if (eval(value).toString().length < 16) {
      screen.textContent = eval(value);
      str = eval(value);
    } else {
      screen.textContent = eval(value).toExponential(5);
    }
  }
}

//----------------------------------------------------------

btns.forEach((btn) => {
  //Con el forEach puedo recorrer todas esas etiquetas y aplicarle el dataset para saber que valor tiene el boton apretado
  btn.onclick = function () {
    let input = btn.dataset.btn; //Almacenamos el valor del boton clickeado

    //
    if (screen.textContent.length > 16) {
      screen.textContent = Number(screen.textContent).toExponential(5);
    }

    switch (input) {
      case "del":
        if (screen.textContent !== "") {
          Delete();
        }
        break;
      case "reset":
        Reset();
        str = "";
        break;
      case "=":
        if (screen.textContent.length !== 0) {
          //Evito que ingrese un str vacio a la fn
          if (!operacion.includes(str[str.length - 1])) {
            //Evito que ingrese a la r
            Resultado(str);
          }
        }
        break;
      case ".":
        if (str == "0" || (str !== "" && !str.includes("."))) {
          Agregar(input);
        }
        break;
      default:
        if (operacion.includes(input)) {
          //Si es una simbolo de operacion
          if (screen.textContent.length !== 0) {
            str += input;
            Reset();
          }
        } else {
          if (str !== "0") {
            Agregar(input);
          } else {
            if (input === "0") return;
          }
        }
        break;
    }

    console.log(str);
  };
});

const radios = document.querySelectorAll(".switch__radio");

radios.forEach((radio) => {
  radio.addEventListener("change", changeTheme);
});

function changeTheme() {
  const theme = document.documentElement;
  const dot = document.querySelector(".switch__dot");

  theme.dataset.theme = this.value;

  switch (this.value) {
    case "theme-1":
      dot.setAttribute(
        "style",
        "left: 5px; right: auto; transform: translate(0, -50%)"
      );
      break;
    case "theme-2":
      dot.setAttribute(
        "style",
        "left: 50%; right: auto; transform: translate(-50%, -50%)"
      );
      break;
    case "theme-3":
      dot.setAttribute(
        "style",
        "left: auto; right: 5px; transform: translate(0, -50%)"
      );
      break;

    default:
      break;
  }
}
