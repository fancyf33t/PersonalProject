// I want to make a dice do simple animation
myVariable=setInterval(myfunction, time interval)

ranNum = Math.floor( 1 + Math.random() * 6 );

var ranNum = Math.floor( 1 + Math.random() * 6 );
var dice = document.getElementById("die");
dice.src=ranNum+".jpg";
}