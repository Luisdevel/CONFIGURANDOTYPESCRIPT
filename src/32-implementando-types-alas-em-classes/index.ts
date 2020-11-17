type TypePerson = {
  name: string;
  surname: string;
  completedName(): string;
};

type Caguei = {
  name: string;
  surname: string;
  cocoFedido(): string;
};

export class Person implements TypePerson, Caguei {
  constructor(public name: string, public surname: string) {}

  completedName(): string {
    return this.name + ' ' + this.surname;
  }

  cocoFedido(): string {
    return this.name + ' ' + this.surname;
  }
}

const person = new Person('Luis', 'surname');
const coco = new Person('Diarréia', 'Borrei');
console.log(person.completedName());
console.log(coco.cocoFedido());
