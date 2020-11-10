type Age = number;
type Person = {
  name: string;
  age: Age; // Seria o mesmo que number
  money: number;
  favoriteColor?: string;
};

type ColorRGB = 'Vermelho' | 'Verde' | 'Azul';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  age: 30,
  name: 'Luis',
  money: 200_000, // 200000
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Amarelo'));
