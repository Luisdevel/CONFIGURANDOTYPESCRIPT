export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantifyOfProducts(): number {
    return this.products.length;
  }

  amount(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Camiseta', 49.9);
const product2 = new Product('Caneca', 1.9);
const product3 = new Product('Caneta', 15.9);

const shoppingCar = new ShoppingCart();
shoppingCar.insertProducts(product1, product2, product3);
console.log(shoppingCar.amount());
console.log(shoppingCar.quantifyOfProducts());
