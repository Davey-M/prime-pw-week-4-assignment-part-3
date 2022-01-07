console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket_ids = [];

class Basket {
    constructor(name) {
        this.name = name ?? 'Unnamed Basket';
        this.basket = [];
        this.maxItems = 5;
    }

    addItem(item) {
        this.basket.push(item);
        console.log(`Adding ${item} to ${this.name}`);
    }

    listItems() {
        if (this.basket == []) {
            console.log(`There are no items in ${this.name}...`);
            return
        }

        for (let item of this.basket) {
            let itemIndex = this.basket.indexOf(item) + 1;
            console.log(`${this.name}, Item: ${itemIndex}: ${item}`)
        }
    }

    empty() {
        this.basket = [];
    }
}

let myBasket = new Basket('My Basket')

myBasket.addItem('Ham');
myBasket.addItem('Bread');
myBasket.addItem('Cheese');

myBasket.listItems();

myBasket.empty();

myBasket.listItems();