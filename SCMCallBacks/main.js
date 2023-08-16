const listas = ["Prime valor", "Segundo valor", "Tercer valor"];

for (let i = 0; i < listas.length; i++) {
  console.log("i = ", i, " lista= ", listas[i]);
}

//*RECORRER UN ARRAY CON UN CALLBACK*//

function recorridoArray(elemento, index) {
  console.log("i = ", i, " lista= ", listas[i]);
}
lista.forEach(recorridoArray);

//Este forEach lo que esta haciendo es que coge listas y lo recorre en la funcion recorridoArray.

//**EL MISMO CALLBACK PERO COMO SE HACE ACTUALMENTE */
listas.forEach((elemento, index) => {
  console.log("i = ", index, " lista= ", elemento);
});
