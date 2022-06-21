let resultado = prompt("Selecciones una de las siguientes opciones 1= saber su promedio 2= solo saber la suma de sus notas");
let nota1 = prompt("Digite su primera nota");
nota1 = parseInt(nota1)
let nota2 = prompt("Digite su segunda nota");
nota2 = parseInt(nota2)
let nota3 = prompt("Digite su tercera nota");
nota3 = parseInt(nota3)
let n;
let n4 = 3;
if (resultado == "1") {
    n = nota1 + nota2 + nota3;
    f = n / n4;
    alert("Su promedio es: " + f.toFixed(0))
} else if (resultado == "2") {
    n = nota1 + nota2 + nota3;
    alert("La suma de sus nota es: " + n)
} else {
    alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
}

if (f <= 65) {
    alert(" Usted esta quedado. Nota: " + f)
}
if (f >= 65 && f <= 70) {
    alert("Usted paso rastrando. Nota: " + f)
}
if (f >= 70 && f <= 85) {
    alert("Usted paso, no esta mal. Nota: " + f)
}
if (f >= 85 && f <= 99) {
    alert("Usted paso, muy bien. Nota: " + f)
}
if (f >= 100) {
    alert("Usted paso, excelente, te ganaste un abrazo :). Nota: " + f)
}
