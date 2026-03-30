//  Declarações e variáveis


let nome ="Fiap";

console.log(nome);

nome = "Teste";
console.log(nome)

if(true){
    var apelido = "Fiapinho"
}

console.log(apelido);

const taxaJuros = 0.05;
console.log(taxaJuros);
//taxaJuros = 1.5;
//console.log(taxaJuros);

var exemplo="ola-dev-var";
console.log(exemplo);

let exemplo1="ola-dev-let";
console.log(exemplo1);

const exemplo2="ola-dev-let";
console.log(exemplo2);

let exemplo3=10;
console.log(exemplo3);

let exemplo5 = {nome1:"teste"};
console.log(exemplo5);

let exemplo6 = ["Java","C#","PHP"];
console.log(exemplo6);

let exemplo7;
console.log(exemplo7);

let exemplo8 = null;
console.log(exemplo8)

// OPERADORES ARITMÉTICOS

const valor1 = 10;
const valor2 = 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// OPERADORES LÓGICOS

console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2 < 10 );
console.log(valor1 < 100 || valor2 > 20);
console.log(valor1 == valor2);
console.log(valor1 === valor2);

// Exercicios
// 1
let p = 100;
let v = 20;
let precoFinal= p - v;
console.log("O preço final com desconto é de: ", precoFinal);
// 2
let a = 20;
let b = 20;

console.log("o resultado é :", a === 20 && b >= 10);

// 
let usuario = true;
let token = "F3UHWNI7H3G5N2F";
console.log(usuario==true && token!=null);