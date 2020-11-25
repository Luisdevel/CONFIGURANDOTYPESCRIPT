//Para instalar uma biblioteca no ts é recomendado instalar a tipagem, por exemplo instalar normalmente e depois a outra opção
//npm i validator
//npm i @types/validator --save-dev

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('luis@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
