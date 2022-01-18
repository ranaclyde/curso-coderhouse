let resp = null;
let option = 0;
let exit = false;

do {
  resp = prompt(
    "1. Múltiple saludo \n" +
    "2. Factorial de un número \n" +
    "3. Salir"
  );

  option = parseInt(resp);
  
  switch(option){
    case 1:
      multipleHi();
      break;
    case 2:
      factorial();
      break;
    case 3:
      exit = true;
      break;
    default:
      if (resp == null) {
        exit = true;
      } else {
        alert("Solo números entre 1 y 4");
      }
  }
}
while(!exit);

function factorial() {
  let resp = prompt("Ingrese un número entero positivo");
  let factorial = 1;
  
  resp = parseInt(resp);

  if (resp && resp > 0) {
    console.log("Factorizar el número " + resp);
    for (x = 1; x <= resp; x++) {
      console.log(factorial + " x " + x + " = " + (factorial * x));
      factorial = factorial * x;
    }
    
    alert("El factorial de " + resp + " es: " + factorial + ". (Ver detalle en consola)");
  } else {
    alert("Sólo números enteros");
  }
}

function multipleHi() {
  let username = prompt("Ingrese su nombre");
  let number = prompt("Ingrese un número entero positivo");
  let hello = "";

  number = parseInt(number);

  if (number && number > 0) {
    let i = 0;
    while (i < number) {
      hello += "Hola ";
      i++;
    }
    alert(hello + username);
  } else {
    alert("Sólo números enteros positivos " + username);
  }
}