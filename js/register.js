// function validarDatos() {
//     let formulario = document.forms[0];
//     // console.log(formulario);
//     // console.log(formulario['nombre']);
//     let nombre = formulario["nombre"];
//     let apellido = formulario["apellido"];
//     let documento = formulario["documento"];
//     let fechaNacimiento = formulario["fechaNacimiento"];
//     let terminos = formulario["terminos"];
//     // console.log(nombre, apellido, documento, fechaNacimiento, terminos);
//     console.log(nombre.value);
//     console.log(apellido.value);
//     console.log(parseInt(documento.value));
//     console.log(fechaNacimiento.value);
//     console.log(terminos.checked);
// }

/*----------------*/
function enviarDatos() {
  let validado = true;
  let formulario = document.getElementById("registro");
  let nombre = formulario["nombre"].value;
  let apellido = formulario["apellido"].value;
  let documento = parseInt(formulario["documento"].value);
  let fechaNacimiento = formulario["fechaNacimiento"].value;
  let ciudad = formulario["ciudad"].value;
  let password = formulario["password"].value;
  let terminos = formulario["terminos"].checked;

  console.log(nombre);
  console.log(apellido);
  console.log(documento);
  console.log(fechaNacimiento);
  console.log(ciudad);
  console.log(password);
  console.log(terminos);
  // Validación y tratamiento de datos
  let mensaje = "";
  if (password.lenght < 8) {
    validado = false;
    mensaje = "Su contraseña debe tener más de 8 dígitos";
  }
  if (terminos == false) {
    validado = false;
    mensaje += "Debe aceptar los términos y condiciones </br>";
  }

  if (!validado) {
    let alerta = document.getElementById("msjIncorrecto");
    // console.log(alerta);
    alerta.innerHTML = mensaje;
    alerta.hidden = false;
  }

  //Validación y tratamiento de datos
  return validado; //false
}
