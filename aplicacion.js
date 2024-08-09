/* ejemplo 1 */
function obtenerNumerosHasta(numero) {
  let numeros = [];
  for (let i = 0; i <= numero; i++) {
      numeros.push(i);
  }
  return numeros;
}

let resultado = obtenerNumerosHasta(10);
console.log(resultado);

/* ejemplo 2 */

function repetirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
  }
}

repetirPalabra("Hola", 5);

/* ejemplo 3 */
function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
      console.log(${numero} es múltiplo de 5);
  } else {
      console.log(${numero} no es múltiplo de 5);
  }
}

esMultiploDeCinco(25);
esMultiploDeCinco(14);

/* ejemplo 4 */
function imprimirNumerosHasta(numero) {
  for (let i = 0; i <= numero; i++) {
      console.log(i);
  }
}

imprimirNumerosHasta(5);

/* ejemplo 5 */

function repetirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
  }
}

repetirPalabra("Hola", 3);

/* ejemplo 6 */

function imprimirArray(array) {
  array.forEach(valor => console.log(valor));
}

imprimirArray([1, 2, 3, 4, 5]);


/* ejemplo 7 */

function imprimirArrayMenosQuinto(array) {
  array.forEach((valor, indice) => {
      if (indice !== 4) {
          console.log(valor);
      }
  });
}

imprimirArrayMenosQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* ejemplo 8 */

function multiplicarArrayPorNumero(array, numero) {
  array.forEach(valor => console.log(valor * numero));
}
multiplicarArrayPorNumero([1, 2, 3, 4, 5], 2);