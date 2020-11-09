// Union Types, variável ou retorno de função ou parametro pode ter mais de um tipo

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return a + b;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));

function addOrConcat2(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat2(10, '20'));
console.log(addOrConcat2('10', 20));
