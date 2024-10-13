const swiperPlayersSwiper = document.getElementById("swiperPlayersSwiper")
const gameactionsSwiper = document.getElementById("gameactionsSwiper")
const statSectionCards = document.getElementById('statSectionCards')

function renderPlayers(players){
    html = "";
    players.forEach(player => {
        html += playerHtml(player)
    });
    swiperPlayersSwiper.innerHTML = html;
}
function playerHtml(player) {
    const image = player.id
    const name = player.name
    const number = player.number

    return `
        <div class="swiper-slide people_swiper-slide">
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
    const allScoreHtml = document.getElementById('allScore')
    const ourScore = game.ourScore
    const enemyScore = game.enemySco
    let allScore = ourScore + enemyScore
    allScoreHtml.innerHTML = allScore
}
function renderGameActions(gameActions) {
    html = ''
    gameActions.forEach(gameAction => {
        html += gameActionHtml(gameAction)
    })
    gameactionsSwiper.innerHTML = html
}

function gameActionHtml(gameAction) {
    const type = gameAction.type
    switch (type){
        case "0":
            type = "Гол" 
            break
        case "1":
            type = "Пас" 
            break
        case "2":
            type = "Офсайт" 
            break
        case "3":
            type = "Наприколе" 
            break
    }
    const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(arguments.time);
    const image = gameAction.image
    const name = gameAction.name
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
    let html = ""
    gameActions.forEach(gameAction => {
        const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(gameAction.time);
        let type = gameAction.type
        switch (type){
            case "0":
                type = "Гол" 
                break
            case "1":
                type = "Пас" 
                break
            case "2":
                type = "Офсайт" 
                break
            case "3":
                type = "Наприколе" 
                break
        }
        html += `
        <li class="live-section__timecode">${time} - ${type}</li>`
    });
    return `${html}`
}

function renderGameInfo(game) {
    const gameInfo = document.getElementById('gameInfo')
    const ourScore = game.ourScore
    const enemyScore = game.enemySco
    const againstTeam = game.againstTeam

    let teams = document.getElementById("teams")
    teams.innerText = `Kokoc Group / ${againstTeam}`
    
    let score = document.getElementById("score")
    score.innerText = `${ourScore}: ${enemyScore} `
}
function renderAll(json) {
    renderGameInfo(json.game)
    renderMoment(json.gameaActions)
    renderPlayers(json.players)
    renderstatSectionHtml(json.game)
    renderGameActions(json.gameaActions)

}