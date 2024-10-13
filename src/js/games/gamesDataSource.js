async function loadGame() {
    let response = await fetch(API_URL + "/games");
    let json = await response.json();
    rendergameWrapper(json.games) 
}