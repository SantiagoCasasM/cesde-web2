//* FUNCIONES TRADICIONALES Y FUNCIONES FLECHA/

//const carro = {
//marca: "Land Rover",
//llamar: function () {
//let that = this;
//setTimeout(function () {
//console.log(that.marca);
//}, 5000);
//},
//};

//const carro = {
//marca: "Land Rover",
// llamarFlecha: function () {
//  setTimeout(() => {
//console.log(this.marca);
//  }, 5000);
// },
//};
//carro.llamarFlecha();

//** PROMESAS */

//const promesa = new Promise((resolve, reject) => {
// setTimeout(() => {
//    resolve("GluckGehabat");
//  }, 5000);
//});

//const promesa = Promise.resolve("gracias");

const promesa = new Promise((resolve, reject) => {
  let variable = false;
  setTimeout(() => {
    return variable ? resolve("Correcto") : reject("Rechazada");
  }, 5000);
});
console.log(promesa);
