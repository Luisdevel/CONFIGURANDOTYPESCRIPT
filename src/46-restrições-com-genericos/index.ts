type KeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const keyFn: KeyFn = (object, key) => object[key];

const animal = {
  color: 'Pink',
  vacinas: ['Vacina 1', 'Vacina 2'],
  age: 10,
};

const vacinas = keyFn(animal, 'vacinas');
const color = keyFn(animal, 'color');

console.log(vacinas, color, keyFn(animal, 'age'));
