let newsWrapper = document.getElementById("news_wrapper")
let query = ""
let currentTag = -1

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

    const time = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(arguments.time);
    const image = article.images.split(",")[0]

    return `
        <div class="news-container__row-card news-card">
            <div class="news-card__image" style = "background-image: ${image}"></div>
            <div class="news-card__description">
                <div class="news-card__tagbox">
                    <div class="news-card__tag tag">Гуууль</div>
                </div>
                <div class="news-card__datebox datebox">
                    <img class="datebox__clock" src="icons/clock.png" alt="Иконка часов">
                    <p class="datebox__date">${time}</p>
                </div>
            </div>
            <h1 class="news-card__title">${article.title}</h1>
        </div>
    `
}

const tagsContainer = document.getElementById("tags_container")

function InitTags() {
    const AllTags = document.querySelectorAll(".tags-container__tag")
    AllTags.forEach(tag => {
        tag.addEventListener("click", () => {
            const id = tag.getAttribute("tag_id")
            currentTag = id
            const tagName = tag.innerText
            let html = `
                <div class="tags_container-tag">
                        ${tagName}
                        <button id="tag_remove_button" class="tags_container-tag-button">X</button>
                    </div>
            `
            tagsContainer.innerHTML = html
            initTagRemoveButton()
            loadArticles(query, currentTag)
        })
    })

}

function initTagRemoveButton() {
    const button = document.getElementById("tag_remove_button")
    button.addEventListener("click", () => {
        tagsContainer.innerHTML = ""
        currentTag = -1
        loadArticles(query, currentTag)
    })
}

function setup() {
    InitTags()
    loadArticles(query, currentTag)
}

setup()