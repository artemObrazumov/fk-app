async function loadPlayer() {
    let response = await fetch(API_URL + "/team");
    let json = await response.json();
    renderPlayers(json)
}

