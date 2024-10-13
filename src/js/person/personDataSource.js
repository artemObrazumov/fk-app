async function loadPerson() {
    let response = await fetch(API_URL + "/person");
    let json = await response.json();
    renderPerson(json.person)
}

