type Vehicle = {
  model: string;
  years: number;
};

type Car = {
  brand: Vehicle['model'];
  year: Vehicle['years'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Jeep',
};

console.log(car);
