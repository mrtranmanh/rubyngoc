import { gsap } from "gsap";
import { currentPath } from './config.js';

// function switchButton() {
//     // var audio = new Audio("../src/sound/duck.mp3");
//     // audio.play();

//     var boxBtn = document.querySelector(".box-like .box-btn");
//     var yesBtn = document.querySelector(".box-like #yes");
//     var noBtn = document.querySelector(".box-like #no");

//     // Lưu lại vị trí hiện tại của #no
//     var noTempLeft = window.getComputedStyle(noBtn).left;
//     var noTempTop = window.getComputedStyle(noBtn).top;

//     // Lưu lại vị trí hiện tại của #yes
//     var yesTempLeft = window.getComputedStyle(yesBtn).left;
//     var yesTempTop = window.getComputedStyle(yesBtn).top;

//     // Đổi vị trí giữa #no và #yes
//     boxBtn.insertBefore(yesBtn, noBtn);
//     noBtn.style.left = yesTempLeft;
//     noBtn.style.top = yesTempTop;
//     yesBtn.style.left = noTempLeft;
//     yesBtn.style.top = noTempTop;
// }

// move random button poition
var isPlayingAudio2 = false;

function moveButton() {
    var audio = new Audio(currentPath + "/src/sound/doabatduocem.mp3");
    
    if (!isPlayingAudio2) {        
        audio.play();
        isPlayingAudio2 = true;
    }

    audio.addEventListener('ended', function() {
        audio.play();
    });

    var x, y;
    if (screen.width <= 600) {
        x = Math.random() * 300;
        y = Math.random() * 500;
    } else {
        x = Math.random() * 500;
        y = Math.random() * 500;
    }

    var noButton = document.querySelector(".box-like #no");
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

const boxLikeNo = document.querySelector(".box-like #no");
if (boxLikeNo) {
    boxLikeNo.addEventListener("mousemove", function() {
        moveButton();
    });
}

// document.querySelector(".box-like #no").addEventListener("click", function() {
//     if (screen.width >= 900) switchButton();
// });