document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = "yes.html";
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});