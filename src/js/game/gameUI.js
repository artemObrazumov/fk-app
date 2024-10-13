const swiperPlayersSwiper = document.getElementById("swiperPlayersSwiper")
const gameactionsSwiper = document.getElementById("gameactionsSwiper")

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

function stat_sectionHtml(Stat_section) {
    const 
    return `
    <section class="stat-section">
                <h1 class="stat-section__title">Статистика</h1>
                <div class="stat-section__cards">
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">5</h1>
                        <p class="stat-section__card-description">голов забито</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">1 : 04 : 25</h1>
                        <p class="stat-section__card-description">время матча</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">124</h1>
                        <p class="stat-section__card-description">передачи</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">42</h1>
                        <p class="stat-section__card-description">голевые передачи</p>
                    </div>
                </div>
            </section>
    `
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