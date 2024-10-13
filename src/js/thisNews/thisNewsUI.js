function renderthisNews(article) {
    const htmltitle = document.getElementById('title')
    const htmlcontent = document.getElementById('content')
    const htmlimage = document.getElementById('image')
    const image = article.articleImage
    const content = article.content
    const title = article.title
    htmlimage.style.background = url(image)
    htmltitle.innerHtml = title
    htmlcontent.innerHTML = content
}