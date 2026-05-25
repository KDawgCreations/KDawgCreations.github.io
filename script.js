console.log("KBB Loaded Successfully!");

const sparkleSky = document.querySelector(".sparkle-sky");

const sparkleShapes = ["✦", "✧", "✶", "✷", "⋆"];

function createSparkle() {
    const sparkle = document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.textContent = sparkleShapes[Math.floor(Math.random() * sparkleShapes.length)];

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = Math.random() * 10 + 8 + "px";

    sparkle.style.opacity = Math.random() * 0.5 + 0.4;

    sparkle.style.filter = `blur(${Math.random() * 1.2}px)`;


    sparkleSky.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2100);
}

function sparkleLoop() {
    createSparkle();

    const randomDelay = Math.random() * 70 + 25;

    setTimeout(sparkleLoop, randomDelay);
}

sparkleLoop();

const bannerImages = [
    "images/banner1.jpeg",
    "images/banner2.jpeg",
    "images/banner3.jpeg",
    "images/banner4.jpeg",
    "images/banner5.jpeg"
];

let currentBanner = 0;

const bannerImage = document.getElementById("banner-image");
const prevBanner = document.getElementById("prev-banner");
const nextBanner = document.getElementById("next-banner");
const bannerDots = document.querySelectorAll(".dot");

function showBanner(index) {
    currentBanner = index;

    if (currentBanner < 0) {
        currentBanner = bannerImages.length - 1;
    }

    if (currentBanner >= bannerImages.length) {
        currentBanner = 0;
    }

    bannerImage.classList.add("fade-out");

    setTimeout(() => {
        bannerImage.src = bannerImages[currentBanner];

        bannerDots.forEach((dot) => {
            dot.classList.remove("active-dot");
        });

        bannerDots[currentBanner].classList.add("active-dot");

        bannerImage.classList.remove("fade-out");
    }, 500);
}

prevBanner.addEventListener("click", () => {
    showBanner(currentBanner - 1);
});

nextBanner.addEventListener("click", () => {
    showBanner(currentBanner + 1);
});

bannerDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const slideNumber = Number(dot.dataset.slide);
        showBanner(slideNumber);
    });
});

setInterval(() => {
    showBanner(currentBanner + 1);
}, 20000);