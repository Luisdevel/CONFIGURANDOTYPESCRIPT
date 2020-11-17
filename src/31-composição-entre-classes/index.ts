export class Car {
  private readonly motor = new Motor();

  on(): void {
    this.motor.on();
  }
  accelerate(): void {
    this.motor.accelerate();
  }
  stopped(): void {
    this.motor.stopped();
  }
  off(): void {
    this.motor.off();
  }
}

export class Motor {
  on(): void {
    console.log('Motor está ligado...');
  }
  accelerate(): void {
    console.log('Motor está acelerando...');
  }
  stopped(): void {
    console.log('Motor está parado...');
  }
  off(): void {
    console.log('Motor está desligado...');
  }
}

const car = new Car();
car.on();
car.accelerate();
car.stopped();
car.off();
