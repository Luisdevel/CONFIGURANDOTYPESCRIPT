// Array<T> - T[]

export function multipliesArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concArgs(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multipliesArgs(1, 2, 3);
const conc = concArgs('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(conc);
console.log(upper);
