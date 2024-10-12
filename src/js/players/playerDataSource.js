async function loadPlayer() {
    setPlayerLoadingStarted();
    let response = await fetch(API_URL + "/player");
    let json = await response.json();
    setPlayerLoadingFinished;
}

