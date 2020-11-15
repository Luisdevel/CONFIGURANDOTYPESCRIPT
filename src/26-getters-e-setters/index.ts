export class Person {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    // private cpf: string,
    private _cpf: string,
  ) {}

  // setCpf(value: string): void {
  //   this.cpf = value;
  // }

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }

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
person.cpf = '000.000.000-99';
console.log(person.cpf);
