// I want to make a dice do simple animation


// What exactly do I need to do to make that happen?



// How the hell do i animate the die??

var ranNum = Math.floor( 1 + Math.random() * 6 );
var dice = document.getElementsById("die");
dice.src=ranNum+".png";
}

function AniDice()
{
myVar=setInterval(rolldice,20)
}

function rolldice()
{
var ranNum = Math.floor( 1 + Math.random() * 6 );
var dice = document.getElementById("die");
dice.src=ranNum+".png";
}
function stopDice()
{clearInterval(myVar);}