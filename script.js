'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHous = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
 // openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Brajdhfjs, 21',
  mainindex: 2,
  starterIndex: 2,
});

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// default values
//const {name : restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, hours, tags);

//const { menu = [], starterMenu: starters = []} = restaurant;
//console.log(menu, starters);


// iterables : arrays, strings, maps, sets. NOT objects


// 1.desctructiring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...stuff] = [1, 2, 3, 4, 5];
console.log(a, b, stuff);


const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu,  ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);

// Objects

//const {fri, ...otherDays} = restaurant.openingHours
//console.log(otherDays);

// 2.functions

const add = function(...numbers) {
  let sum = 0;
  for(let  i=0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);

}

add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4, 4)



const x = [23, 5, 7];
// add(...x);

// console.log(x);


// USE ANY DATA TYPE, return any data type, short-circuiting (use the first truthy value)
// console.log(3 || 'jONAS'); // returns 3

// console.log('' || 'Jonas'); // returns jonas

// console.log(true || 0); // returns true

// console.log(undefined || null); // returns null

console.log('-------OR---------');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10
console.log(guests);


// nullish values, null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('--------AND-------'); // opposite of OR, returns falsy value, or the last truthy value, //
//everthing needs to be truthy, as soon as theres something false, it will return the false value.

// console.log(0 && 'Mejra');
// console.log(7 && 'Mejra');

// console.log('Hello' && 23 && null && 'mejra');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza 
// ('mushrooms', 'spinach')

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,

};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Govannios',
};

// OR assignment operator
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish asignemnt operator, allows 0
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>'; //returns anonymous
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //returns anonymous

rest1.owner &&= '<ANONYMOUS>'; // returns nothing, undefined
rest2.owner &&= '<ANONYMOUS>'; // returns anonymous, skips the truthy value

console.log(rest1);
console.log(rest2);

