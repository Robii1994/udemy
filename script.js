// 'strict mode'

// importing Module
// import {addTocart, totalPrice as price, qty} from './shoppingCart.js'; // it's hoisted

// All items import
// import * as ShoppingCart from './shoppingCart.js'; // if declair in bottom is also work. not hoisted

// console.log('Importing module');

// console.log(shippingCost); // not work bcoz its not exported

// ShoppingCart.addTocart('Banana', 5);
// console.log(ShoppingCart.totalPrice); // name changed on top
// console.log(ShoppingCart.qty); // name changed in exporting file

// import add from './shoppingCart.js'; // default export
import add, {cart} from './shoppingCart.js'; // mix default and naming exports,

add('Banana', 5);
add('Grapes', 7);
add('oranges', 10);

console.log(cart);


// const shoppingCart2 = (function(){
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 270;
//     const totalQuantity = 5;

//     const addTocart = function(product, quantity){
//         cart.push({product, quantity});
//         console.log(`${quantity} ${product} added to cart, Shipping cost is ${shippingCost}`);
//     };
    
//     const orderStock = function(product, quantity){
//         console.log(`${quantity} ${product} Order from Supplier`);
//     }

//     return {
//         addTocart,
//         cart,
//         totalPrice,
//         totalQuantity,
//         orderStock
//     }
// })();

// shoppingCart2.addTocart('orange', 5);
// console.log(shoppingCart2.cart);

// console.log(shoppingCart2.shippingCost); // undefined, bcoz its not return


// same as Node.js
// Export
// export.addTocart = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart, Shipping cost is ${shippingCost}`);
// };

// // Import
// const {addTocart} = require('./shoppingCart.js');

// CNTL (for mac) + C => stop running
// ls => list folder, dir for windows
// cd => change directory, cd folderName
// cd .. => back folder
// cd ../.. => back two levels
// clear => clear the console
// mkDir forderName => create new folder
// touch index.html (windows => edit index.html) => create new file
// touch script.js bank.js mapty.js => create multiple files
// rm script.js test.js (mac), del (windows) => delete files
// rmDir folderName => remove empty folder
// rm -R folderName => remove folder
// mv file.js ../ => move file to parent folder



// check npm verson => npm -v
// if doesn't get numbers, need to install nodejs => download the LTS version
// npm init => after get questions, to keep ENTER....... all questions
// after complete u get a package.json file in the folder


import cloneDeep from './node_modules/lodash-es/cloneDeep.js'
// import cloneDeep from 'lodash-es/'

const state = {
    cart: [
        {product: 'Bread', quantity: 3},
        {product: 'Pizza', quantity: 5},
    ],
    user: {loggedIn: true},
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;
console.log(stateDeepClone);


// the page is no reload any typing.. its only understand parcel
// if(module.hot){
//     module.hot.accept();
// }

console.log('tets');

console.log('test');

console.log('data1');

console.log(cart.find(el => el.quantity >+ 2));
Promise.resolve('TEST').then(x => console.log(x));

// npm i core-js
// import "core-js/stable";
// import "core-js/stable/array/find";
// import "core-js/stable/array/promise";

// npm i regenerator-runtime
// import 'regenerator-runtime/runtime';


console.log(cart.filter(el => el.quantity >+ 2));



// some of the single line codes

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;

// instead with optional chaining and nullish colash operator
// const limit = spendingLimits?.[user] ?? 0;


const expense = Object.freeze([
    {robin: 500, sujin: 700},
    {reny: 200, mini: 700}
]);
// expense.siraj = 800; // cannot add this boz 'Object.freeze' function is immutable, not change
// expense[0].robin = 1000; // its work bcoz its new object
// expense[3] = 'Vimal'; // does not work, bcoz its immutable
console.log(expense);

console.log('Welcome test data');

console.log('data');
console.log('new1');

