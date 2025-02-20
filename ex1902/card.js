document.querySelector('#btn').addEventListener('click', () => {
    const title = document.querySelector('#title'),
        url = document.querySelector('#url'),
        description = document.querySelector('#description'),
        date = document.querySelector('#date');

    const character = {
        name: title.value,
        image: url.value,
        description: description.value,
        date: date.value,
    }

    let newCard = document.createElement('article');
    newCard.classList.add('card');
    newCard.title = character.description
    
    let titleEl = document.createElement('h3');
    titleEl.textContent = character.name;

    let imageEl = document.createElement('img');
    imageEl.src = character.url;

    let dateEl = document.createElement('h6');
    dateEl.textContent = character.date;

    newCard.appendChild(titleEl);
    newCard.appendChild(imageEl);
    newCard.appendChild(dateEl);

    document.querySelector('#cardContainer').appendChild(newCard)

    console.log("Imagem carregando:", character.image);


})