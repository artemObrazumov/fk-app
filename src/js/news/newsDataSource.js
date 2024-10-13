async function loadArticles(query, tagId) {
    //let articles = []
    setArticlesLoadingStarted()
    if (tagId != -1){
        tagPart = '&tag=' + tagId
    } else {
        tagPart = ""
    }
    let response = await fetch(API_URL + '/articles' + '?q=' + query + tagPart)
    const json = await response.json()
    renderArticles(json.articles)
    setArticlesLoadingFinished()
}

