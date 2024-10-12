async function loadArticles(query, tagId) {
    //let articles = []
    setArticlesLoadingStarted()
    let response = await fetch(API_URl + '/articles' + '?tag=' + tagId + '&q=' + query)
    const json = await response.json()
    renderArticles(json)
    setArticlesLoadingFinished()
}

