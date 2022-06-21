let a = prompt("favor ingresar su edad:");
if (a <= 3) {
    alert("Usted es un bebe de " + a)
} else if (a >= 4 && a <= 12) {
    alert("Usted es un niño de " + a) 
} else if (a >= 12 && a <= 18) {
    alert("Usted es un adolecente de " + a)
} else if (a >= 18 && a <= 65) {
    alert("Usted es un adulto de " + a)
} else if (a >= 65) {
    alert("Usted es un adulto mayor de " + a)
} else {
    alert("Usted no ingreso su edad. Porfavor ingresar su edad")
}