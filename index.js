let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let imageName1 = "dice" + randomNumber1 + ".png";
let imageSource1 = "./images/" + imageName1;

let imageName2 = "dice" + randomNumber2 + ".png";
let imageSource2 = "./images/" + imageName2;

document.querySelector("img").setAttribute("src", imageSource1);

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
