interface PersonProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

const student: PersonProtocol = {
  name: 'Luis',
  surname: 'Henrique',
  age: 25,
};

const student2: PersonProtocol<number, string> = {
  name: 123,
  surname: 456,
  age: '25',
};

const student3: PersonProtocol = {
  name: 'Luis',
  surname: 'Henrique',
  age: 25,
};

console.log(student);
console.log(student2);
console.log(student3);
