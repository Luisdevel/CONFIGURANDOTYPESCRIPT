// Tuple
const clientData: [number, string] = [1, 'Luis'];
const clientData2: [number, string, string] = [1, 'Luis', 'Henrique'];
const clientData3: [number, string, string?] = [1, 'Luis']; // Valores opcionais
const clientData4: [number, string, ...string[]] = [1, 'Luis', 'Henrique'];

clientData[0] = 100;
clientData[1] = 'Henrique';

console.log(clientData);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly
const array1: readonly string[] = ['Luis', 'Henrique'];
const array2: ReadonlyArray<string> = ['Luis', 'Henrique'];

console.log(array1);
console.log(array2);
