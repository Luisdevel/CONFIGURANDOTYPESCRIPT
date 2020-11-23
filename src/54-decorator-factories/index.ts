// Aqui para mandar parametros, cria-se uma função e essa função deve retornar a função decoradora propriamente dita
function invertNameAndColor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
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

@invertNameAndColor('Value1', 'Value2') // Aqui são os valores dos parametros.
export class Animal {
  constructor(public color: string, public name: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Roxo', 'Luis');
console.log(animal);
