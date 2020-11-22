@decorator
export class Animal {
  constructor(public cor: string, public name: string) {}
}

// function decorator(target: any): any { // Função que recebe alguma coisa e retorna alguma coisa, no caso a classe Anial
//   console.log('OIE... do decorator');
//   return target;
// }

// function decorator<T extends new (...args: any[]) => any>(target: T) {
//   // Construtor de classe
//   return class extends target {
//     cor: string;

//     constructor(...args: any[]) {
//       // Aqui eu posso intervir o que está na outra classe
//       super(...args);
//       this.cor = 'Qualquer coisa';
//     }
//   };
// }

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.invert(args[0]);
      this.name = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// const AnimalDecorator = decorator(Animal); // recebe a minha função decoradora que retorna a classe Animal
// const animal = new AnimalDecorator('roxo', 'Luis');
// console.log(animal);

const animal = new Animal('Roxo', 'Luis');
console.log(animal);
