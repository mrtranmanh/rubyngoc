import { gsap } from "gsap";
import { currentPath } from './config.js';

const boxFinish = document.querySelector(".box-finish");

if (boxFinish) {
    const domainAndPath = currentPath.origin + currentPath.pathname.substring(0, currentPath.pathname.lastIndexOf('/') + 1);
    var audioBoxFinish = new Audio(domainAndPath + "/src/sound/WindyHillPianoRemix.mp3");
    const batnhacBoxFinish = document.querySelector(".box-finish .batnhac");
    const tatnhacBoxFinish = document.querySelector(".box-finish .tatnhac");
    const displayWeddingInvitation = document.querySelector(".box-finish .display-wedding-invitation");
    const weddingInvitationBox = document.querySelector(".box-finish .wedding-invitation-box");

    if (batnhacBoxFinish) {
        batnhacBoxFinish.addEventListener("click", function() {
            audioBoxFinish.loop = true;
            audioBoxFinish.play();
        });
    }

    if (tatnhacBoxFinish) {
        tatnhacBoxFinish.addEventListener("click", function() {
            audioBoxFinish.pause();
            audioBoxFinish.currentTime = 0;
        });
    }

    if (displayWeddingInvitation) {
        displayWeddingInvitation.addEventListener("click", function() {
            weddingInvitationBox.classList.toggle("active");
        });
    }

    // Hàm tính số ngày giữa hai ngày
    const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };

    // Hàm tính số năm và số ngày giữa hai ngày
    const get_years_and_days = (d1, d2) => {
        let totalDays = Math.ceil((d2 - d1) / (24 * 60 * 60 * 1000));
        
        // Tính số năm từ số ngày
        let years = 0;
        let daysInYear = 365;

        // Tính số năm và số ngày còn lại
        while (true) {
            let nextYear = new Date(d1.getFullYear() + 1, d1.getMonth(), d1.getDate());
            let daysInCurrentYear = Math.ceil((nextYear - d1) / (24 * 60 * 60 * 1000));
            
            if (totalDays >= daysInCurrentYear) {
                years++;
                totalDays -= daysInCurrentYear;
                d1 = new Date(nextYear.getFullYear(), nextYear.getMonth(), nextYear.getDate());
            } else {
                break;
            }
        }

        // Trả lại số năm và số ngày còn lại
        return { years, days: totalDays };
    };

    // Khởi tạo ngày bắt đầu và ngày hiện tại
    let ngayBatDau = new Date("February 18, 2024 19:41:52 GMT+0700");
    let today = new Date();
    let resultYeuNhau = get_years_and_days(ngayBatDau, today);

    // Hiển thị số năm và số ngày đã yêu nhau
    const timeDaYeuNhau_show = document.getElementById("timeDaYeuNhau_show");
    if (timeDaYeuNhau_show) {
        timeDaYeuNhau_show.innerHTML = `${resultYeuNhau.years} năm ${resultYeuNhau.days} ngày`;
    }

    // Khởi tạo ngày kết hôn
    let ngayKetHon = new Date("April 02, 2024 11:00:00 GMT+0700");
    let resultKetHon = get_years_and_days(ngayKetHon, today);

    // Hiển thị số năm và số ngày đã kết hôn
    const timeDaKetHon_show = document.getElementById("timeDaKetHon_show");
    if (timeDaKetHon_show) {
        timeDaKetHon_show.innerHTML = `${resultKetHon.years} năm ${resultKetHon.days} ngày`;
    }

    // Kỷ niệm đám cưới giấy
    let ngayKyNiemDamCuoiGiay = new Date("April 02, 2025 11:00:00 GMT+0700");
    let resultKyNiemDamCuoiGiay = get_day_of_time(today, ngayKyNiemDamCuoiGiay);
    const resultKyNiemDamCuoiGiay_show = document.getElementById("resultKyNiemDamCuoiGiay_show");
    const displayResultKyNiemPaper = document.querySelectorAll(".display-resultKyNiem-paper");
    const boxFuturePaper = document.querySelector(".box-achievement-paper .future");
    const boxNowPaper = document.querySelector(".box-achievement-paper .now");

    if (resultKyNiemDamCuoiGiay_show) {
        resultKyNiemDamCuoiGiay_show.innerHTML = `${resultKyNiemDamCuoiGiay} ngày`;
    }
    if (displayResultKyNiemPaper) {
        const noticeElementPaper = document.querySelector(".box-achievement-paper .notice");

        displayResultKyNiemPaper.forEach(item => {
            item.addEventListener("click", function () {                
                if (noticeElementPaper) {
                    noticeElementPaper.classList.toggle("active");
                }
            });
        });

        if (resultKyNiemDamCuoiGiay < today) {
            boxFuturePaper.classList.add("active");
        } else {
            boxNowPaper.classList.add("active");
        }
    }


    gsap.to(".box-finish .gs-animation-1", {
        opacity: 1,
        duration: 5,
        x: 0,
        y: 0,
        startAt: {
            opacity: 0,
            x: -300,
            y: -300
        }
    });

    gsap.to(".box-finish .gs-animation-2", {
        opacity: 1,
        duration: 5,
        x: 0,
        y: 0,
        startAt: {
            opacity: 0,
            x: 300,
            y: 300
        }
    });

    gsap.to(".box-finish .gs-animation-3", {
        opacity: 1,
        duration: 1,
        y: 0,
        startAt: {
            opacity: 0,
            y: -100
        }
    });

    gsap.to(".box-finish .gs-animation-4", {
        opacity: 1,
        duration: 1,
        x: 0,
        startAt: {
            opacity: 0,
            x: -100
        }
    });

    gsap.to(".box-finish .gs-animation-5", {
        opacity: 1,
        duration: 1,
        x: 0,
        startAt: {
            opacity: 0,
            x: 100
        }
    });

    gsap.to(".box-finish .gs-animation-6", {
        rotation: 360 * 10,
        opacity: 1,
        duration: 5,
        startAt: {
            opacity: 0,
        }
    });

    gsap.to(".box-finish .gs-animation-7", {
        opacity: 1,
        duration: 1,
        y: 0,
        startAt: {
            opacity: 0,
            y: 100
        }
    });
}