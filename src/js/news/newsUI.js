let newsWrapper = document.getElementById("news_wrapper")

function setArticlesLoadingStarted() {
    // Загрузка новостей началась
    newsWrapper.classList.add("loading")
}

function setArticlesLoadingFinished() {
    // Загрузка новостей закончена
    newsWrapper.classList.remove("loading")
}

function renderArticles(articles) {
    html = ''
    articles.forEach(article => {
        html += articleHtml(article)
    })
    newsWrapper.innerHTML = html
}

function articleHtml(article) {
    return `
        <div class="news_item" news_id="${article.id}">
            <img src="${article.thumbnail}">
            <div class="">${article.title}</div>
        </div>
    `
}

function setup() {

}

setup()