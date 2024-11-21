let Operacion;
do {
Operacion = prompt("Ingresa una operacion aritmetica: Suma,Resta,Division,Multiplicacion");
let a;
let b;
if (Operacion != "salir") {
a = parseFloat(prompt("Ingrese el primer numero"));
b = parseFloat(prompt("Ingrese el segundo numero")) ;
} 
let resultado;


switch (Operacion) {
case "suma":
 console.log("Eligio suma y el resultado es", a+b)
 break;

case "resta":
 console.log("Eligio resta y el resultado es", a-b);
 break;

case "division":
 console.log("Eligio divison y el resultado es", a/b);
 break;

case "multiplicacion": 
 console.log("Eligio multiplicacion y el resultado es", a*b);
 break;

case "salir":
    console.log("Adios");
 break;
    
default:
  console.log ("Opción no valida porfavor, seleccione la operación deseada 1.Suma 2.Resta, 3.Division, 4.Multiplicacion");

}
if (Operacion != "salir") {
    console.log("El resultado es ",resultado);
}
} while (Operacion != "salir");

