// 
interface Coffee {
    getCost(): number;
    getIngredients(): string;
}

class SimpleCoffee implements Coffee {
    getCost(): number {
        return 6000;
    }
    getIngredients(): string {
        return "Coffee";
    }
}

abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;
    constructor(decoratedCoffee: Coffee) {
        this.decoratedCoffee = decoratedCoffee;
    }
    getCost(): number {
        return this.decoratedCoffee.getCost();
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients();
    }
}

class Latte extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 2000;
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients() + ", plus light foam to the coffee gives us Latte";
    }
}

class Capuccino extends CoffeeDecorator {
    getCost(): number {
        return this.decoratedCoffee.getCost() + 2500;
    }
    getIngredients(): string {
        return this.decoratedCoffee.getIngredients() + ", plus half a cup of foam to the coffee gives us Capuccino";
        
    }
}

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getCost());
console.log(coffee.getIngredients());
let latte: Coffee = new Latte(coffee);
console.log(latte.getCost());
console.log(latte.getIngredients());
let capuccino: Coffee = new Capuccino(coffee);
console.log(capuccino.getCost());
console.log(capuccino.getIngredients());