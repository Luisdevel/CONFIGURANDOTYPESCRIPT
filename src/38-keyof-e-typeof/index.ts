//Eu posso pegar um tipo a partir de um valor e tambem todas as chaves

type ColorsObj = typeof colorsObj;
type ColorsKey = keyof ColorsObj;

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
};

function translateColors(color: ColorsKey, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColors('red', colorsObj));
console.log(translateColors('green', colorsObj));
console.log(translateColors('blue', colorsObj));
console.log(translateColors('purple', colorsObj));
