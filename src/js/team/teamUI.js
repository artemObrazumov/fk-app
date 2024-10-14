const swiperPlayersSwiper = document.getElementById("swiperPlayersSwiper")
const swiperTrainersSwiper = document.getElementById("swiperTrainersSwiper")

function renderPlayers(players){
    html = "";
    players.forEach(player => {
        if (player.is_staff == false) {
            html += playerHtml(player)
        }
    });
    swiperPlayersSwiper.innerHTML = html;
    clickablePlayers()
}

function renderTrainers(players){
    html = "";
    players.forEach(player => {
        if (player.is_staff == true) {
            html += playerHtml(player)
        }
    });
    swiperTrainersSwiper.innerHTML = html;
    clickablePlayers()
}

function clickablePlayers() {
    document.querySelectorAll(".people_swiper-slide").forEach(person => {
        person.addEventListener('click', () => {
            window.location.href = WEB_URL + '/person.html?id=' + person.getAttribute("player_id")
        })
    })
}

function playerHtml(player) {
    const image = player.avatar
    const name = player.first_name + ' ' + player.second_name
    const number = player.number

    return `
        <div class="swiper-slide people_swiper-slide" player_id="${player.id}">
            <div class="person_wrapper">
                <img src="${image}">
            </div>
            <div class="person_info_wrapper">
                <div class="person_title">${name}</div>
                <div class="person_number">${number}</div>
            </div>
        </div>
        `
}