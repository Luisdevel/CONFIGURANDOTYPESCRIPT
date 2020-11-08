enum Colors {
  VERMELHO,
  AZUL,
  AMARELO,
  VERDE = 6,
  PRETO = 'PRETO',
}

// console.log(Colors);
// console.log(Colors.VERMELHO);
// console.log(Colors[0]);
// console.log(Colors.PRETO);

function selectColors(color: Colors): void {
  console.log(Colors[color]);
}

selectColors(Colors.AMARELO);
