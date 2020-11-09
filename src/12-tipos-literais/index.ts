// Tipo literal caso eu não puder usar const posso fazer asserção de const

// let x = 10; // eslint-disbble-line
// x = 0b1010;
// const y = 10;
// const a = 100; // eslint-disbble-line

// const person = {
//   name: 'Luis' as const,
//   surname: 'Henrique',
// };

function selectColor(color: 'Amarelo' | 'Vermelho' | 'Azul'): string {
  return color;
}

console.log(selectColor);

// Module mode
export default 1;
