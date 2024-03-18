var btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", function() { 

    var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+ [randomNumber1] +".png");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+ [randomNumber2] +".png");

if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=("Player 1 <br> Wins");
}
else if(randomNumber1 <randomNumber2){
    document.querySelector("h1").innerHTML=("Player 2 <br> Wins");
}
else {
    document.querySelector("h1").innerHTML=("Draw");

}
})

var btn2 = document.getElementsByClassName("btn2")[0];
btn2.addEventListener("click", function() {
    document.querySelectorAll("img")[0].setAttribute("src" , "./images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src" , "./images/dice6.png");
    document.querySelector("h1").innerHTML=("Let's Play");

})

