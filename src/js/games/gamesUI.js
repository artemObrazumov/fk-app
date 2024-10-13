const swiperGameWrapper = document.getElementById("swiperGamesSwiper")

function rendergameWrapper(games) {
    console.log(games)
    html = ""
    games.forEach(game => {
        html += gameWrapperHtml(game)
    });
    swiperGameWrapper.innerHTML = html
    clickableGames()
    swiper()
}

function gameWrapperHtml (game) {
    const ourScore = game.ourScore
    const enemyScore = game.enemyScore
    const againstTeam = game.againtTeam
    let gameStatus = ''
    let gameStatusClass = ''
    const gamePlace = game.type = 0 ? "Домашний" : "В гостях"
    const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(game.date)
    if (ourScore == enemyScore) gameStatus = "Ничья" 
    else if (ourScore > enemyScore) gameStatus = "Победа"
    else gameStatus = "Поражение"
    if (ourScore == enemyScore) gameStatusClass = "draw" 
    else if (ourScore > enemyScore) gameStatusClass = "win"
    else gameStatusClass = "lose"
    return `
    <div class="swiper-slide games_swiper-slide">
        <div class="game_wrapper" game_id="${game.id}">
            <div class="badge">${gamePlace}</div>
            <div class="game_title">Кокос group / ${againstTeam}</div>
            <div class="game_score">${ourScore} : ${enemyScore}</div>
            <footer class="game_footer">
                <img src="icons/clock.png" class="game_time">
                <div class="game_time">${time}</div>
                <div class="badge game_status-${gameStatusClass}">${gameStatus}</div>
            </footer>
        </div>
    </div>
    `
}

function clickableGames() {
    document.querySelectorAll(".game_wrapper").forEach(game => {
        game.addEventListener('click', () => {
            window.location.href = WEB_URL + '/game.html?id=' + game.getAttribute("game_id")
        })
    })
}