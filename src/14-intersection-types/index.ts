type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person = HasName & HasSurname & HasAge;

const person: Person = {
  name: 'Luis',
  surname: 'Henrique',
  age: 25,
};

console.log(person);

export { person };
