export function unionObject<T, U>(obj1: T, obj2: U): T & U {
  //União entre os 2
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };
const union = unionObject(obj1, obj2);
console.log(union);
