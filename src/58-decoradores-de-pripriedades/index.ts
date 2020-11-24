function decorator(classPrototype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class APerson {
  @decorator
  name: string;
  @decorator
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

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
const method = person.method('Olá mundo!');
console.log(method);
