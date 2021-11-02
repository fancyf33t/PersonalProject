// let's start with getting a blank array set up for the character



var Jim_Culver;

Jim_Culver = [
    ['Health', 5],
    ['Sanity', 7],
    ['Lore', 3],
    ['Influence', 3],
    ['Observation', 2],
    ['Strength', 2],
    ['Will', 3],
    ['Condition',
        ['Conditions Inventory',]],
    ['Items',
        ['Items Inventory', 
            ['Clue', 1]]],
    ['Spells',
        ['Spell Inventory', 'Shriveling Spell']],
];

console.log(`Greetings, your character sheet says that you are Jim Culver. Your stats are: ${Jim_Culver}`)

var monster = [
    ['Health', 3],
    ['Will', 1],
]
console.log(`You are a monster. Stats: ${monster}`)
// now i need to create a card that will affect my character sheet... duck...
var fight = Math.ceil(Math.random() * 6)
console.log(fight)

// let's start smaller than small....
var fight_result;

if (fight > monster[0][1]) {
    console.log('guess it works')
} else {
    console.log('you are an idiot')
} // ok so i can get that figured out. now how to i add another level to this?
if (fight > monster[0][1]) {
    fight_result = 'health test has passed';
} else if (fight > monster[1][1]) {
    fight_result = 'will test has passed';
} else {
    fight_result = 'ouch'
}
console.log(fight_result)
/*
var nflChampions = [
    ['Green Bay Packers', 13],
    ['Chicago Bears', 9],
    ['New York Giants', 8],
    ['New England Patriots', 6],
    ['Pittsburgh Steelers', 6],
    ['Washington Football Team', 5],
    ['Dallas Cowboys', 5],
    ['San Francisco 49ers', 5],
    ['Detroit Lions', 4],
    ['Indianapolis Colts', 4],
    ['Cleveland Browns', 4],
    ['Philadelphia Eagles', 4],
    ['Las Vegas Raiders', 3],
    ['Denver Broncos', 3],
    ['Los Angeles Rams', 3],
    ['Arizona Cardinals', 2],
    ['Miami Dolphins', 2],
    ['Baltimore Ravens', 2],
    ['Seattle Seahawks', 1],
    ['Tampa Bay Buccaneers', 1],
    ['New Orleans Saints', 1],
    ['New York Jets', 1],
    ['Kansas City Chiefs', 1],
    ['Minnesota Vikings'],
    ['Atlanta Falcons'],
    ['North Carolina Panthers'],
    ['Buffalo Bills'],
    ['Cincinatti Bengals'],
    ['Jacksonville Jaguars'],
    ['Tennessee Titans'],
    ['Houston Texans'],
    ['San Diego Chargers'],
]
var cheaters = ['caught video taping opponents', ' deflating balls', ' actively pandering to referees']
nflChampions[3].push(cheaters);



var idx = Math.floor(Math.random() * nflChampions.length);
var message; //this simply initializes the variable message

if (nflChampions[idx].length === 1) {
    message = `Hello, darkness my old friend. It is me. The ${nflChampions[idx][0]}...`;
} else if (nflChampions[idx].length === 3) {
    console.log(`You might be a champion ${nflChampions[idx][0]}, but you are also charged with the following: ${nflChampions[idx][2]}`)
} else {
    message = `CONGLATURATIONS, ${nflChampions[idx][0]}!!! You have ${nflChampions[idx][1]} championship titles!! Good job!!`;
}

console.log(message);
*/

console.clear()
var fight_result_health, fight_result_will;
if (fight >= 5) {
    fight_result_health = 'health test has passed';
} else if (fight >= 5) {
    fight_result_will = 'will test has passed';
} else if (fight <= 4) {
    console.log(Jim_Culver[0][1] - monster[0][1])
    fight_result = 'oops'
}
console.clear()
