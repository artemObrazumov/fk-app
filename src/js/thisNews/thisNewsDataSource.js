async function loadArticle() {
    var url_string = location.href
    var url = new URL(url_string)
    var id = url.searchParams.get("id")
    let response = await fetch(API_URL + "/article/" + id);
    let json = await response.json();
    renderthisNews(json.article)
}

loadArticle()