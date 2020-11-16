export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  attacked(character: Character): void {
    this.staff();
    character.loseLife(this.attack);
  }

  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(
      `${this.emoji} - ${this.name} está com ${this.life} de vida...`,
    );
  }

  abstract staff(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  staff(): void {
    console.log(this.emoji + 'WARRIOOORRR YAAAAAAH I ATTACKEED!!!!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  staff(): void {
    console.log(this.emoji + 'MONSTER I ATTACKEEED MUHAHAHAHA!!!!');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.attacked(monster);
warrior.attacked(monster);
warrior.attacked(monster);
monster.attacked(warrior);
monster.attacked(warrior);
monster.attacked(warrior);

/*
export class Character {
constructor(
  protected name: string,
  protected attack: number,
  protected life: number,
) {}

attacked(character: Character): void {
  console.log(`${this.name} está atacando...`);
  character.loseLife(this.attack);
}

loseLife(attackForce: number): void {
  this.life -= attackForce;
  console.log(`${this.name} está com ${this.life} de vida...`);
}
}

export class Warrior extends Character {}
export class Monster extends Character {}

const warrior = new Character('Warrior', 100, 1000);
const monster = new Character('Monster', 87, 1000);

warrior.attacked(monster);
warrior.attacked(monster);
warrior.attacked(monster);
monster.attacked(warrior);
monster.attacked(warrior);
monster.attacked(warrior);

*/
