'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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
  openingHours,

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


// console.log (restaurant.openingHours.mon.open); // returns error

// Optional chaining, checks if property exists before continunig, stops if it doesnt
console.log(restaurant.openingHours.mon?.open); // moves on to open only if mon property does exist, returns undefined

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open  ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// const users = [
//   {name: 'Jonas', email: 'email@gmail.com'}
// ];

// console.log(users[0]?.name ?? 'user array empty');

// // property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days; `;

// for (const day of properties) {
//   openStr += `${day}`; 
// console.log(openStr) }

// // property values
// // const values = Object.values(openingHours)
// // console.log(values); 

// // // Entire object
// // const entires = Object.entries(openingHours);

// // for (const x of entries) {
// //   console.log(x);
// // }

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// // console.log(ordersSet.has('Pizza'));

// ordersSet.add('garlic bread');
// ordersSet.delete('Pizza');
// // ordersSet.clear(); // clears all elements

// for (const order of ordersSet)
// console.log(order);

// Example 
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);


// const PlitzerAuthors = ['James Joyce', 'Sally Rooney', 'Sylvia Plath', 'Dostoevsky', 'James Joyce'];

// const uniquePA = [...new Set(PlitzerAuthors)];
// console.log(uniquePA);

// console.log(new Set('jonasschmedtmann').size); // string count

// MAPS
// let resta = new Map();

// resta.set('name', 'Classico Italiano');// adding new elements
// resta.set(1, 'Firenze, Italy');
// console.log(resta.set(2, 'Lisbon, Portugal'));

// resta
// .set('categories', ['Italian', 'Pizzeria']) 
// .set('open', 11) 
// .set('close', 23)
// .set(true, 'We are open!')
// .set(false, 'We are closed!')

// console.log(resta.get('name'));

const time = 18;

// resta.get(time > resta.get('open') && time < resta.get('close')) 

let agents = new Map();

agents.set
  ('name', 'Jett')
.set
  ('role', 'duelist')
.set
  ('country', 'south korea')
.set
  ('age', 21)


agents.get(time < agents.get('age'));

// console.log(agents.has('country'));
agents.delete(2);
agents.set([1, 2], 'Test');

// console.log(agents);

// console.log(agents.size);
// console.log(agents.clear)


const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],

  [true, 'Correct'],
  [false, 'Try again'],
]);

// console.log(question);


// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// const quiz = new Map([
//   ['question', 'Which agent in Valorant is from S.Korea?'],
//   [1, 'Sage'],
//   [2, 'Reyna'],
//   [3, 'Omen'],
//   [4, 'Jett'],
//   ['correct', 4],

//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);

// console.log(quiz);

// console.log(quiz.get('question'));
// for (const [key, value] of quiz) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(quiz.get(quiz.get('correct') === answer));

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.length);
console.log('NikolaTesla'.length);

console.log(airline.indexOf('r'));

console.log(airline.slice(4)); // cuts everything from before index 4
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // extracting the first word, that we dont know
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));  

const checkMiddleFunction = function(seat) {
  // B and E are middle seats
  const seatNumber = seat.slice(-1);
  if (seatNumber === 'B' || seatNumber === 'C') {
    console.log('You are in the middle seat');
  } else {
    console.log('You are NOT in the middle seat');
  }
};

checkMiddleFunction('11B');
checkMiddleFunction('23C');
checkMiddleFunction('3E');

// check if name ends in A function
const nameChecker = function(name) {
  let lastLetter = name.slice(-1);

  if (lastLetter === 'a') {
    console.log('Your name ends in A');
  }

}

nameChecker('mejra');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('mejra'.toUpperCase());

// Fix capitalization in name

const passenger = 'jonAS'; // Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check & fix user email
const email = 'jonas@gmail.com';
const loginEmail = ' jonas@Gmail.Com ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // removes empty space
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '288,96£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcment = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcment.replaceAll('door', 'gate'));

const planeModel = 'Airbus A320 neon';
console.log(planeModel.includes('Airbus A320 neon'));

console.log(plane.startsWith('Air'));

if (planeModel.startsWith('Airbus') && planeModel.endsWith('neon')) {
  console.log('Part of the brand NEW Airbus family');
}

// Practice example

const checkBaggage = function(items) {
     const baggage = items.toLowerCase();

     if(baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You cant enter the plane');
     } else {
      console.log('Welcome aboard');
     }
}

checkBaggage('I have a laptop, Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Some snacks and gun for protection');