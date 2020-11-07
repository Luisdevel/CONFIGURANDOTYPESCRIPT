// Utilize any somente no último caso, pois ele é um tipo em que não queremos utilizar
/* eslint-disable */
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Hi'));
console.log(showMessage(1));
