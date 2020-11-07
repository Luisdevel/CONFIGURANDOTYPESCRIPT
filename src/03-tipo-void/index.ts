function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Luis',
  surname: 'Henrique',

  displayName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Luis', 'Henrique');
person.displayName();

export { person };
