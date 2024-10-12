let playerWrapper =document.getElementById('player_wrapper');

function setPlayerLoadingStarted() {
    playerWrapper.classList.add("loading");
}
function setPlayerLoadingFinished() {
    playerWrapper.classList.remove("loading");
}
function renderPlayer(player){
    html = "";
    player.forEach(el => {
        html += playerHtml(el)
    });
    playerWrapper.innerHTML = html;
}
function playerHtml(player) {
    return 
}

