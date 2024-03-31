const buttonsContainer = document.querySelector('.btn-group-vertical');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.flexDirection = 'row';
buttonsContainer.style.width = '537px';
buttonsContainer.style.gap = '5px';


const buttons = buttonsContainer.querySelectorAll('button');
buttons.forEach(button => {
    button.style.borderRadius = '6px';
    button.style.height = '40px';
    button.style.fontWeight = '500';
});
const homeButton = document.getElementById('home-btn');
const aboutButton = document.getElementById('about-btn');
const servicesButton = document.getElementById('services-btn');
const solutionsButton = document.getElementById('solutions-btn');
const faqButton = document.getElementById('faq-btn');
const contactButton = document.getElementById('contact-btn');

homeButton.style.width = '73px';
aboutButton.style.width = '140px';
aboutButton.style.display = 'inline-block';
servicesButton.style.width = '100px';
solutionsButton.style.width = '100px';
faqButton.style.width = '60px';
contactButton.style.width = '100px';

const jumbotronDiv = document.querySelector('.jumbotron');
jumbotronDiv.style.textAlign = 'right';

const title = jumbotronDiv.querySelector('h1');
title.style.fontWeight = '400';
jumbotronDiv.style.backgroundColor = '#6B757E';

const elementsInsideJumbotron = jumbotronDiv.querySelectorAll('*');
elementsInsideJumbotron.forEach(element => {
    element.style.color = 'white';
});

const learnMoreButton = document.querySelector('.btn.btn-primary.btn-lg');
learnMoreButton.style.backgroundColor = '#28A745';
learnMoreButton.style.border = 'none';

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cards-container > .col-lg-3");
    const cardsArray = Array.from(cards);

    cardsArray.sort(function (a, b) {
        const order = { 'Natureza': 1, 'Animais': 2, 'Pessoas': 3, 'Tecnologia': 4 };
        const titleA = a.querySelector(".card-title").textContent.trim();
        const titleB = b.querySelector(".card-title").textContent.trim();
        return order[titleA] - order[titleB];
    });

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = '';
    cardsArray.forEach(function (card) {
        cardsContainer.appendChild(card);
    });
});

const animalsButton = document.querySelector('.animals-btn');
animalsButton.style.backgroundColor = '#28a745';
animalsButton.style.border = 'none';

const list = document.querySelector('.list-group');
const fourthItem = document.createElement('li');
fourthItem.classList.add('list-group-item');
fourthItem.textContent = 'Quarto item';

const fifthItem = document.createElement('li');
fifthItem.classList.add('list-group-item');
fifthItem.textContent = 'Quinto item';

list.appendChild(fourthItem);
list.appendChild(fifthItem);

document.addEventListener("DOMContentLoaded", function() {
    const firstItem = document.querySelector('.list-group-item.active');
    firstItem.style.backgroundColor = '#FFFFFF';
    firstItem.style.color = '#000000';
    firstItem.classList.remove('active');

    const fourthItem = document.querySelectorAll('.list-group-item')[3];
    fourthItem.style.backgroundColor = '#027bff';
    fourthItem.style.color = '#FFFFFF';
});