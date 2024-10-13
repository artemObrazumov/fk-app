const aboutPlayer = document.getElementById("aboutPlayer") 
function renderPerson(person) {
    aboutPlayer.innerHTML += personHtml(person)
}

function personHtml (person) {
    const image = person.image
    const name = person.name
    const bio = person.bio
    const goals = goals
    const yellowCards = yellow_cards
    const redCards = red_cards
    return `
        <section class="header_section">
            <div class="main-section__header big-image person_header">
                <img src="${image}" class="person_image">
                <div class="person_header-name${name}</div>
            </div>
        </section>
        <section class="container">
            <section class="bio_section">
                <h2 class="title title-smaller">Биография</h2>
                <div class="bio_section-content">
                    ${bio}
                </div>
            </section>
            <section class="stat-section">
                <h1 class="stat-section__title">Статистика</h1>
                <div class="stat-section__cards">
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">${goals}</h1>
                        <p class="stat-section__card-description">голов забито</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">1:10:10</h1>
                        <p class="stat-section__card-description">время матча</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">${yellowCards}}</h1>
                        <p class="stat-section__card-description">жёлтые карточки</p>
                    </div>
                    <div class="stat-section__card">
                        <h1 class="stat-section__card-number">${redCards}</h1>
                        <p class="stat-section__card-description">красные карточки</p>
                    </div>
                </div>
            </section>
        </section>
`
}