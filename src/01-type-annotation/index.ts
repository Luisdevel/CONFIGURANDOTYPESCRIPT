/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luis Henrique';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer-symbol');

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let person: {name: string, age: number, adult?: boolean} = {
  age: 30,
  name: 'Luis',
  adult: true,
};

// Funções
function sum(x: number, y: number): number { // Tipagem da função
  return x + y;
}

//const result = sum(2, 2);
const sum2: (x: number, y: number) => number = (x, y) => x + y; // Tudo Após : é Type Annotations em TS
