"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
const promo = document.querySelector(".promo__bg");
const genre = document.querySelector(".promo__genre");
const movieList = document.querySelector(".promo__interactive-list");

adv.forEach(item => item.remove());
genre.textContent = "драма";
promo.style.backgroundImage = "url(img/bg.jpg)";

movieDB.movies.sort().forEach((movie, index) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">
            ${index + 1}. 
            ${movie}
           <div class="delete"></div>
        </li>
    `;
});