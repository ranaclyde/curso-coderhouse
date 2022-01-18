const firstName = prompt("Hola ¿Cuál es tu nombre?");
const lastName = prompt("¿y tu apellido?");

const currentDate = new Date();

if (firstName != null && firstName != "" && lastName != null && lastName != "") {
    const fullname = firstName + " " + lastName;
    alert(`¡Hola, ${fullname}! Mi nombre es Ricardo`);
    
    let age = prompt("¿Cuál es tu edad?");
    
    if (parseInt(age) == age && age > 0) {
        const year = currentDate.getFullYear() - Number(age);

        alert("Eso quiere decir que naciste en el año " + year);

        let userConfirm = confirm("¿Querés que haga un truco de magía?");

        magicTrick(userConfirm);
    } else {
        alert("Tenías que ingresar un número entero mayor a cero");
    }
    
} else {
    alert("Disculpá no te conozco")
}

function magicTrick(flag) {
    if (flag) {
        let userNum = Number(prompt("Ingrese un número cualquiera entre -100 y 100"));
        if (userNum && (userNum <= 100 && userNum >= -100)) {
            let result = userNum;
            result += 4;
            alert("Al número ingresado le sumamos 4: Nos da " + result);
            result = result - 1;
            alert("Le restamos 1: " + result);
            result = result + 21;
            alert("Ahora le sumamos 21: nos da " + result);
            result = result - userNum;
            alert("Le restamos el número ingresado (" + userNum + "): nos da " + result);
            result /= 2;
            alert("Lo dividimos por 2: nos da " + result);
            alert("SIEMPRE DA 12, ¡Elijas lo que elijas!")
        } else {
            alert("Tenías que ingresar un número entre -100 y 100");
        }
    } else {
        alert("Ok! Nos vemos luego");
    }
}