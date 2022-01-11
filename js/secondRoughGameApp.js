// this has to make use of init() instead of a bunch of event listeners... 1/11 good work, keitron

class Game {
    // for some reason, getting rid of the constructor fixed it?? i don't know why
    // 1/11 i will attempt to reintroduce the constructor. that may help things
    constructor() {
        this.characters = {
            character01: {
                name: 'Diana Stanley',
                id: 'The Redeemed Cultist',
                img: 'media/dianastanley.jpg',
                health: 7,
                sanity: 5,
                lore: 4,
                influence: 2,
                observation: 3,
                strength: 3,
                will: 1,
                // add items later
            },
            character02: {
                name: 'Trish Scarborough',
                id: 'The Spy',
                img: 'media/trishscarborough.jpg',
                health: 7,
                sanity: 5,
                lore: 1,
                influence: 3,
                observation: 4,
                strength: 3,
                will: 2
                // add items later
            },
            character03: {
                name: 'Norman Withers',
                id: 'The Astronomer',
                img: 'media/normanwithers.jpg',
                health: 5,
                sanity: 7,
                lore: 3,
                influence: 1,
                observation: 3,
                strength: 2,
                will: 4,
                // add items later
            },
            character04: {
                name: 'Lola Hayes',
                id: 'The Actress',
                img: 'media/lolahayes.jpg',
                health: 5,
                sanity: 7,
                lore: 2,
                influence: 4,
                observation: 2,
                strength: 2,
                will: 3,
                // add items later
            },
            character05: {
                name: 'Jim Culver',
                id: 'The Musician',
                img: 'media/jimculver.jpg',
                health: 7,
                sanity: 5,
                lore: 3,
                influence: 2,
                observation: 2,
                strength: 2,
                will: 3,
                // add items later
            },
            character06: {
                name: 'Charlie Kane',
                id: 'The Politician',
                img: 'media/charliekane.jpg',
                health: 4,
                sanity: 8,
                lore: 2,
                influence: 4,
                observation: 3,
                strength: 2,
                will: 2,
                // add items later
            },
            character07: {
                name: 'Lily Chen',
                id: 'The Martial Artist',
                img: 'media/lilychen.jpg',
                health: 6,
                sanity: 6,
                lore: 2,
                influence: 2,
                observation: 2,
                strength: 4,
                will: 3,
                // add items later
            },
            character08: {
                name: 'Akachi Onyele',
                id: 'The Shaman',
                img: 'media/akachionyele.jpg',
                health: 5,
                sanity: 7,
                lore: 3,
                influence: 2,
                observation: 2,
                strength: 2,
                will: 4,
                // add items later
            },
            character09: {
                name: 'Silas Marsh',
                id: 'The Sailor',
                img: 'media/silasmarsh.jpg',
                health: 8,
                sanity: 4,
                lore: 1,
                influence: 3,
                observation: 3,
                strength: 3,
                will: 3,
                // add items later
            },
            character10: {
                name: 'Jacqueline Fine',
                id: 'The Psychic',
                img: 'media/jacquelinefine.jpg',
                health: 4,
                sanity: 8,
                lore: 4,
                influence: 2,
                observation: 3,
                strength: 1,
                will: 3,
                // add items later
            },
            character11: {
                name: 'Leo Anderson',
                id: 'The Expedition Leader',
                img: 'media/leoanderson.jpg',
                health: 6,
                sanity: 6,
                lore: 2,
                influence: 2,
                observation: 3,
                strength: 3,
                will: 3,
                // add items later
            },
            character12: {
                name: 'Mark Harrigan',
                id: 'The Soldier',
                img: 'media/markharrigan.jpg',
                health: 8,
                sanity: 4,
                lore: 1,
                influence: 2,
                observation: 2,
                strength: 4,
                will: 4,
                // add items later
            },
        }
    }
    init() {
        // leave your functions here...
        this.removeDie();
        this.rollDie();
        this.resetDie();
        this.displayEncounter();
        this.characterLoad();
        this.selectCharacter();

    }
    // this function allows the die to roll and appear in the boxes
    rollDie() {
        let rollDie = document.getElementById('dieRollBtn'),
            resetDie = document.getElementById('resetRollBtn');
        let die1 = document.getElementById('die1'),
            die2 = document.getElementById('die2'),
            die3 = document.getElementById('die3'),
            die4 = document.getElementById('die4');
        let passBox = document.getElementById('passBox'),
            failBox = document.getElementById('failBox');

        rollDie.addEventListener('click', (e) => {
            e.preventDefault();
            die1.innerText = Math.ceil(Math.random() * 6);
            die2.innerText = Math.ceil(Math.random() * 6);
            die3.innerText = Math.ceil(Math.random() * 6);
            die4.innerText = Math.ceil(Math.random() * 6);

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
    }
    // this will reset die to blank boxes
    resetDie() {
        let resetDie = document.getElementById('resetRollBtn');
        let die1 = document.getElementById('die1'),
            die2 = document.getElementById('die2'),
            die3 = document.getElementById('die3'),
            die4 = document.getElementById('die4');

        resetDie.addEventListener('click', (e) => {
            e.preventDefault();
            die1.innerText = '';
            die2.innerText = '';
            die3.innerText = '';
            die4.innerText = '';
            passBox.style.backgroundColor = '';
            failBox.style.backgroundColor = '';
            // success... this works 12/31
        })
    }

    // remove die for encounter
    removeDie() {
        let die1 = document.getElementById('die1'),
            die2 = document.getElementById('die2'),
            die3 = document.getElementById('die3'),
            die4 = document.getElementById('die4');
        let dice = [
            die1, die2, die3, die4
        ];
        dice.forEach(die => {
            die.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('you clicked the box')
                // the problem isn't making the dice disappear, it is making sure that I am not having the dice run in the background
                die.style.display = 'none'
            })
        })


    }
    // display random encounters?
    // 1/8 make sure that you figure out how to call on MULTIPLE encounters that are saved
    displayEncounter() { //is this where the constructor comes in?
        let randomEncounter = document.getElementById('changeSceneBtn'),
            encounterDisplay = document.getElementById('displayBox');

        randomEncounter.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log('this will give me random stuff')
            var randomCard = cardExamples[Math.floor(Math.random() * cardExamples.length)].scene
            console.log(randomCard)
            encounterDisplay.innerText = randomCard; // ok so this works now... i need to add another layer to it
            if (randomCard.includes('monsterC')) { // so this does work
                console.log('display stats')
            }
        })
    }
    // display character card
    /**this will only come after i have the functional character selection page and a functioning submit
     * that is going to take some work
     * maybe that will be the task for 1/11
     * read through modular folder
     */
    characterLoad() {
        // load characters on page
        let characterCount = 0;

        // access HTML nodes
        let output = document.getElementById('characterOutput');
        let row1 = document.getElementById('row1'),
            row2 = document.getElementById('row2'),
            row3 = document.getElementById('row3'),
            row4 = document.getElementById('row4'),
            row5 = document.getElementById('row5'),
            row6 = document.getElementById('row6');

        for (const key in this.characters) {
            const character = this.characters[key]
            const hero = document.createElement('div');
            hero.className = 'col-md-4 hero hero-container';
            hero.innerHTML = `
            <div class="hero-filter" id="${key}">
            </div>
            <div class="row">
            <div class="col-md-4">
                <img src="${character.img}" alt="${character.name}" class="img-fluid character-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text"><em>"${character.id}"</em></p>
                    <ul class="nav card-stats">
                        <li class="stats-box" id="stats1"><span id="lore">${character.lore}</span></li>
                        <li class="stats-box" id="stats2"><span id="influence">${character.influence}</span></li>
                        <li class="stats-box" id="stats3"><span id="observation">${character.observation}</span></li>
                        <li class="stats-box" id="stats4"><span id="strength">${character.strength}</span></li>
                        <li class="stats-box" id="stats5"><span id="will">${character.will}</span></li>
                    </ul>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="health-box">${character.health}</div>
                            </div>
                            <div class="col-4">
                                <div class="sanity-box">${character.sanity}</div>
                            </div>
                            <div class="col-4">
                                <div class="clues-box"></div>
                            </div>
                        </div>
                    </div>
                    </div>`

            // 1/10 holy crap it works.. freaking finally
            // can i nest the if statements?
            if (characterCount < 3) {
                row1.append(hero)
            } else {
                row2.append(hero);
            }
            characterCount++;
        }
    }

    selectCharacter() {
        let heros = document.querySelectorAll('.hero')


            heros.forEach(hero => {
                hero.addEventListener('click', (e) => {
                    let selected = e.target.id;
                    characterSection.innerHTML = `
                    <div class="container">
            <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${this.characters[selected].img}" alt="${this.characters[selected].name}" class="img-fluid this.characters[selected]-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${this.characters[selected].name}</h5>
                    <p class="card-text"><em>"${this.characters[selected].id}"</em></p>
                    <ul class="nav card-stats">
                        <li class="stats-box" id="stats1"><span id="lore">${this.characters[selected].lore}</span></li>
                        <li class="stats-box" id="stats2"><span id="influence">${this.characters[selected].influence}</span></li>
                        <li class="stats-box" id="stats3"><span id="observation">${this.characters[selected].observation}</span></li>
                        <li class="stats-box" id="stats4"><span id="strength">${this.characters[selected].strength}</span></li>
                        <li class="stats-box" id="stats5"><span id="will">${this.characters[selected].will}</span></li>
                    </ul>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="health-box">${this.characters[selected].health}</div>
                            </div>
                            <div class="col-4">
                                <div class="sanity-box">${this.characters[selected].sanity}</div>
                            </div>
                            <div class="col-4">
                                <div class="clues-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    `
                })
            })
        // do a forEach => forEach item in hero addEventListener
        console.log('Are you working')
    }
}

let action = new Game();
action.init()

// this section will be outside of init() for now.

// 1/10/22 ok. so everything is inside the init(). you are close to being a big boy...
// 1/11/22 So, I want to use import.js for this portion to show personal growth. How do I do that? Scratch that idea. NO IMPORTING


