function decorator(
  classPrototype: any,
  nameMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMetodo);
  console.log(index);
}

export class APerson {
  name: string;
  surname: string;
  age: number;

  constructor(
    @decorator name: string, //Aonde eu quiser decorar parametros eu posso decorar, ou métodos em fim...
    @decorator surname: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get completedName(): string {
    return `${this.name} ${this.surname}`;
  }

  set completedName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }
}

const person = new APerson('Luis', 'Henrique', 25);
const method = person.method('Olá mundo!');
console.log(method);
