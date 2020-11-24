function decorator(
  classPrototype: any,
  nameMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMetodo);
  console.log(descriptor);
  // return {
  //   value: function (...args: string[]) {
  //     return args[0].toUpperCase();
  //   },
  // };
}

export class APerson {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
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
person.method = () => 'EIIIIIIIIII';
const method = person.method('Olá mundo!');
console.log(method);
