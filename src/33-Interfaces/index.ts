interface TypeOfName {
  name: string;
}

interface TypeOfSurname {
  surname: string;
}

interface TypeCompletedName {
  completedName(): string;
}

type TypePerson = TypeOfName & TypeOfSurname & TypeCompletedName;
interface TypePerson2 extends TypeOfName, TypeOfSurname, TypeCompletedName {}

export class Person implements TypePerson2, TypePerson {
  constructor(public name: string, public surname: string) {}

  completedName(): string {
    return this.name + ' ' + this.surname;
  }
}

const personObj: TypePerson2 = {
  completedName() {
    return this.name + ' ' + this.surname;
  },
  name: 'Luis',
  surname: 'LALALA',
};

const person = new Person('Luis', 'Henrique');
console.log(person.completedName());
console.log(personObj.completedName());
