export function funcao(this: Date, argument1: string, age: number): void {
  console.log(this);
  console.log(argument1, age);
}

funcao.call(new Date(), 'Luis', 30);
funcao.apply(new Date(), ['Luis', 30]);
