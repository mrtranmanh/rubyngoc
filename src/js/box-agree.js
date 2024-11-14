import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import { currentPath } from './config.js';

const boxAgree = document.querySelector(".box-agree");
const boxAgreeItem3 = document.querySelector(".box-agree .item3");
if (boxAgree) {

    boxAgreeItem3.addEventListener("click", function () {
        alert(
            "Vào đến đây rồi còn không gì nữa. Chắc là em bấm nhầm thôi phải không, để anh chỉnh lại nút cho đúng nhé"
        );
        document.querySelector(".box-agree .item3").classList.add("hidden");
        document.querySelector(".box-agree .item4").classList.remove("hidden");

        const domainAndPath = currentPath.origin + currentPath.pathname.substring(0, currentPath.pathname.lastIndexOf('/') + 1);
        var audio_box_agree = new Audio(domainAndPath + "/src/sound/Nhac-Khong-Loi-Nhe-Nhang-V-A.mp3");
        audio_box_agree.loop = true;
        audio_box_agree.play();

        gsap.to(".box-agree .gs-animation-6", {
            opacity: 1,
            duration: 3,
            y: 0,
            startAt: {
                opacity: 0,
                y: 400
            }
        });
    });

    gsap.to(".box-agree .gs-animation-1", {
        opacity: 1,
        duration: 1,
        y: 0,
        startAt: {
            opacity: 0,
            y: -100
        }
    });

    gsap.to(".box-agree .gs-animation-2", {
        duration: 2,
        text: {
          value: "Anh cũng nghĩ như vậy về em ^^",
          scrambleText: true,
          ease: "none"
        }
    });

    setTimeout(function() {
        gsap.to(".box-agree .gs-animation-3", {
            duration: 2,
            text: {
                value: "Em làm bạn gái của anh nhé &#10084;",
                scrambleText: true,
                ease: "none"
            }
        });
    }, 2000);

    gsap.to(".box-agree .gs-animation-4", {
        opacity: 1,
        duration: 4,
        x: 0,
        startAt: {
            opacity: 0,
            x: -100
        }
    });

    gsap.to(".box-agree .gs-animation-5", {
        opacity: 1,
        duration: 4,
        x: 0,
        startAt: {
            opacity: 0,
            x: 100
        }
    });
}