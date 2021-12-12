// let's start from the beginning because it has been a very long time

console.log('start')

var tester = Math.ceil(Math.random()*6)

function testNum() {
    if (tester >= 5) {
        console.log(`You rolled a ${tester}. SUCCESS`)
    } else {
        console.log(`You failed because of that ${tester}`)
    }
    return;
}
testNum()
// easy enough i guess

// so i am now able to make the numbers display in the box with this function (incorporate this function into a future class)
let die1 = document.getElementById('die1'),
    die2 = document.getElementById('die2'),
    rolls = 0,
    battleResult = document.getElementById('battleResult'),
    testBtn = document.getElementById('testBtn');
// nested if statement didn't work
    testBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        die1.innerText = Math.ceil(Math.random() * 6);
        // die2.innerText = Math.ceil(Math.random()*6);
        rolls++

        if (die1 >= 4) { //parse int??
            battleResult.innerText = `Excellent, a ${die1}`
        } else {
            battleResult.innerText = 'keep trying'
            return
        }
    })
// this eventListener now makes it possible to test two numbers. i will move on to the next thing
// this isn't working for some reason. maybe placing these in an object will be better....