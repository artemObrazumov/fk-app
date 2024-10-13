const aboutPlayer = document.getElementById("aboutPlayer") 
function renderperson (person) {
    const redCardsHtml = document.getElementById("redCards")
    const yellowCardsHtml = document.getElementById("yellowCards")
    const goalsHtml = document.getElementById("goals")
    const nameHtml = document.getElementById("name")
    const bioHtml = document.getElementById("bio")
    const imageHtml = document.getElementById("image")
    const image = person.image
    const name = person.name
    const bio = person.bio
    const goals = goals
    const yellowCards = yellow_cards
    const redCards = red_cards
    
    nameHtml.innerHTML = name
    redCardsHtml.innerHTML = redCards
    yellowCardsHtml.innerHTML = yellowCards
    goalsHtml.inert = goals
    bioHtml = bio
    imageHtml.src = image
    
}