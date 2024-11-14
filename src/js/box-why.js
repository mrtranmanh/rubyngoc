import { gsap } from "gsap";
import { currentPath } from './config.js';

//auto text
const textConfig = {
    text1: "Bởi vì anh tốt bụng, đẹp trai, chăm chỉ, lãng mạn, ga lăng, đảm đang, tài giỏi, hòa đồng với mọi người, sẵn sàng khám phá cái mới, chịu khó học hỏi, tài ăn nói và giao tiếp tuyệt vời, có nhiều sở thích giống em, đặc biệt là anh rất đứng đắn lịch sự không đen tối như những người đàn ông khác ... Haha, thực ra chính em cũng cảm thấy khó hiểu lắm nhưng tình yêu vốn là cái gì đó không thể giải thích...",
};
const charCount = textConfig.text1.length;
const noteTextarea = document.querySelector(".box-why #note-textarea");
const boxWhy = document.querySelector(".box-why");

function textGenerate() {
    var n = "";
    var text = " " + textConfig.text1;
    var a = Array.from(text);
    var textInput = document.querySelector(".box-why #txtReason").value;
    var count = textInput.length;

    if (count > 0) {
        for (let i = 0; i < count; i++) {
            n = n + a[i];
            if (i == text.length - 1) {
                document.querySelector(".box-why #txtReason").value = textConfig.text1;
                n = textConfig.text1;
                break;
            }
        }
    }
    document.querySelector(".box-why #txtReason").value = n;
    
    // if (count == charCount) {
    //     noteTextarea.classList.remove('hidden');
    // }
}

const txtReason = document.querySelector(".box-why #txtReason");
if (txtReason) {
    txtReason.addEventListener("input", textGenerate);
}


//send
const submitSection3 = document.querySelector(".box-why #submitSection3");
if (submitSection3) {
    submitSection3.addEventListener("click", function() {
        var txtReason = document.querySelector("#txtReason");
        var txtReason2 = document.querySelector("#txtReason2");
        var noteTextarea = document.querySelector("#note-textarea");
        var submitSection3 = document.querySelector("#submitSection3");
        var submitSection3_2 = document.querySelector("#submitSection3-2");
        var submitSection3_3 = document.querySelector("#submitSection3-3");
        
        txtReason.classList.add("hidden");
        txtReason2.classList.remove("hidden");
        noteTextarea.classList.remove("hidden");
        submitSection3.classList.add("hidden");
        submitSection3_2.classList.remove("hidden");
        submitSection3_3.classList.remove("hidden");

        const domainAndPath = currentPath.origin + currentPath.pathname.substring(0, currentPath.pathname.lastIndexOf('/') + 1);
        var audio_box_why = new Audio(domainAndPath + "/src/sound/Nhac-Khong-Loi-Nhe-Nhang-V-A.mp3");
        audio_box_why.loop = true;
        audio_box_why.play();

        gsap.to(".box-why .gs-animation-5", {
            opacity: 1,
            y: 0,
            duration: 1,
            startAt: {
                opacity: 0,
                y: 100
            }
        });
        gsap.to(".box-why .gs-animation-6", {
            opacity: 1,
            x: 0,
            duration: 1,
            startAt: {
                opacity: 0,
                x: -100
            }
        });
        gsap.to(".box-why .gs-animation-7", {
            opacity: 1,
            x: 0,
            duration: 1,
            startAt: {
                opacity: 0,
                x: 100
            }
        });
    });

    const submitSection3_3 = document.querySelector(".box-why #submitSection3-3");
    submitSection3_3.addEventListener("click", function() {
        var textSubmitSection3_3 = document.querySelector(".box-why .text-submitSection3-3");
        
        this.classList.add("hidden");
        textSubmitSection3_3.classList.remove("hidden");

        //time
        // Lấy ra phần tử chứa đếm ngược
        var countdownElement = document.querySelector(".box-why .clickHo");

        // Hàm để bắt đầu đếm ngược
        function startCountdown() {
            // Số giây cần đếm ngược
            var secondsLeft = 20;

            // Cập nhật nội dung của phần tử sau mỗi giây
            var countdownInterval = setInterval(function() {
                // Hiển thị số giây còn lại
                countdownElement.textContent = secondsLeft + 's';

                // Giảm số giây còn lại đi 1
                secondsLeft--;

                // Nếu hết thời gian đếm ngược, dừng việc cập nhật và ẩn phần tử
                if (secondsLeft < 0) {
                    clearInterval(countdownInterval); // Dừng việc cập nhật đếm ngược
                    document.querySelector(".box-why #submitSection3-2").click();
                }
            }, 1000); // Cập nhật sau mỗi giây (1000 milliseconds)
        }
        startCountdown();

    });
}

// document.getElementById("submitSection3-3").addEventListener("click", function() {
//     this.classList.add("hidden");
//     document.querySelector(".text-submitSection3-3").classList.remove("hidden");
//     var textSubmitSection3_3 = document.querySelector(".text-submitSection3-3");
//     if (textSubmitSection3_3) {
//         gsap.from(textSubmitSection3_3, {
//             opacity: 0,
//             duration: 1,
//             y: 100,
//         });
//     }
// });

//animation
if (boxWhy) {
    gsap.to(".box-why .gs-animation-1", {
        opacity: 1,
        duration: 1,
        y: 0,
        startAt: {
            y: -100,
            opacity: 0
        }
    });
    gsap.to(".box-why .gs-animation-2", {
        opacity: 1,
        x: 0,
        duration: 2,
        startAt: {
            opacity: 0,
            x: 200
        }
    });
    gsap.to(".box-why .gs-animation-3", {
        opacity: 1,
        duration: 2,
        x: 0,
        startAt: {
            opacity: 0,
            x: -200
        }
    });
    gsap.to(".box-why .gs-animation-4", {
        opacity: 1,
        duration: 2,
        y: 0,
        startAt: {
            opacity: 0,
            y: 100
        }
    });
}