function renderthisNews(article) {
    const htmltitle = document.getElementById('title')
    const htmlcontent = document.getElementById('content')
    const htmlimage = document.getElementById('image')
    const image = article.articleImage
    const content = article.content
    const title = article.title
    htmlimage.style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image}) center center / cover no-repeat`
    htmltitle.innerHTML = title
    htmlcontent.innerHTML = content
    renderImages(article.articleImage)
}

function renderImages(image) {
    document.getElementById("images_container").innerHTML = `
    <div class="description__image" style="background-image: url(${image})"></div>
    `
}