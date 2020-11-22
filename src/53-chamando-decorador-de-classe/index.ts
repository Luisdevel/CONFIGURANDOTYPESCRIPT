function invertNameAndColor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o decorador e recebi', target);

  return class extends target {
    cor: string;
    name: string;

    constructor(...args: any[]) {
      //o args aqui recebe o indice da cor e do name
      super(...args);
      this.cor = this.invert(args[0]);
      this.name = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@invertNameAndColor //Aqui o decorador é chamado e recebe tudo o que tem na classe em target
export class Animal {
  constructor(public cor: string, public name: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Roxo', 'Luis');
console.log(animal);
