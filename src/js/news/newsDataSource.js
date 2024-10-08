async function loadRecentArticles() {
    //let articles = []
    setArticlesLoadingStarted()
    let response = await fetch(API_URl + '/articles')
    const json = await response.json()
    renderArticles(json)
    setArticlesLoadingFinished()
}

async function loadArticlesByTag(tagId) {
    //let articles = []
    setArticlesLoadingStarted()
    let response = await fetch(API_URl + '/articles' + '?tag=' + tagId)
    const json = await response.json()
    renderArticles(json)
    setArticlesLoadingFinished()
}