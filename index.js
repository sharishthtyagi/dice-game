var randomImgSource1 = "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);// Here [0] is the 
// first <img> tag in the code.


var randomImgSource2 = "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2); // Here [1] is the 
// second <img> tag in the code.

if (randomImgSource1 > randomImgSource2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomImgSource1 < randomImgSource2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw";
}