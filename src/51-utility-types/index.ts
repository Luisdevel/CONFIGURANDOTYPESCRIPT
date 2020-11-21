// Record
const object1: Record<string, string | number> = {
  name: 'Luis',
  surname: 'Henrique',
  age: 25,
};
console.log(object1);

type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>; // Transforma tudo o que era opcional em requirido
// Partial
type PersonPartial = Partial<PersonRequired>; // Transforma tudo o que era requirido em opcinal
// Readonly
// type PersonReadonly = Readonly<PersonRequired>; // não pode ser modificado, nesse caso, tudo o que é requirido
// // Pick
// type PersonPick = Pick<PersonRequired, 'name' | 'surname'>; // Escolha da chave Person apenas 'name' e 'surname'

const object2: PersonPartial = {
  name: 'Luis',
  surname: 'Henrique',
  age: 25,
};
console.log(object2);

// Extract e Exclude
// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TypeExclude = Exclude<ABC, CDE>; // Computa todos os tipos que estão em ABC que não estão em CDE -> (AB)
// type TypeExtract = Extract<ABC, CDE>; // Coputa todos os tipos que estão em ABC que podem ser atrbuídos em CDE

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dshauihdsaiuhdsai2',
  name: 'Luis',
  age: 25,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...acountData } = accountMongo;
  return { ...acountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
