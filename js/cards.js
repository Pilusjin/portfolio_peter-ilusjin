const cardsContainer = document.querySelector (".cards"); 
const url = `https://portfolio.pilusjin.site/wp-json/wp/v2/posts`;

async function getCards(){

try {
    const response = await fetch(url);
    const getCards = await response.json();
    console.log(getCards);

    for (let i=0; i<getCards.length; i++){
        function createHtml(getCards) {
            cardsContainer.innerHTML += `<div class="cardsContainer">
            <h2>${getCards[i].title.rendered}</h2>
            <h3>${getCards[i].excerpt.rendered}</h3>
            <img src="${getCards[i].better_featured_image.source_url}" alt="" class="box-img">
            <p>${getCards[i].content.rendered}</p>
            </div>`;
        }
        createHtml(getCards);

    }




}catch(error){
    console.log(error);
    cardsContainer.innerHTML = `<div class="error">Ups! An error has occured</div>`;
    }
}
getCards();