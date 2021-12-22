// i will retroactively create a class structure here


// first start with adding an event listener to the roll button

let rollDie = document.getElementById('dieRollBtn'),
    resetDie = document.getElementById('resetRollBtn');
let die1 = document.getElementById('die1'),
    die2 = document.getElementById('die2'),
    die3 = document.getElementById('die3'),
    die4 = document.getElementById('die4');
let passBox = document.getElementById('passBox'),
    failBox = document.getElementById('failBox');
let plusDie = document.getElementById('increaseDie'),
    minusDie = document.getElementById('decreaseDie');


rollDie.addEventListener('click', (e)=> {
    e.preventDefault();
    die1.innerText = Math.ceil(Math.random()*6);
    die2.innerText = Math.ceil(Math.random()*6);
    die3.innerText = Math.ceil(Math.random()*6);
    die4.innerText = Math.ceil(Math.random()*6);

    console.log('this works')
    // i need to set a timeout on this or something... have it reset when i press the button
    if (die1.innerText >= 5 || die2.innerText >= 5 || die3.innerText >= 5 || die4.innerText >= 5) { //this is working
        console.log('SUCCESS')
        passBox.style.backgroundColor = 'chartreuse';
    } else {
        console.log('BIG LOSS')
        failBox.style.backgroundColor = 'crimson';
    }
    return
})

resetDie.addEventListener('click', (e)=> {
    e.preventDefault();
    die1.innerText = '';
    die2.innerText = '';
    die3.innerText = '';
    die4.innerText = '';
    passBox.style.backgroundColor = '';
    failBox.style.backgroundColor = '';

})
// conditions for removing boxes for die testing
let remove1 = document.getElementById('button1'),
    remove2 = document.getElementById('button2'),
    remove3 = document.getElementById('button3'),
    remove4 = document.getElementById('button4');

remove1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('this is now toggled')
})
remove2.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('this is remove2')
})
remove3.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('this is remove3')
})
remove4.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('this is remove4')
})

// let action = new Game()
// action.init()

// focus on getting the encounter scenes to pop up
// this is maybe out of my range at the moment. maybe i'll ask takia or azul for help
// make this an array to call later? i want to be able to call on these in the event listener 'change scene'

var cardExamples = [
    'card',
    'card2',
    'card3'
]
console.log(cardExamples) //the whole array
console.log(cardExamples[1]) // card2

// 12/20 let's expand on the cardExamples
// 12/22 this works for now. will have to clear up for later
var cardExamples = [
    {'card01': 'city', 'scene': 'i want to call on this only. how?'},
    {'card02': 'sea', 'scene': 'this takes place in the ocean. get gotten'},
    {'card03': 'wilderness', 'scene': 'a monster appears'},
    {'card04': 'city', 'scene': 'god herself appears to you. it\'s a trap!'},
    {'card05': 'sea', 'scene': 'this is card5'},
    {'card06': 'wilderness', 'scene': 'this is card six and takes place in the wilderness'},
    {'card07': 'city', 'scene': 'this is a city space'},
    {'card08': 'sea', 'scene': 'i hope you have silas, because he would be great in this moment'},
    {'card09': 'wilderness', 'scene': 'time to move up'},
    {'card10': 'city', 'scene': 'gain a terrible condition'},
    {'card11': 'sea', 'scene': 'looks like another monster'},
    {'card12': 'wilderness', 'scene': 'nothing bad happens at least'},
    {'monsterC': 'see monsterCard', 'scene': 'this is attached to the monster card'}
]
var monsterCard = [
    {'monster01': 'it eats you'}
]
console.log(cardExamples[0].scene) //so this works? let's go crazy and make it display on screen
console.log(cardExamples[Math.floor(Math.random() * cardExamples.length)].scene) // 12/22 holy balls this works. now to place in innerHTML for display purposes

let randomEncounter = document.getElementById('changeSceneBtn'),
    encounterDisplay = document.getElementById('displayBox');

randomEncounter.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('this will give me random stuff')
    var randomCard = cardExamples[Math.floor(Math.random() * cardExamples.length)].scene
    console.log(randomCard)
    encounterDisplay.innerText = randomCard; // ok so this works now... i need to add another layer to it
    if (randomCard.includes('monsterC')){ // so this does work
        console.log('display stats')
    }
})
// 12/22 i managed to get this work and display. i guess it is back to input data. i have a lot more to cover before i worry about making the conditions functional.