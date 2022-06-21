
let operacion = prompt("Indique su operacion, una '1' para suma, un '2' para resta, un '3' para multiplicación y un '4' para divición")
let n1 = prompt("Digite su primer numero");
n1 = parseInt(n1)
let n2 = prompt("Digite su segundo numero");
n2 = parseInt(n2)
let c;
let total;
if (operacion == "1") {
    total = n1 + n2;
    alert("El total de la suma es:" + total)
} else if (operacion == '2') {
    c = n1 - n2;
    alert("El resultado de la resta es= " + c)
} else if (operacion == '3') {
    c = n1 * n2;
    alert("El resultado de la multiplicación es= " + c)
} else if (operacion == '4') {
    c = n1 / n2;
    alert("El resultado de la devición es= " + c)
} else {
    alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
}


