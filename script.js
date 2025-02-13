document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const facePopup = document.getElementById("face-popup");

    // No Button Moves on Click
    noButton.addEventListener("click", function () {
        moveNoButton();
        showFace("images/sadface.PNG");
    });

    // Yes Button Click - Shows Happy Face and Redirects after 1 second
    yesButton.addEventListener("click", function () {
        showFace("images/happyface.PNG");

        // Wait for 1 second, then redirect to yes.html
        setTimeout(function () {
            window.location.href = "yes.html"; // Redirect to yes.html after 1 second
        }, 1000);  // 1000 milliseconds = 1 second
    });

    function moveNoButton() {
        let maxX = window.innerWidth - noButton.offsetWidth - 20;
        let maxY = window.innerHeight - noButton.offsetHeight - 20;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    function showFace(imagePath) {
        facePopup.src = imagePath;
        facePopup.style.display = "block";
        facePopup.style.opacity = "1";
        facePopup.style.transform = "translate(-50%, -50%) scale(1.5)";

        // Hide the face after 1 second, smoothly
        setTimeout(() => {
            facePopup.style.opacity = "0";
            facePopup.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000); // The same delay as the redirect
    }
});