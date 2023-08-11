'use strict'

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on 
// next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and 
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

    // 1.
    const [players1, players2] = game.players;

    // 2.
    const [gk, ...fieldPlayers] = players1;
    console.log(gk, fieldPlayers);

    // 3.

    const allPlayers = [...players1, ...players2];

    // 4.
    const players1final = [...players1, 'Thiago', 'Coutinho','Perisic'];
    console.log(players1final);

    // 5.
    const {odds: {team1, x: draw, team2}} = game;

    // easier way to desctructure odds
    // const odds = game.odds;
    // console.log(odds);

    // 6.
    const printGoals = function(...players) {
        console.log(`${players.length} goals were scored`);
    };

    // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich)
    // printGoals('Davis', 'Muller');
    // printGoals(...game.scored);
    // console.log(print);

    // // 7.
    // team1 < team2 && console.log('Team 1 is more likely to win');

    // team1 > team2 && console.log('Team 1 is more likely to win');


// 1 
// for(const [i, player] of game.scored.entries())
// console.log(`Game ${i +1}: ${player}`);

// 2
// for (const odd of Object.values(game.odds))
//   average += odd;
//   average /= odds.length;
//   console.log(average );

  // 3
  const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ])

gameEvents.delete(64);

let events = [...new Set(gameEvents.values())];

console.log(events);

console.log(`An event happened, on average, every ${92 / gameEvents.size} minutes`);

for (const [min, event] of gameEvents) {
    const half = min <=45 ? "First" : "Second"
    console.log(`[${half} HALF] ${min}: ${event}`);

}




