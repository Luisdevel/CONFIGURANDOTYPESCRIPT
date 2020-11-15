// Métodos estáticos não são instanciados.

export class Person {
  static ageP = 0;
  static cpfP = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.ageP, Person.cpfP);
  }

  static personCreate(name: string, surname: string): Person {
    return new Person(name, surname, Person.ageP, Person.cpfP);
  }
}

const person1 = new Person('Luis', 'Henrique', 30, '123.456.789-00');
const person2 = Person.personCreate('Lara', 'Croft');
console.log(person1);
console.log(person2);
person1.normalMethod();
console.log(Person.ageP, Person.cpfP);
