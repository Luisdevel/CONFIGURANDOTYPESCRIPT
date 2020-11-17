// Declaration Merging
interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
}

interface Person {
  readonly andress: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  name: 'Luis',
  surname: 'Henrique',
  andress: ['Av lala'],
  age: 25,
};

console.log(person);
