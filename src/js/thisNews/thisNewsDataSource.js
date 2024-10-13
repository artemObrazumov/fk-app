async function loadPerson() {
    let response = await fetch(API_URL + "/this_news");
    let json = await response.json();
    renderthisNews(json.person)
}
