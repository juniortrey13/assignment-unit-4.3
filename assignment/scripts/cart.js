console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// created our empty basket
let basket = []; // My global variable is basket and I am starting it off as an empty array
console.log( 'Basket is:', basket );

// created a function called addItem
function addItem ( item ) {  // Takes an input parameter
    if (isFull()){
        return false;
    }
    basket.push ( item ); // Pushes my new item into the basket array.
    console.log( 'Adding item into your basket!');
    return true; // Returns true to indicate succesfull addition.
}
// In the console add an item by typing addItem ( '[item]' ) and press ented
// created a function called listItems
function listItems(){
    for ( let i = 0; i < basket.length; i++ ) { // Loops through my basket array
        console.log( basket[i] ); // Logs each item in the basket
    }
}

// created a function called empty
function empty() {
    basket.length = 0; // Resets the basket array without reassiging it
    console.log('Emptying basket...');
}

// 1.
const maxItems = 5; // we are using const because the value is not expected to change
// 2.
function isFull() {
    if ( basket.length < maxItems ) {
        console.log ('Your basket is not full yet!')
        return false;
    } else {
        console.log ('Oops! Your basket is full!'); 
        return true;
    }
}





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
