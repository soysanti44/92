function updatescore() {
    score =score + 1;
    document.getElementById("score").innerHTML =score;
}
function savescore() {
    localStorage.setItem("puntuación",score);
}
function nexpage() {
    window.location ="login.html"
}