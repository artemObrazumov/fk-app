async function loadPlayer() {
    let response = await fetch(API_URL + "/players");
    let json = await response.json();
    console.log(json)
    renderPlayers(json.players)
    renderTrainers(json.players)
}

loadPlayer()