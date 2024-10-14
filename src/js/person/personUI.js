const aboutPlayer = document.getElementById("aboutPlayer") 
function renderPerson (json) {
    const redCardsHtml = document.getElementById("redCards")
    const yellowCardsHtml = document.getElementById("yellowCards")
    const goalsHtml = document.getElementById("goals")
    const nameHtml = document.getElementById("name")
    const bioHtml = document.getElementById("bio")
    const imageHtml = document.getElementById("image")
    const assistsHtml = document.getElementById("assists")
    const image = json.player.avatar
    const name = json.player.first_name + ' ' + json.player.second_name
    const bio = json.player.bio
    const goals = json.goals
    const yellowCards = json.yellow_card
    const redCards = json.red_card
    const assists = json.assists
    
    console.log(json)
    nameHtml.innerHTML = name
    redCardsHtml.innerHTML = redCards
    yellowCardsHtml.innerHTML = yellowCards
    goalsHtml.innerHTML = goals
    bioHtml.innerHTML = bio
    assistsHtml.innerHTML = assists
    imageHtml.src = image
    
}