async function loadPerson() {
    var url_string = location.href
    var url = new URL(url_string)
    var id = url.searchParams.get("id")
    let response = await fetch(API_URL + "/player/" + id);
    let json = await response.json();
    renderPerson(json)
}

loadPerson()