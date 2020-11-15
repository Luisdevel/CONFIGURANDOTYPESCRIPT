export class Person {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Luis', 'Henrique', 30, '000.000.000-00');
person.cpf = '000.000.000.99';
console.log(person);
console.log(person.cpf);
