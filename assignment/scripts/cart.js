console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let baskets = {};
let latest_index = 0;

class Basket {
    constructor(name, is_large_basket) {
        this.name = name ?? 'Unnamed Basket';
        this.basket = [];
        this.maxItems = is_large_basket ? 10: 5;
        baskets[latest_index] = this;
        latest_index++;
    }

    addItem(item) {
        if (isFull(this)) {
            console.log(`Cannot add ${item} because ${this.name} if full`);
        }
        this.basket.push(item);
        console.log(`Adding ${item} to ${this.name}`);
    }

    listItems() {
        if (this.basket.length === 0) {
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
        console.log(`Emptying ${this.name}...`)
    }
}

function isFull(basket) {
    return basket.basket.length >= basket.maxItems;
}

let myBasket = new Basket('My Basket')
let largeBasket = new Basket('Large Basket', true);

myBasket.addItem('Ham');
myBasket.addItem('Bread');
myBasket.addItem('Cheese');

myBasket.listItems();

myBasket.empty();

myBasket.listItems();