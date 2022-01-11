// this has to make use of init() instead of a bunch of event listeners... 1/11 good work, keitron

class Game {
    // for some reason, getting rid of the constructor fixed it?? i don't know why
    init() {
        // leave your functions here...
        this.removeDie();
        this.rollDie();
        this.resetDie();
        this.displayEncounter();

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

}

let action = new Game()
action.init()

// this section will be outside of init() for now.

// 1/10/22 ok. so everything is inside the init(). you are close to being a big boy...
// 1/11/22 So, I want to use import.js for this portion to show personal growth. How do I do that?
