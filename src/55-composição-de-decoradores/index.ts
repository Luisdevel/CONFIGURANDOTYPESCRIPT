type Constructor = { new (...args: any[]): any };

function invertNameAndCOlor(param1: string, param2: string) {
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = this.invert(args[0]);
        this.name = this.invert(args[1]);
      }

      invert(value: string): string {
        return value.split('').reverse().join('') + ` ${param1} ${param2}`;
      }
    };
  };
}

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}

@otherDecorator('O parâmetro do outro decorador') // 2
@invertNameAndCOlor('value1', 'value2') // 1
export class Animal {
  constructor(public color: string, public name: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Roxo', 'Luis');
console.log(animal);
