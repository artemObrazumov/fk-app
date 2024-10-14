const swiperPlayersSwiper = document.getElementById("swiperPlayersSwiper")
const gameactionsSwiper = document.getElementById("gameactionsSwiper")
const statSectionCards = document.getElementById('statSectionCards')

function renderPlayers(players){
    html = "";
    players.forEach(player => {
        html += playerHtml(player)
    });
    swiperPlayersSwiper.innerHTML = html;
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
    console.log(player)
    const image = player.player.avatar
    const name = player.player.first_name + ' ' + player.player.second_name
    const number = player.player.number

    return `
        <div class="swiper-slide people_swiper-slide" player_id="${player.player.id}">
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

function renderstatSectionHtml(game) {
    const allScoreHtml = document.getElementById('goals')
    const ourScore = game.ourScore
    const enemyScore = game.enemyScore
    let allScore = ourScore + enemyScore
    allScoreHtml.innerText = allScore
}
function renderGameActions(gameActions) {
    html = ''
    gameActions.forEach(gameAction => {
        html += gameActionHtml(gameAction)
    })
    gameactionsSwiper.innerHTML = html
}

function gameActionHtml(gameAction) {
    const t = gameAction.actionType
    let type = ""
    switch (t){
        case 0:
            type = "Гол" 
            break
        case 1:
            type = "Пас" 
            break
        case 2:
            type = "Желтая карточка" 
            break
        case 3:
            type = "Красная карточка" 
            break
    }
    const date = new Date();
    const time = date.toISOString().slice(11, 19);
    const image = gameAction.player.avatar
    const name = gameAction.player.first_name + ' ' + gameAction.player.second_name
    return `
        <div class="swiper-slide gameactions_swiper-slide">
            <div class="gameaction_wrapper">
                <div class="gameaction_info">
                    <div class="gameaction_info-action">${type}</div>
                    <div class="gameaction_info-time">${time}</div>
                    <div class="gameaction_info-player">${name}</div>
                </div>
                <div class="gameaction_person">
                    <img src="${image}">
                </div>
            </div>
        </div>
    `
}

function renderMoment(gameActions){
    const section_Right = document.getElementById("section_right")
    section_Right.innerHTML = momentsHtml(gameActions)
}

function momentsHtml(gameActions) {
    console.log(gameActions)
    let html = ""
    gameActions.forEach(gameAction => {
        const t = gameAction.actionType
        let type = ""
        switch (t){
            case 0:
                type = "Гол" 
                break
            case 1:
                type = "Пас" 
                break
            case 2:
                type = "Офсайт" 
                break
            case 3:
                type = "Наприколе" 
                break
        }
        const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(gameAction.time);
        html += `
        <li class="live-section__timecode">${time} - ${type}</li>`
    });
    return `${html}`
}

function renderGameInfo(game) {
    const gameInfo = document.getElementById('gameInfo')
    const ourScore = game.ourScore
    const enemyScore = game.enemyScore
    const againstTeam = game.againtTeam

    let teams = document.getElementById("teams")
    teams.innerText = `Kokoc Group / ${againstTeam}`
    
    let score = document.getElementById("score")
    score.innerText = `${ourScore} : ${enemyScore} `
    document.getElementById('game').style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://cdn5.vedomosti.ru/image/2022/8u/stz0a/original-11d8.jpg) center center/cover no-repeat`

    document.getElementById('broadcast').innerHTML = game.streamUrl
}
function renderAll(json) {
    renderGameInfo(json.game)
    renderMoment(json.actions)
    renderPlayers(json.players)
    renderstatSectionHtml(json.game)
    renderGameActions(json.actions)
    swiper()
    console.log(json)
}