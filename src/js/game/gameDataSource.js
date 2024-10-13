async function loadGame() {
    var url_string = location.href
    var url = new URL(url_string)
    var id = url.searchParams.get("id")
    let response = await fetch(API_URL + "/game/" + id);
    let json = await response.json();
    renderAll(json)
}

loadGame()