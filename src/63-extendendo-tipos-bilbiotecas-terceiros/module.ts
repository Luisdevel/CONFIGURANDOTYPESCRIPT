import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

_.div = function (array: number[]): number {
  return array.reduce((total, actual) => total / actual, 1);
};

global.MYGLOBAL = 'VALOR DA MINHA GLOBAL';

export default _;
