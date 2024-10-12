async function loadGame() {
    setGameLoadingStarted();
    let response = await fetch(API_URL + "/game");
    let json = await response.json();
    setGameLoadFinished;
}