// var randomNumber1 = Math.round(Math.random() * 5 + 1);
//
// var randomImg1 = "images/dice" + randomNumber1 + ".png";
//
// // document.querySelector(".img1").setAttribute("src", randomImg);
// // document.getElementsByClassName("img1")[0].src = randomImg;
// var img1 = document.querySelectorAll("img")[0];
// var img2 = document.querySelectorAll("img")[1];
// img1.setAttribute("SRC", randomImg1);
//
// var randomNumber2 = Math.round(Math.random(5)) + 1;
//
// var randomImg2 = "images/dice" + randomNumber1 + ".png";
//
// img2.setAttribute("SRC", randomImg2);
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "play 1 wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "play 2 wins!";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
