async function loadGame() {
    setGamesLoadingStarted();
    let response = await fetch(API_URL + "/games");
    let json = await response.json();

}