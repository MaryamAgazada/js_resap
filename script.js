const textInputAlert=document.querySelector(".textInputAlert")
const btnAlert=document.querySelector(".btn__alert")
const textInput=document.querySelector(".textInput")
const titleInput=document.querySelector(".titleInput")
const createCard=document.querySelector(".create__card")
const cardContainer=document.querySelector(".card__container")
btnAlert.addEventListener("click", function showAlert() {
    let textInpAlert = textInputAlert.value;
    alert(textInpAlert);
    localStorage.setItem("savedText", textInpAlert);
});
window.addEventListener("load", function () {
    let savedText = localStorage.getItem("savedText");
    if (savedText) {
        textInputAlert.value = savedText;
    }
});



function saveCardToLocalStorage(title, text) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push({ title: title, text: text });
    localStorage.setItem("cards", JSON.stringify(cards));
}
createCard.addEventListener("click", function createCard(params) {
    let card = document.createElement("div");
    card.classList.add("card");
    let createTitle = titleInput.value;
    let createText = textInput.value;
    card.innerHTML = "<h3>" + createTitle + "</h3>" + "<p>" + createText + "</p>";
    cardContainer.appendChild(card);
    saveCardToLocalStorage(createTitle, createText);
});
