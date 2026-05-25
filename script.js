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