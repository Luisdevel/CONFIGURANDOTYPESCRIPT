const objectA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  readonly keyE: string; // readonly o valor dessa chave não pode ser alterada
  [key: string]: unknown;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
  keyE: 'Valoe E',
};

objectA.keyA = 'Outro Valor';
objectA.keyC = 'Nova chave';
objectA.keyD = 'Nova chave';
// objectA.keyE = 'Outro valor';

console.log(objectA);
