// this has to make use of init() instead of a bunch of event listeners... 1/11 good work, keitron

let start = document.getElementById('pickCharacter'),
    mainPage = document.getElementById('mainGamePage'), // main game page (2)
    characterSelectionPage = document.getElementById('mainCharacterSelection'); // start game page (1)

start.addEventListener('click', () => {
    // console.log('this works too')
    characterSelectionPage.className = "d-none"
    mainPage.className = "display"
})



class Game {
    // for some reason, getting rid of the constructor fixed it?? i don't know why
    // 1/11 i will attempt to reintroduce the constructor. that may help things
    constructor() {
        // stores all information regarding character stats
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
                clues: 0,
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
                will: 2,
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
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
                clues: 0,
                // add items later
            },
        }
        // stores all information regarding CURRENT CHARACTERS
        this.currentCharacter = {}
        // stores all information regarding random encounters
        this.encounters = {
            encounter01: {
                id: 1,
                location: 'city',
                scene: 'You wander through the aisles of an antique book store. Although many extremely rare books can be found here, the organizational system is almost impossible to decipher [-1 lore]. If you pass, you are able to track down a hidden gem; gain 2 clues and [+1 lore].',
                success: {
                    lore: +1,
                    clues: +2,
                },
                fail: {
                    lore: -1
                }
                // +2 clue && +1 lore
            },
            encounter02: {
                id: 2,
                location: 'wilderness',
                scene: 'In the middle of the night, a feral beast rips apart your camp and attacks you [strength]! If you pass, you feel invincible; improve [will]. If you fail, lose 2 Health.',
                success: {
                    will: +1,
                },
                fail: {
                    health: -2,
                }
                // +1 will || - 2 Health
            },
            encounter03: {
                id: 3,
                location: 'sea',
                scene: 'A sudden storm descends upon you and strong winds whip around your vessel. Huge waves toss your ship around like a toy, and you are thrown to the deck repeatedly [strength]. If you pass, gain 1 Clue. If you fail, lose 1 Sanity and 1 Health.',
                success: {
                    clues: +2,
                },
                fail: {
                    clues: -1,
                    health: 1
                }
            }
        }
        // stores the current encounter??
        this.currentEncounter = {}
        // stores all information regarding monster stats
        this.monsters = {
            // the monsters don't have to be stored information from a constructor. I've already done it one time.. i really don't want to do it again. just store this info in an array then randomly generate stats
            monster01: {
                id: 1,
                name: 'Cthulhu',
                health: 10,
                sanity: 8,
                media: 'media/Monsters/cthulhu.jpg',
            },
            monster02: {
                id: 2,
                name: 'Cultist',
                health: 3,
                sanity: 2,
                media: 'media/Monsters/monster10.jpg',
            },
            monster03: {
                id: 3,
                name: 'Wriggler',
                health: 2,
                sanity: 4,
                media: 'media/Monsters/monster1.jpg'
            },
            monster04: {
                id: 4,
                name: 'Many Beasts',
                health: 3,
                sanity: 1,
                media: 'media/Monsters/monster2.jpg'
            },
            monster05: {
                id: 5,
                name: 'Shambler',
                health: 2,
                sanity: 2,
                media: 'media/Monsters/monster3.jpg'
            },
            monster06: {
                id: 6,
                name: 'Ancient One',
                health: 5,
                sanity: 5,
                media: 'media/Monsters/monster4.jpg'
            },
            monster07: {
                id: 7,
                name: 'Deep One',
                health: 2,
                sanity: 1,
                media: 'media/Monsters/monster5.jpg'
            },
            monster08: {
                id: 8,
                name: 'Nyerlatothep',
                health: 4,
                sanity: 4,
                media: 'media/Monsters/monster6.jpg'
            },
            monster09: {
                id: 9,
                name: 'Black Sheep',
                health: 2,
                sanity: 2,
                media: 'media/Monsters/monster9.jpg'
            },
            monster10: {
                id: 10,
                name: 'Shub Niggurath',
                health: 7,
                sanity: 7,
                media: 'media/Monsters/monster7.jpg'
            }
        }
        this.currentMonster = {}
        // stores all information regarding assets for character use
        this.assets = {
            asset01: {
                name: 'Lucky Cigarette Case',
                type: 'trinket',
                description: 'Once per round, you may add 1 to the result of 1 die when resolving a test',
                value: 2,
                // test + 1
            },
            asset02: {
                name: 'Arcan Manuscripts',
                type: 'tome',
                description: 'Gain [+1 lore] when resolving Spell effects',
                value: 1,
                // if spell test, test + 1 roll
            },
            asset03: {
                name: 'Agency Quarantine',
                type: 'service',
                description: 'When you gain this card, immediately choose a space. Each Monster on the chosen space loses 4 Health. Then discard this card',
                value: 4,
                // if monster, - 4 Health to monster
            },
            asset04: {
                name: 'Private Investigator',
                type: 'ally',
                description: 'Gain [+1 observation]. You may reroll 1 die when resolving a [observation] test.',
                value: 2,
                // observation + 1; reroll on observation test
            },
            asset05: {
                name: 'Witch Doctor',
                type: 'ally',
                description: 'Investigators on your space may recover 1 additional Health or discard a Cursed Condition when performing a Rest action',
                value: 3,
                // Rest + 1 or remove cursed (condition)
            },
            asset06: {
                name: 'Dynamite',
                type: 'weapon',
                description: 'You may discard this card to cause each Monster on your space to lose 3 Health',
                value: 3,
                // if monster + character, monster.health - 3
            },
            asset07: {
                name: 'Cat Burglar',
                type: 'ally',
                description: 'Roll 1 die. On a 5 or 6, gain 1 Item o Trinket Asset from the reserve. On a 1, discard this card',
                value: 1,
                // roll; if roll >= 5, add item||trinket; if roll == 1, discard
            },
            asset08: {
                name: 'Kerosene',
                type: 'item',
                description: 'You may discard this card to gain [+5 strength] during a Combat Encounter',
                value: 1,
                // during combat, + 5 strength; discard
            },
            asset09: {
                name: '.38 Revolver',
                type: 'weapon',
                description: 'Gain [+2 strength] during Combat Encounters',
                value: 1,
                // if combat roll, strength + 2
            },
            asset10: {
                name: 'Silver Twilight Ritual',
                type: 'weapon',
                description: 'When you gain this card, immediately retreat Doom by 1. Then discard this card.',
                value: 3,
                // DoomCount - 1; discard this card
            },
            asset11: {
                name: '.18 Derringer',
                type: 'weapon',
                description: 'You may add 1 to the result of 1 die when resolving a [strength] test during Combat Encounters',
                value: 1,
                // if strength test, roll + 1
            },
            asset12: {
                name: 'Pocket Watch',
                type: 'trinket',
                description: 'You cannot become Delayed unless you choose to',
                value: 1,
                // while true, no delay else false? (don't know how to word that...)
            },
            asset13: {
                name: 'Fine Clothes',
                type: 'item',
                description: 'Each 6 you roll when performing an Acquire Assets action counts as 2 successes',
                value: 2,
                // forEach 6 on acquireAssets roll, + 2
            },
            asset14: {
                name: 'Arcane Tome',
                type: 'tome',
                description: 'Gain [+2 lore] when resolving Spell effects. When you perform a Rest action, you may test [lore]. If you pass, gain 1 Spell',
                value: 3,
                // if spell, lore + 2; if rest, test lore; if lore test >=5, + 1 spell
            },
            asset15: {
                name: 'Carbine Rifle',
                type: 'weapon',
                description: 'Once per round, you may gain [+5 strength] during a Combat Encounter',
                value: 3,
                // combatRoll + 5 strength
            },
            asset16: {
                name: 'King James Bible',
                type: 'tome',
                description: 'You may reroll 1 die when resolving a [will] test during a Combat Encounter. When you perform a Rest action, recover 1 additional Sanity',
                value: 2,
                // if combatEncounter, reroll will test; if rest, sanity + 1
            },
            asset17: {
                name: 'Protect Amulet',
                type: 'item',
                description: 'Gain [+1 will] during Combat Encounters',
                value: 1,
                // combatEncounter will + 1
            },
            asset18: {
                name: 'Puzzle Box',
                type: 'trinket',
                description: 'When you perform a Rest action, you may attempt to open the puzzle box [-2 observation]. If you pass, you may discard this card to gain 1 Artifact',
                value: 3,
                // observation - 2roll; + artifact
            },
            asset19: {
                name: 'Private Care',
                type: 'service',
                description: 'When you gain this card, immediately recover all Health and Sanity',
                value: 2,
                // reset Health and Sanity
            },
            asset20: {
                name: 'Arcane Scholar',
                type: 'ally',
                description: 'Gain [+1 lore]. You may reroll 1 die when resolving a [lore] test',
                value: 2,
                // lore + 1; reroll 1 lore test
            },
            asset21: {
                name: 'Delivery Service',
                type: 'service',
                description: 'When you gain this card, immediately give any number of Item possessions to another investigator on any space. Then discard this card.',
                value: 1,
                // no idea how to code this...
            },
            asset22: {
                name: 'Urban Guide',
                type: 'ally',
                description: 'If you are on a City space, investigators on your space roll 1 additional die when resolving tests except when resolving Other World Encounters',
                value: 4,
                // figure out location spaces i guess
            },
            asset23: {
                name: 'Holy Cross',
                type: 'item',
                description: 'Gain [+2 will] during Combat Encounters',
                value: 2,
                // +2 will combatRolls
            },
            asset24: {
                name: 'Vatican Missionary',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [will] test',
                value: 2,
                // reroll will test
            },
            asset25: {
                name: 'Hired Muscle',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [strength] test',
                value: 2,
                // reroll strength test
            },
            asset26: {
                name: 'Axe',
                type: 'weapon',
                description: 'Gain [+2 strength] during Combat Encounters. You may spend 2 Sanity to reroll any number of dice when resolving a [strength] test during a Combat Encounter',
                value: 2,
                // if combatRoll, strength +2; reroll somehow
            },
            asset27: {
                name: 'Lucky Rabbit\'s Foot',
                type: 'trinket',
                description: 'Once per round, you may reroll 1 die when resolving a test.',
                value: 1,
                // reroll
            },
            asset28: {
                name: 'Personal Assistant',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [influence] test.',
                value: 2,
                // if influenceTest, reroll
            },
            asset29: {
                name: 'Lodge Researcher',
                type: 'ally',
                description: 'If you defeat a Monster during a Combat Encounter, recover 1 Sanity and gain 1 Clue.',
                value: 3,
                // if victory, + 1 sanity & + 1 clue
            },
            asset30: {
                name: 'Charter Flight',
                type: 'service',
                description: 'When you gain this card, immediately move up to 2 spaces. Then discard this card.',
                value: 1,
                // move 2 spaces
            },
            asset31: {
                name: 'Fishing Net',
                type: 'item',
                description: 'You may reroll 1 die when resolving a [strength] test during a Combat Encounter. Reduce the damage of Monsters you encounter by 1 to a minimum of 1.',
                value: 2,
                // if combatRoll, strength test + 1; reduce damage
            },
            asset32: {
                name: 'Wireless Report',
                type: 'service',
                description: 'When you gain this card, immediately give any number of Clues to another investigator on any space. Then discard this card.',
                value: 1,
                // + clue.qty to player
            },
            asset33: {
                name: 'Holy Water',
                type: 'magical', // item
                description: ['You may discard this card to gain [+5 will] and [strength] during a Combat Encounter.', 'Action: You may discard this card to choose an investigator on your space. That investigator gains a Blessed Condition.'],
                value: 2,
                // 
            },
            asset34: {
                name: 'Bull Whip',
                type: 'weapon',
                description: 'Gain [+1 strength] during Combat Encounters. You may reroll 1 die when resolving a [strength] test during a Combat Encounter.',
                value: 1,
                // if combatRoll, + 1 strength; reroll strength
            },
            asset35: {
                name: 'Double-barreled Shotgun',
                type: 'weapon',
                description: 'Gain [+4 strength] during Combat Encounters. Each 6 you roll when resolving a [strength] test during a Combat Encounter counts as 2 success.',
                value: 4,
                // if combatRoll, +4 strength; if combatRoll == 6, + 2 rolls
            },
            asset36: {
                name: 'Sanctuary',
                type: 'service',
                description: 'When you gain this card, you may immediately discard 1 Condition. Then discard this card.',
                value: 2,
                // remove condition
            },
            asset37: {
                name: '.45 Automatic',
                type: 'weapon',
                description: 'Gain [+3 strength] during Combat Encounters.',
                value: 2,
                // if combatRoll, strength + 3
            },
            asset38: {
                name: 'Spirit Dagger',
                type: 'magical weapon', //item
                description: 'Gain [+1 will] and [+2 strength] during Combat Encounters',
                value: 2,
                // if combatRoll, will ++ & strength ++
            },
            asset39: {
                name: 'Whiskey',
                type: 'item',
                description: 'You may discard this card to prevent an investigator on your space from losing up to 2 Sanity.',
                value: 1,
                // if player - 2 Sanity, + 2 sanity to player
            },
            asset40: {
                name: 'Bandages',
                type: 'item',
                description: 'You may discard this card to prevent an investigator on your space from losing up to 2 Health.',
                value: 1,
                // if player - 2 health, + 2 health to player
            },

        }
        // stores all information regarding inventory for the character use
        this.inventory = {}
        // stores all information regarding the game counter
        this.counterNumber = {}
    }
    init() {
        // leave your functions here...

        // this.startGame();
        this.activeGame();
        // this.loseGame();
        this.removeDie();
        this.rollDie();
        this.resetDie();
        // this.displayEncounter();
        this.characterLoad();
        this.selectCharacter();
        // this.storeLoad();
        // this.displayMonster();
        // this.storedMonster();
        this.restAction();

        //gameOver check Review2

    }
    // this should keep track of the game turn counter
    // turnCounter() {
    //     // initialize the display options
    //     let count = 20;
    //     let displayCount = document.getElementById('turnCounter');
    //     displayCount.innerHTML = count;
    //     while (count > 0) {
    //         activeGameState = true;
    //         console.log('Game is active')
    //     }
    // }
    // do you mean that I need to move this method into the constructor?
    activeGame() {
        let count = 21;
        let activeGameState;
        let displayCount = document.getElementById('turnCounter');
        let turnOverBtn = document.getElementById('turnCounterButton');
        let monsterBox = document.getElementById('monsterBox')
        let sceneDisplay = document.getElementById('displayBox')
        let monsterAppears = "a monster has appeared"

        // access character information
        // let clueBox = document.getElementById('clueBox');
        // let clues = 0;
        // clueBox.innerHTML = clues;

        displayCount.innerHTML = count;
        while (count > 0) {
            activeGameState = true
            console.log('Game is still active')

            break;
        }
        
        
        turnOverBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(count);
            displayCount.innerHTML = count;
            count--;
            this.displayEncounter();
            // if (count == 0) {
            //     console.log('Game over')
            //     // displayCount.innerHTML = 'GAME OVER'
            // }
            // if (count % 3) {
            //     console.log(`no monster here`)
            //     // displayScene
            //     this.displayEncounter();
            // } else {
            //     // this.displayMonster();
            //     console.log(`monster on count#: ${count}`)
            //     // let's not worry about the monsters right now. this project is ongoing
            //     // this.storedMonster();
            // }
            // this.displayEncounter();
            this.resetDie();

        })
    }
    // losing conditions to end the game
    loseGame() {
        /**What are the conditions to lose?
         * 1) Health == 0;
         * 2) Sanity == 0;
         * 3) TurnCOunt == 0;
         * if (health == 0 || sanity == 0 || turnCount == 0){
         *      endGame
         *      }
         */
    }
    // rest box should be helpful
    restAction() {
        // please don't be stupid...
        let restCharacter = document.getElementById('restBox');
        restCharacter.addEventListener('click', (e) => {
            e.preventDefault();
            

            // console.log(this.currentCharacter.health)
            this.currentCharacter.health++
            this.currentCharacter.sanity++
            this.updateCharacter();
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
                die.style.display = 'none';
                die.innerText = 0;
            })
        })
    }
    // this function allows the die to roll and appear in the boxes
    rollDie() {
        let rollDie = document.getElementById('dieRollBtn'),
            resetDie = document.getElementById('resetRollBtn');
        let die1 = document.getElementById('die1'),
            die2 = document.getElementById('die2'),
            die3 = document.getElementById('die3'),
            die4 = document.getElementById('die4');
        let dice = [
            die1, die2, die3, die4
        ];
        let passBox = document.getElementById('passBox'),
            failBox = document.getElementById('failBox');
        let clues = document.getElementById('clueBox');

        rollDie.addEventListener('click', (e) => {
            e.preventDefault();
            dice.forEach(die => {
                if (die.style.display !== 'none') {
                    die.innerText = Math.ceil(Math.random() * 6)
                    console.log(die.innerText)
                } else {
                    die.innerText = 0;
                }
                // // 1/14/22 not the prettiest thing but.... Maybe just set the die to reset on the next turn...
                // if (die.style.display == 'none') {
                //     die.style.display = 'block'
                // }
            })
            // console.log('this works')
            // dummy

            // i need to set a timeout on this or something... have it reset when i press the button
            if (die1.innerText >= 5 || die2.innerText >= 5 || die3.innerText >= 5 || die4.innerText >= 5) { //this is working
                // console.log('SUCCESS')
                passBox.style.backgroundColor = 'chartreuse';
                this.successRoll();
                // this.currentCharacter.clues++
                // this.updateCharacter();

            } else {
                // console.log('BIG LOSS')
                failBox.style.backgroundColor = 'crimson';
                this.failureRoll();
                // 1/2022 i hate you keitron. you need to stop having ethan drag you through this project.......
                // this.currentCharacter.health--
                // this.currentCharacter.sanity--
                // this.updateCharacter();
            }
            // console.log(die1.innerText)
            return
        })
    }
    // success method
    successRoll() {
        // i have no clue what to do here
        this.currentCharacter.clues++
        this.updateCharacter();
    }
    failureRoll() {
        this.currentCharacter.health--
        this.currentCharacter.sanity--
        this.updateCharacter()
    }
    // failure method
    // this will reset die to blank boxes
    resetDie() {
        let resetDie = document.getElementById('resetRollBtn');
        let die1 = document.getElementById('die1'),
            die2 = document.getElementById('die2'),
            die3 = document.getElementById('die3'),
            die4 = document.getElementById('die4');
        let dice = [die1, die2, die3, die4];

        // resetDie.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     die1.innerText = '';
        //     die2.innerText = '';
        //     die3.innerText = '';
        //     die4.innerText = '';
        //     passBox.style.backgroundColor = '';
        //     failBox.style.backgroundColor = '';

        //     // success... this works 12/31
        // })
        // let's try this
        die1.innerText = '';
        die2.innerText = '';
        die3.innerText = '';
        die4.innerText = '';
        passBox.style.backgroundColor = '';
        failBox.style.backgroundColor = '';
        die1.style.display = 'block';
        die2.style.display = 'block';
        die3.style.display = 'block';
        die4.style.display = 'block';
    }


    // display random encounters?
    // 1/8 make sure that you figure out how to call on MULTIPLE encounters that are saved
    displayEncounter() { //is this where the constructor comes in?
        let randomEncounter = document.getElementById('changeSceneBtn'),
            sceneDisplay = document.getElementById('displayBox');
        let sceneChange;
        let monsterAppears = "a monster has appeared"
        
        // let search = sceneChange;
        // sceneChange = encounters[Object.keys(encounters)[Math.floor(Math.random() * Object.keys(encounters).length)]];
        // sceneDisplay.innerText = sceneChange;
        // 1/22/22 delete the unnecessary
        // create randomizer
        let randomizer = Math.ceil(Math.random() * 3)
        for (const key in this.encounters) {
            this.currentEncounter = this.encounters[key]
            // // i know this works
            if (randomizer === this.currentEncounter.id) {
                console.log(this.currentEncounter.scene)
                sceneDisplay.innerText = this.currentEncounter.scene;
            }
        }
    }
    // add method to various encounters?
    // display monster image
    storedMonster() {
        /**i can't make the image display but i can at least get the stats */
        let monsterDisplay = document.getElementById('monsterBox');
        // let showMonsterBtn = document.getElementById('showMonster');

        let randomizer = Math.ceil(Math.random() * 10)
        console.log(randomizer)
        
        for (const key in this.monsters) {
            this.currentMonster = this.monsters[key]
            // 1/23/22 copied information from html for monster display
            if (randomizer === this.currentMonster.id) {
                console.log(this.currentMonster)
            
            // console.log(this.currentMonster)
            monsterDisplay.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div class="monster-display">
                        <h3>Monster</h3>
                        <div class="monster-image" id="monsterImage">
                            <img src="${this.currentMonster.media}" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="monster-stats">
                        <h3>stats</h3>
                        <div class="stat-display" id="statDisplay">
                            <h9 class="monster-health">Health: <span id="monsterHealth">${this.currentMonster.health}</span></h4>
                            <h9 class="monster-sanity">Sanity: <span id="monsterSanity">${this.currentMonster.sanity}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
            // is this where i use the other stored function??
            }
            // this.activeGame();
        }
    }
    updateMonster() {
        // paste information from storedMonster()
        monsterDisplay.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div class="monster-display">
                        <h3>Monster</h3>
                        <div class="monster-image" id="monsterImage">
                            <img src="${this.currentMonster.media}" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="monster-stats">
                        <h3>stats</h3>
                        <div class="stat-display" id="statDisplay">
                            <h9 class="monster-health">Health: <span id="monsterHealth">${this.currentMonster.health}</span></h4>
                            <h9 class="monster-sanity">Sanity: <span id="monsterSanity">${this.currentMonster.sanity}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    characterLoad() {
        // load characters on page
        alert('Pick your character')

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
            // Making container position relative for the filter. This is to make it so the event we capture is always the wrapper that contains the id with they key.
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
                                <div class="clues-box" id="clueBox">${character.clues}</div>
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
        // moves the selected character to the main game screen

        let heros = document.querySelectorAll('.hero')


        heros.forEach(hero => {
            hero.addEventListener('click', (e) => {
                // Capture the id that we added to the filter. This is the key
                let selected = e.target.id;
                this.currentCharacter = this.characters[selected]
                this.updateCharacter();
                //     characterSection.innerHTML = `
                //         <div class="container">
                // <div class="row no-gutters">
                // <div class="col-md-4">
                //     <img src="${this.characters[selected].img}" alt="${this.characters[selected].name}" class="img-fluid this.characters[selected]-img">
                // </div>
                // <div class="col-md-8">
                //     <div class="card-body">
                //         <h5 class="card-title">${this.characters[selected].name}</h5>
                //         <p class="card-text"><em>"${this.characters[selected].id}"</em></p>
                //         <ul class="nav card-stats">
                //             <li class="stats-box" id="stats1"><span id="lore">${this.characters[selected].lore}</span></li>
                //             <li class="stats-box" id="stats2"><span id="influence">${this.characters[selected].influence}</span></li>
                //             <li class="stats-box" id="stats3"><span id="observation">${this.characters[selected].observation}</span></li>
                //             <li class="stats-box" id="stats4"><span id="strength">${this.characters[selected].strength}</span></li>
                //             <li class="stats-box" id="stats5"><span id="will">${this.characters[selected].will}</span></li>
                //         </ul>
                //         <div class="container">
                //             <div class="row">
                //                 <div class="col-4">
                //                     <div class="health-box">${this.characters[selected].health}</div>
                //                 </div>
                //                 <div class="col-4">
                //                     <div class="sanity-box">${this.characters[selected].sanity}</div>
                //                 </div>
                //                 <div class="col-4">
                //                     <div class="clues-box" id="clueBox"></div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                //         `
            })
        })
        // do a forEach => forEach item in hero addEventListener
        // console.log('Are you working') // yes you are working
    }
    // updates information for character selection
    updateCharacter() {
        // paste info from selectCharacter
        characterSection.innerHTML = `
                    <div class="container">
            <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${this.currentCharacter.img}" alt="${this.currentCharacter.name}" class="img-fluid this.currentCharacter-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${this.currentCharacter.name}</h5>
                    <p class="card-text"><em>"${this.currentCharacter.id}"</em></p>
                    <ul class="nav card-stats">
                        <li class="stats-box" id="stats1"><span id="lore">${this.currentCharacter.lore}</span></li>
                        <li class="stats-box" id="stats2"><span id="influence">${this.currentCharacter.influence}</span></li>
                        <li class="stats-box" id="stats3"><span id="observation">${this.currentCharacter.observation}</span></li>
                        <li class="stats-box" id="stats4"><span id="strength">${this.currentCharacter.strength}</span></li>
                        <li class="stats-box" id="stats5"><span id="will">${this.currentCharacter.will}</span></li>
                    </ul>
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <div class="health-box">${this.currentCharacter.health}</div>
                            </div>
                            <div class="col-4">
                                <div class="sanity-box">${this.currentCharacter.sanity}</div>
                            </div>
                            <div class="col-4">
                                <div class="clues-box" id="clueBox">${this.currentCharacter.clues}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    `


    }
    // this function will display the items in the store
    storeLoad() {
        // establish store count
        let storeCount = 0;
        // let storeRow = document.getElementById('storeRow');
        let storeRow = document.getElementById('storeListRow');
        storeRow.innerHTML = "" // moves a new item into the storeRow
        const assetList = document.createElement('ul');
        assetList.className = "nav asset-list justify-content-around"

        for (const key in this.assets) {
            const asset = this.assets[key]
            const listItem = document.createElement('li');
            listItem.innerText = asset.name
            listItem.className = "list-item"
            listItem.setAttribute('data-key', key)
            listItem.addEventListener('click', (e) => {
                this.storePurchase(e)
            })

            if (storeCount < 4) {
                assetList.appendChild(listItem);
            } else {
                // console.log('that\'s enough')
                // console.log(asset.name)
            }
            storeCount++;
            // console.log(asset)
        }

        storeRow.append(assetList)
        // do i have to reinitialize everything?

    }
    // this funciton will move items from the store into the inventory box
    storePurchase(e) {
        // i want to make each item clickable in order to move them from the store box into the inventory box
        // let card = document.getElementById(assetCard);
        // let cards = document.querySelectorAll('.card');

        console.log(e.target.getAttribute('data-key'))
        let itemKey = e.target.getAttribute('data-key')
        this.inventory[itemKey] = this.assets[itemKey]
        // this.inventory.push(this.assets[itemKey])
        delete this.assets[itemKey]
        console.log(this.inventory)
        let inventoryRow = document.getElementById('inventoryListRow');
        inventoryRow.innerHTML = '';
        for (const key in this.inventory) {
            let listItem = document.createElement('li');
            listItem.innerText = this.inventory[key].name
            listItem.className = "list-item"
            listItem.setAttribute('data-key', key)
            listItem.addEventListener('click', (e) => {
                // this.storePurchase(e)
                console.log('inventory item')
            })
            inventoryRow.appendChild(listItem);
        }


        this.storeLoad();
    }

    gameOver() {
        let gameOver = document.getElementById('mainGameOver');
        gameOver.className = "display"
    }
}
// create a turn counter?

let action = new Game();
action.init()

// this section will be outside of init() for now.

// 1/10/22 ok. so everything is inside the init(). you are close to being a big boy...
// 1/11/22 So, I want to use import.js for this portion to show personal growth. How do I do that? Scratch that idea. NO IMPORTING

// make the pickCharacter button work and shift d-none
// it is going to take some time to work on this one
