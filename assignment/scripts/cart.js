console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
class Basket {
    constructor() {
        this.id = Math.floor(Math.random() * 899_999) + 100_000;
        this.basket = [];
        this.maxItems = 5;
    }

    addItem(item) {
        this.basket.push(item);
    }

    listItems() {
        for (let item of this.basket) {
            console.log(`Basket ${this.id}, Item: ${indexOf(item)}: ${item}`)
        }
    }
}