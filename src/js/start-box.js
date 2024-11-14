import { gsap } from "gsap";
import { currentPath } from './config.js';

function startBox() {
    const currentURL = window.location.href;

    const startBox = document.querySelector(".start-box");
    const boxLike = document.querySelector(".box-like");

    const item1 = document.querySelector(".start-box .item1");
    const item2 = document.querySelector(".start-box .item2");
    const item3 = document.querySelector(".start-box .item3");

    let countClick = parseInt(localStorage.getItem('startBox_countClick')) || 0;

    if (item1) {
        item1.addEventListener("click", function () {
            localStorage.removeItem('startBox_countClick');
            startBox.classList.add("hidden");
            boxLike.classList.remove("hidden");

            //animation
            gsap.to(".box-like .gs-animation-1", {
                opacity: 1,
                duration: 1,
                y: 0,
                startAt: {
                    opacity: 0,
                    y: -200
                }
            });
            gsap.to(".box-like .gs-animation-2", {
                opacity: 1,
                y: 0,
                duration: 2,
                startAt: {
                    opacity: 0,
                    y: 100
                }
            });
            gsap.to(".box-like .gs-animation-3", {
                opacity: 1,
                duration: 3,
                x: 0,
                startAt: {
                    opacity: 0,
                    x: -100
                }
            });
            gsap.to(".box-like .gs-animation-4", {
                opacity: 1,
                duration: 3,
                x: 0,
                startAt: {
                    opacity: 0,
                    x: 100
                }
            });
        });
    }

    if (item2) {
        item2.addEventListener("click", function () {
            if (countClick === 0) {
                alert("Nút bấm này bị hỏng xin vui lòng thử lại với nút bấm khác");
                countClick = 1;
            } else if (countClick === 1) {
                alert("Nút bấm này bị hỏng chúng tôi sẽ sửa lại sau, bạn click nút khác đi");
                countClick = 2;
                this.classList.add("hidden");
                item3.classList.remove("hidden");
            }
        });
    }

    if (item3) {
        item3.addEventListener("click", function () {
            alert("Theo hệ thống chúng tôi tính toán thời gian dự tính hoàn thành việc sửa chữa là ... 1000 năm sau !!! ");
            item3.classList.add("hidden");
            localStorage.removeItem('startBox_countClick');

            var audio_start_box = new Audio(currentPath + "/src/sound/Tieng-qua-keu.mp3");
            audio_start_box.play();
            console.log(currentPath + "/src/sound/Tieng-qua-keu.mp3");
        });
    }

    //animation
    if (startBox) {
        gsap.to(".start-box .gs-animation-1", {
            rotation: 360,
            opacity: 1,
            duration: 1,
            startAt: {
                opacity: 0
            }
        });
        gsap.to(".start-box .gs-animation-2", {
            opacity: 1,
            y: 0,
            duration: 2,
            startAt: {
                opacity: 0,
                y: -100
            }
        });
        gsap.to(".start-box .gs-animation-3", {
            opacity: 1,
            duration: 3,
            x: 0,
            startAt: {
                opacity: 0,
                x: -100
            }
        });
        gsap.to(".start-box .gs-animation-4", {
            opacity: 1,
            duration: 3,
            x: 0,
            startAt: {
                opacity: 0,
                x: 100
            }
        });
    }
}

startBox();