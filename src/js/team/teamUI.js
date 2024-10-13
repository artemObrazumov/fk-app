let playerWrapper =document.getElementById('players_section');


function renderPlayers(players){
    html = "";
    players.forEach(el => {
        html += playerHtml(el)
    });
    playerWrapper.innerHTML = html;
}
function playerHtml(player) {
    const number = player.number
    const name = player.name
    const image = player.image
    return `
        <div class="swiper-slide people_swiper-slide">
            <div class="person_wrapper">
                <img src="${image}" class="person_image">
            </div>
            <div class="person_info_wrapper">
                <div class="person_title">${name}</div>
                <div class="person_number">${number}/div>
            </div>
        </div>
    `
}

