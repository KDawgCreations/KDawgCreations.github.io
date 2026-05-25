console.log("KBB Loaded Successfully!");

const sparkleSky = document.querySelector(".sparkle-sky");

const sparkleShapes = ["✦", "✧", "✶", "✷", "⋆"];

function createSparkle() {
    const sparkle = document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.textContent = sparkleShapes[Math.floor(Math.random() * sparkleShapes.length)];

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = Math.random() * 18 + 14 + "px";

    sparkleSky.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1800);
}

setInterval(createSparkle, 250);