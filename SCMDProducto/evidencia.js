function raizcuadrada(numero) {
  function resultadoRaiz(valor) {
    return Math.sqrt(valor);
  }
  const resultado = resultadoRaiz(numero);

  return resultado;
}

const valor = 16;
const resultado = raizcuadrada(valor);
console.log("Esta es la tradicional compuesta: " + resultado);

/////////////////////////////////////

const calcularFlecha = (valor1) => {
  if (valor1 < 0) {
    return NaN;
  } else {
    return Math.sqrt(valor1);
  }
};
const valor1 = 16;
console.log("Esta es la funcion flecha compuesta: " + calcularFlecha(valor1));
