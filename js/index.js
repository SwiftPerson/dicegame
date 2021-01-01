var player1 = Math.random();
var player2 = Math.random();
var GameBoard = document.querySelector(".GameBoardTitle")
var plyr1_img = document.querySelector('#one');
var plyr2_img = document.querySelector('#two');
player1 = Math.floor((player1 * 6) + 1);
player2 = Math.floor((player2 * 6) + 1);

var img1 = "images/dice" + player1 + ".jpeg";
var img2 = "images/dice" + player2 + ".jpeg";
plyr1_img.setAttribute("src", img1);
plyr2_img.setAttribute("src", img2);
if (player1 > player2) {

  GameBoard.textContent = "🚩 Player One Wins";
  document.querySelector(".player1 h2").style.color = "#54e346";
} else if(player1 < player2) {

  GameBoard.textContent = "Player Two Wins 🚩";
  document.querySelector(".player2 h2").style.color = "#54e346";

}else{

  GameBoard.textContent = "Draw";
  GameBoard.style.color = "#54e346";
}
