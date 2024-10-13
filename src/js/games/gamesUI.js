const swiperGameWrapper = document.getElementById("swiperGamesSwiper")

function rendergameWrapper(games) {
    html = ""
    games.forEach(game => {
        html += gameWrapperHtml(game)
    });
    swiperGameWrapper.innerHtml += html
}

function gameWrapperHtml (game) {
    const ourScore = game.ourScore
    const enemyScore = game.enemySco
    const againstTeam = game.againstTeam
    let gameStatus = ''
    const gamePlace = game.type = 0 ? "Домашний" : "В гостях"
    const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(gameAction.time);
    if (ourScore == enemyScore) gameStatus = "Ничья" 
    else if (ourScore > enemyScore) gameStatus = "Победа"
    else gameStatus = "Поражение"
    return `
        <div class="game_wrapper">
            <div class="badge">${gamePlace}</div>
            <div class="game_title">Кокос group / ${againstTeam}</div>
            <div class="game_score">${ourScore}: ${enemyScore}</div>
            <footer class="game_footer">
                <img src="icons/clock.png" class="game_time">
                <div class="game_time">${time}</div>
                <div class="badge game_status-lose">${gameStatus}</div>
            </footer>
        </div>
    `
}