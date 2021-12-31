// this has to make use of init() instead of a bunch of event listeners...

class Game {
    // for some reason, getting rid of the constructor fixed it?? i don't know why
    init() {
        // leave your functions here...
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
        let plusDie = document.getElementById('increaseDie'),
            minusDie = document.getElementById('decreaseDie');

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
    // display random encounters?
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
}

let action = new Game()
action.init()