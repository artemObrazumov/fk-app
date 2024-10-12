let gameWrapper =document.getElementById('game_wrapper');

function setGameLoadingStarted() {
    gameWrapper.classList.add("loading");
}
function setGameLoadingFinished() {
    gameWrapper.classList.remove("loading");
}
function renderGame(game){
    html = "";
    game.forEach(el => {
        html += playerHtml(el)
    });
    gameWrapper.innerHTML = html;
}
function gameHtml(game) {
    return 
}