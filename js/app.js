// this has to make use of init() instead of a bunch of event listeners... 1/11 good work, keitron

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
        // stores all information regarding random encounters
        this.encounters = {
            // 1/12/22 Not happy about this but I may need to change up how I call on these encounters....
            encounter01: 'You wander through the aisles of an antique book store. Although many extremely rare books can be found here, the organizational system is almost impossible to decipher [-1 lore]. If you pass, you\'re able to track down a hidden gem; gain 1 Tome Artifact.',
            // if encounter01, test lore - 1. if 'success', gain arcane.Math.random()*arcanes.length
            encounter02: 'The police report that people are being abducted by a monster dwelling in the sewer system. Wandering through the underground tunnels you are suddenly attacked by a deep one [strength]! If you pass, you defeat the creature and rescue its hostage; gain 1 random Ally Asset from the deck. If you fail, lose 1 Health from the struggle.',
            // test strength. if success, gain asset[ally]; add to inventory
            encounter03: 'Corrupt members of the police force pressure you for a bribe. You speak to some people you know to take care of the problem [influence]. If you pass, the police are apologetic and share their leads with you; spawn 1 Clue. If you fail, gain a Debt Condition to pay the bribe.',
            // test lore; if success, clue + 1 else condition[debt]
            encounter04: 'Legends say that this cemetery is haunted. Exploring the headstones, you encounter an angry specter, eager to share his story. The experience is nerve-wracking, but you try to listen [will]. If you pass, the spirit gratefully fades from view; recover 2 Sanity. If you fail, his desperate voice echoes in your mind; gain a Paranoia Condition.',
            // test will; if success, sanity + 2 else condition[paranoia
            encounter05: 'The shop is robbed while you are browsing! You attempt to fend off the thieves [strength]. If you pass, the store owner is very gracious; gain 1 Item Asset from the reserve or 1 random Item Asset from the deck. If you fail, lose 1 Health and discard 1 Item possession.',
            // test strength; if success, asset random else health -1
            encounter06: 'The police ask for your help investigating a series of ritual killings. The grisly crime scenes threaten to overwhelm you with chills and nausea [will]. If you pass, you manage to examine the scene and find significant information; spawn 1 Clue. If you fail, you can\'t endure the horror; lose 2 Sanity.',
            // test will; if success, clue + 1 else sanity - 2
            encounter07: 'The Syndicate is rengaged in a gang war with local thugs and is under intense legal scrutiny. You try to trade your political clout for assistance [influence]. If you pass, gain 1 Service Asset from the reserve or 1 random Service Asset from the deck.',
            // test influence; if success inventory + asset.service
            encounter08: 'A group of intimidating Syndicate members demand you pay them for protection. You offer the well-dressed men what you can afford [influence]. If you fail, they make sure you meet with an accident; gain a Leg Injury Condition.',
            // figure it out
            encounter09: 'A friendly game of cards ends with a very high-stakes hand [influence]. If you pass, you amaze everyone watching and find a new friend; gain 1 random Ally Asset from the deck. If you fail, gain a Debt Condition to cover the loss.',
            // figure it out
            encounter10: 'A shady figure offers to sell you a weapon, no questions asked. You speak with him to detrmine his motives [influence]. If you pass, gain 1 random Weapon Asset from the deck. If you fail, the undercover policeman arrests you; gain a Detained Condition.',
            // figure it out
            encounter11: 'You help a young woman search the countryside for her uncle [observation]. If you pass, you find the eccentric, old man, and he gives you a gift for helping his niece; gain 1 Tome Artifact from the deck',
            // test observation, if success += artifact
            encounter11: 'In the middle of the night, a feral beast rips apart your camp and attacks you [strength]! If you pass, you feel invincible; improve [will]. If you fail, lose 1 Health and gain a Leg Injury Condition.',
            // test strength; if success +1 will; if fail, -1 health && +injury
            encounter12: 'Far from any road or village, you find a shallow grave marked only with an arcane symbol. As you dig, a growing dread weakens your resolve [will]. If you pass, you find a charred corpse clutching a journal; gain 1 Clue or improve [lore]. If you fail, you run from the area; gain a Cursed Condition.',
            // test will; if succes +1 clue || +1 lore
            encounter13: 'According to your map, you can make a detour to visit a lake purported to have restorative powers. You may become Delayed to recover 3 Sanity or discard a Madness Condition.',
            // later
            encounter14: 'You scrape away years of moss and lichen from the stone altar, uncovering a series of prehistoric symbols. You think you can interpret the carvings [lore]. If you pass, gain 1 Clue or 1 Spell.',
            // am i even doing spells?
            encounter15: 'Extreme conditions have left you fevered and delirious. You force yourself to keep moving, putting a terrible strain on your body [strength]. If you fail, the fever grows worse and you begin seeing things; gain a Hallucinations Condition.',
            //
            encounter16: 'You find a primitive painting on the wall of a cave and decide to explore the subterranean depths that lie beyond. The dark, constricting passages create a terrible sense of claustrophobia [-1 will]. If you pass, gain 1 Artifact left by an ancient civilization. If you fail, lose 2 Sanity.',
            // test will -1; if success, +1 artifact; if fail, -2 sanity
            encounter17: 'The terrain ahead of you looks impassable, but going around would take too long. You\'ll need to find some way to move forward [observation]. If you pass, you discover a path; move 1 space. If you fail, you trip over the uneven ground; lose 1 Health and gain a Leg Injury Condition.',
            encounter18: 'Your map is gone, and you must navigate based on your own observations [observations]. If you pass, you confidently progress on your journey; move 1 space. If you fail, you travel in circles; you become Delayed and gain a Madness Condition.',
            // test observation
            encounter19: 'The ground slopes upward so uniformly that you suspect a structure exists unerneath. You search for a buried entrance to claim the treasures found inside. You may spend 1 Clue to gain 1 Artifact.',
            encounter20: 'Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground [lore]. If yo pass, the next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve [influence]. If you fail, gain a Cursed Condition.',
            encounter21: 'The ship ahead of you seemed abandoned, but now you see that it is crewed entirely by ghostly figures. You try to discern what ship this had once been and what happened to it [lore]. If you pass, the spectral captain grants you aid; gain 1 Clue or improve [will]. If you fail, gain a Cursed Condition.',
            encounter22: 'The captain of the ship invites you to dine with him. You have the feeling that he\'s had some experience with unearthly creatures and try to convince him to share his stories [influence]. If you pass, his tale includes highly-significant details; spawn 1 Clue.',
            encounter23: 'Your ship becomes lost in a dense fog bank, terrifying the superstitious crew. When the mist finally clears, you\'ve somehow traveled hundreds of miles. Move 1 space and lose 1 Sanity.',
            encounter24: 'One of the sailors speaks in a strange, ancient dialect. You try to communicate with the man based on obscure languages you have studied [lore]. If you pass, the peculiar man teaches you a chant; gain 1 Spell. If you fail, he growls an unintelligible phrase; gain a Cursed Condition.',
            encounter25: 'One of the sailors is singing an old sea shanty about a woman searching for her dead husband. The story seems familiar to you [-1 lore]. If you pass, you recognize it as the story of Isis, and the sailor teaches you the song; gain a Blessed Condition and recover 1 Health and 1 Sanity.',
            encounter26: 'You\'re awakened in the night by gunfire. Deep ones have climbed aboard the ship and are trying to sabotage the engine. You do your best to help the crew fight them [strength]. If you fail, the engine is destroyed before you finish off the sea creatures, and you must wait to be rescued; become Delayed.',
            encounter27: 'A large wave washes across the deck, and a prized possession slips from your fingers. You dive into the water, holding your breath as long as you can to recover the object before it sinks out of reach [will]. If you fail, discard 1 Item possession.',
            encounter28: 'You discover a signal fire on a small island, but don\'t find any people. You search the beach for signs of life [observation]. If you pass, you spot a person hiding behind large stones; gain 1 Clue and 1 random Ally Asset from the deck. If you fail, the mystery remains unsolved; gain a Paranoia Condition.',
            encounter29: 'A sudden storm descends upon you and strong winds whip around your vessel. Huge waves toss your ship around like a toy, and you are thrown to the deck repeatedly. Lose 1 Sanity and gain a Back Injury Condition.',
            encounter30: 'The captain tells you that you are passing over the site of a famous shipwreck. You can use the ship\'s deep-sea diving equipment to explore the wreckage. You may become Delayed to gain 1 Artifact.'
        }
        this.monsters = {
            monster01: {
                name: 'Cthulhu',
                health: 10,
                sanity: 8,
                media: 'media/Monsters/cthulhu.jpg',
            },
            monster02: {
                name: 'Cultist',
                health: 3,
                sanity: 2,
                media: 'media/Monsters/monster10.jpg',
            },
            monster03: {
                name: 'Wriggler',
                health: 2,
                sanity: 4,
                media: 'media/Monsters/monster1.jpg'
            },
            monster04: {
                name: 'Many Beasts',
                health: 3,
                sanity: 1,
                media: 'media/Monsters/monster2.jpg'
            },
            monster05: {
                name: 'Shambler',
                health: 2,
                sanity: 2,
                media: 'media/Monsters/monster3.jpg'
            },
            monster06: {
                name: 'Ancient One',
                health: 5,
                sanity: 5,
                media: 'media/Monsters/monster4.jpg'
            },
            monster07: {
                name: 'Deep One',
                health: 2,
                sanity: 1,
                media: 'media/Monsters/monster5.jpg'
            },
            monster08: {
                name: 'Nyerlatothep',
                health: 4,
                sanity: 4,
                media: 'media/Monsters/monster6.jpg'
            },
            monster09: {
                name: 'Black Sheep',
                health: 3,
                sanity: 3,
                media: 'media/Monsters/monster9.jpg'
            },
            monster01: {
                name: 'Shub Niggurath',
                health: 7,
                sanity: 7,
                media: 'media/Monsters/monster7.jpg'
            }
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
        //gameOver check Review2

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
                // die.style.display = 'none';
                die.innerText = 0;
            })
        })
    }
    // display random encounters?
    // 1/8 make sure that you figure out how to call on MULTIPLE encounters that are saved
    displayEncounter() { //is this where the constructor comes in?
        let randomEncounter = document.getElementById('changeSceneBtn'),
            encounterDisplay = document.getElementById('displayBox');
        let sceneChange;
        let span = document.getElementById('strength');



        randomEncounter.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(this.encounters)
            let encounters = {
                encounter01: 'You wander through the aisles of an antique book store. Although many extremely rare books can be found here, the organizational system is almost impossible to decipher [-1 lore]. If you pass, you\'re able to track down a hidden gem; gain 1 Tome Artifact.',
                // if encounter01, test lore - 1. if 'success', gain arcane.Math.random()*arcanes.length
                encounter02: 'The police report that people are being abducted by a monster dwelling in the sewer system. Wandering through the underground tunnels you are suddenly attacked by a deep one [strength]! If you pass, you defeat the creature and rescue its hostage; gain 1 random Ally Asset from the deck. If you fail, lose 1 Health from the struggle.',
                // test strength. if success, gain asset[ally]; add to inventory
                encounter03: 'Corrupt members of the police force pressure you for a bribe. You speak to some people you know to take care of the problem [influence]. If you pass, the police are apologetic and share their leads with you; spawn 1 Clue. If you fail, gain a Debt Condition to pay the bribe.',
                // test lore; if success, clue + 1 else condition[debt]
                encounter04: 'Legends say that this cemetery is haunted. Exploring the headstones, you encounter an angry specter, eager to share his story. The experience is nerve-wracking, but you try to listen [will]. If you pass, the spirit gratefully fades from view; recover 2 Sanity. If you fail, his desperate voice echoes in your mind; gain a Paranoia Condition.',
                // test will; if success, sanity + 2 else condition[paranoia
                encounter05: 'The shop is robbed while you are browsing! You attempt to fend off the thieves [strength]. If you pass, the store owner is very gracious; gain 1 Item Asset from the reserve or 1 random Item Asset from the deck. If you fail, lose 1 Health and discard 1 Item possession.',
                encounter06: 'The police ask for your help investigating a series of ritual killings. The grisly crime scenes threaten to overwhelm you with chills and nausea [will]. If you pass, you manage to examine the scene and find significant information; spawn 1 Clue. If you fail, you can\'t endure the horror; lose 2 Sanity.',
                // test will; if success, clue + 1 else sanity - 2
                encounter07: 'The Syndicate is rengaged in a gang war with local thugs and is under intense legal scrutiny. You try to trade your political clout for assistance [influence]. If you pass, gain 1 Service Asset from the reserve or 1 random Service Asset from the deck.',
                // test influence; if success inventory + asset.service
                encounter08: 'A group of intimidating Syndicate members demand you pay them for protection. You offer the well-dressed men what you can afford [influence]. If you fail, they make sure you meet with an accident; gain a Leg Injury Condition.',
                // figure it out
                encounter09: 'A friendly game of cards ends with a very high-stakes hand [influence]. If you pass, you amaze everyone watching and find a new friend; gain 1 random Ally Asset from the deck. If you fail, gain a Debt Condition to cover the loss.',
                // figure it out
                encounter10: 'A shady figure offers to sell you a weapon, no questions asked. You speak with him to detrmine his motives [influence]. If you pass, gain 1 random Weapon Asset from the deck. If you fail, the undercover policeman arrests you; gain a Detained Condition.',
                // figure it out
                encounter11: 'You help a young woman search the countryside for her uncle [observation]. If you pass, you find the eccentric, old man, and he gives you a gift for helping his niece; gain 1 Tome Artifact from the deck',
                // test observation, if success += artifact
                encounter11: 'In the middle of the night, a feral beast rips apart your camp and attacks you [strength]! If you pass, you feel invincible; improve [will]. If you fail, lose 1 Health and gain a Leg Injury Condition.',
                // test strength; if success +1 will; if fail, -1 health && +injury
                encounter12: 'Far from any road or village, you find a shallow grave marked only with an arcane symbol. As you dig, a growing dread weakens your resolve [will]. If you pass, you find a charred corpse clutching a journal; gain 1 Clue or improve [lore]. If you fail, you run from the area; gain a Cursed Condition.',
                // test will; if succes +1 clue || +1 lore
                encounter13: 'According to your map, you can make a detour to visit a lake purported to have restorative powers. You may become Delayed to recover 3 Sanity or discard a Madness Condition.',
                // later
                encounter14: 'You scrape away years of moss and lichen from the stone altar, uncovering a series of prehistoric symbols. You think you can interpret the carvings [lore]. If you pass, gain 1 Clue or 1 Spell.',
                // am i even doing spells?
                encounter15: 'Extreme conditions have left you fevered and delirious. You force yourself to keep moving, putting a terrible strain on your body [strength]. If you fail, the fever grows worse and you begin seeing things; gain a Hallucinations Condition.',
                //
                encounter16: 'You find a primitive painting on the wall of a cave and decide to explore the subterranean depths that lie beyond. The dark, constricting passages create a terrible sense of claustrophobia [-1 will]. If you pass, gain 1 Artifact left by an ancient civilization. If you fail, lose 2 Sanity.',
                // test will -1; if success, +1 artifact; if fail, -2 sanity
                encounter17: 'The terrain ahead of you looks impassable, but going around would take too long. You\'ll need to find some way to move forward [observation]. If you pass, you discover a path; move 1 space. If you fail, you trip over the uneven ground; lose 1 Health and gain a Leg Injury Condition.',
                encounter18: 'Your map is gone, and you must navigate based on your own observations [observations]. If you pass, you confidently progress on your journey; move 1 space. If you fail, you travel in circles; you become Delayed and gain a Madness Condition.',
                // test observation
                encounter19: 'The ground slopes upward so uniformly that you suspect a structure exists unerneath. You search for a buried entrance to claim the treasures found inside. You may spend 1 Clue to gain 1 Artifact.',
                encounter20: 'Past where your campfire allows you to see, you hear voices chanting. You try to draw a protective sigil in the ground [lore]. If yo pass, the next morning you find evidence of cult activity that you can use to identify the cult members; gain 1 Clue or improve [influence]. If you fail, gain a Cursed Condition.',
                encounter21: 'The ship ahead of you seemed abandoned, but now you see that it is crewed entirely by ghostly figures. You try to discern what ship this had once been and what happened to it [lore]. If you pass, the spectral captain grants you aid; gain 1 Clue or improve [will]. If you fail, gain a Cursed Condition.',
                encounter22: 'The captain of the ship invites you to dine with him. You have the feeling that he\'s had some experience with unearthly creatures and try to convince him to share his stories [influence]. If you pass, his tale includes highly-significant details; spawn 1 Clue.',
                encounter23: 'Your ship becomes lost in a dense fog bank, terrifying the superstitious crew. When the mist finally clears, you\'ve somehow traveled hundreds of miles. Move 1 space and lose 1 Sanity.',
                encounter24: 'One of the sailors speaks in a strange, ancient dialect. You try to communicate with the man based on obscure languages you have studied [lore]. If you pass, the peculiar man teaches you a chant; gain 1 Spell. If you fail, he growls an unintelligible phrase; gain a Cursed Condition.',
                encounter25: 'One of the sailors is singing an old sea shanty about a woman searching for her dead husband. The story seems familiar to you [-1 lore]. If you pass, you recognize it as the story of Isis, and the sailor teaches you the song; gain a Blessed Condition and recover 1 Health and 1 Sanity.',
                encounter26: 'You\'re awakened in the night by gunfire. Deep ones have climbed aboard the ship and are trying to sabotage the engine. You do your best to help the crew fight them [strength]. If you fail, the engine is destroyed before you finish off the sea creatures, and you must wait to be rescued; become Delayed.',
                encounter27: 'A large wave washes across the deck, and a prized possession slips from your fingers. You dive into the water, holding your breath as long as you can to recover the object before it sinks out of reach [will]. If you fail, discard 1 Item possession.',
                encounter28: 'You discover a signal fire on a small island, but don\'t find any people. You search the beach for signs of life [observation]. If you pass, you spot a person hiding behind large stones; gain 1 Clue and 1 random Ally Asset from the deck. If you fail, the mystery remains unsolved; gain a Paranoia Condition.',
                encounter29: 'A sudden storm descends upon you and strong winds whip around your vessel. Huge waves toss your ship around like a toy, and you are thrown to the deck repeatedly. Lose 1 Sanity and gain a Back Injury Condition.',
                encounter30: 'The captain tells you that you are passing over the site of a famous shipwreck. You can use the ship\'s deep-sea diving equipment to explore the wreckage. You may become Delayed to gain 1 Artifact.'
            }
            // randomize the events
            sceneChange = encounters[Object.keys(encounters)[Math.floor(Math.random() * Object.keys(encounters).length)]];

            console.log(encounters[Object.keys(encounters)[Math.floor(Math.random() * Object.keys(encounters).length)]]);
            encounterDisplay.innerHTML = sceneChange;
            // it is starting to work in my favor; now i need to include span id
            if (sceneChange.includes("[strength]")) {
                console.log('This text contains the word strength')
                // stats-box.style.borderColor = 'red';
            };
            // let randomEncounter = (this.encounters[Object.keys(this.encounters)[Math.floor(Math.random() * Object.keys(this.encounters).length)]])

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
        // moves the selected character to the main game screen

        let heros = document.querySelectorAll('.hero')


        heros.forEach(hero => {
            hero.addEventListener('click', (e) => {
                // Capture the id that we added to the filter. This is the key
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
        // console.log('Are you working') // yes you are working
    }
    // display monster&stats
    displayMonster() {
        // i want the information o the monsters to display here
        let monsterDisplay = document.getElementById('monsterImage'),
            statDisplay = document.getElementById('statDisplay');
        let randomEncounter = document.getElementById('changeSceneBtn'),

        
    }
    // create a turn counter?
}

let action = new Game();
action.init()

// this section will be outside of init() for now.

// 1/10/22 ok. so everything is inside the init(). you are close to being a big boy...
// 1/11/22 So, I want to use import.js for this portion to show personal growth. How do I do that? Scratch that idea. NO IMPORTING

// make the pickCharacter button work and shift d-none
// it is going to take some time to work on this one

let start = document.getElementById('pickCharacter'),
    mainPage = document.getElementById('mainGamePage');
characterSelectionPage = document.getElementById('mainCharacterSelection')

start.addEventListener('click', () => {
    console.log('this works too')
    characterSelectionPage.className = "d-none"
    mainPage.className = "display"
})