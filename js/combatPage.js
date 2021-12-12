// i want to make a quick tester against my characters and a random monster. how do i do that? how do i start?

console.log('start')

var tester = Math.ceil(Math.random() * 6)


function testNum() {
    if (tester >= 5) {
        console.log(`Thanks to this ${tester}, you pass!!`)
    } else {
        console.log(`You fail because you rolled a ${tester}`)
    }
    return;
}

testNum()
var person = [
    ['Health', 8],
    ['Sanity', 5]
]
var monster = [
    ['Health', 3],
    ['Will', 1],
]
console.log(`You are a monster. Stats: ${monster}`)
// now i need to create a card that will affect my character sheet... duck...
var fight = Math.ceil(Math.random() * 6)
console.log(fight)

// let message;
// let diceBtn = document.getElementById('diceBtn');
// let diceDisplay = document.getElementById('diceDisplay');

// diceBtn.addEventListener('click', (e)=> {
//     e.preventDefault();

//     if (tester >= 5) {
//         message = `Thanks to this ${tester}, you pass!!`;
//         diceDisplay.innerText = message;
//     } else {
//         message = `You fail because you rolled a ${tester}`
//         diceDisplay.innerText = message;
//     }
//     // return;
// })

/* how am i supposed to get the image of my dice to appear in place of numbers?
    i think i will need an array storing those images */

var diceArray = ['one', 'two', 'three', 'four', 'five', 'six']; // so i will have to use Math.floor(Math.random() * 6)
var rollDice = Math.ceil(Math.random() * diceArray.length);
console.log(rollDice);

// let's start smaller than small....
// var fight_result;

// if (fight >= 5) {
//     fight_result = 'success'
// } else {
//     fight_result = person[0][1] - monster[0][1];
//     var newHealth = fight_result;
//     person[0][1] = newHealth;
//     console.log(`Since you lost the fight, your health is ${person}`)
// }
// console.log(fight_result)


if (fight > monster[0][1]) {
    console.log('guess it works')
} else {
    console.log('you are an idiot')
} // ok so i can get that figured out. now how to i add another level to this?
if (fight > monster[0][1]) {
    fight_result = 'health test has passed';
} else if (fight > monster[1][1]) { // need to do more reading to figure this out. i need to add more to this
    fight_result = 'will test has passed';
} else {
    fight_result = 'ouch'
}
console.log(fight_result)
console.clear()
// make a clickable card next

// this is for the battlebox below the hero generator. do not use any code from above.... focus on one die first then try to expand to test multiple rolls


let die1 = document.getElementById('die1'),
    rolls = 0;
    // die2 = document.getElementById('die2'),
    battleResult = document.getElementById('battleResult'),
    testBtn = document.getElementById('testBtn');
console.log(testBtn)
testBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    die1.innerText = Math.ceil(Math.random() *6);
    // die2.innerText = Math.ceil(Math.random() * 6);
    rolls++
    testStats()
})
/*
    rules
        I want to roll two die;
        a successful test is >=5;
        each character will test their respective stats;
*/
const testStats =()=> {
    if (die1 >= 5) {
        battleResult.innerText = `success, you rolled a ${die1}`;
    } else {
        battleResult.innerText = `you fail`;
    }
    return;
}


// so i will do the following:
/**
 * build a class
 * build a constructor
 * make an object
 * create the functions
 * init
 */