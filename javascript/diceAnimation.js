// I want to make a dice do simple animation

// What exactly do I need to do to make that happen?

// Get random number intervals?

ranNum = Math.floor( 1 + Math.random() * 6 ); // ranNum is the variable storing Math.floor?

var dice = document.getElementsByClassName("die");
dice.src=ranNum+".png";

function AniDice()
{
myVar=setInterval(rolldice,20)
}

function rolldice()
{
var ranNum = Math.floor( 1 + Math.random() * 6 );
var dice = document.getElementByClassName("die");
dice.src=ranNum+".png";
}
function stopDice()
{clearInterval(myVar);}

// this is digital

function AniDice()
{
MyVar=setInterval(rolldice,20)
}

function rolldice()
{
var ranNum = Math.floor( 1 + Math.random() * 6 );
document.getElementById("dice").innerHTML = ranNum;

}
function stopDice()
{clearInterval(MyVar);}