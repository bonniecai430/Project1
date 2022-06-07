document.querySelector('.play').addEventListener('click', hiddenCover)
function hiddenCover() {
    const cover = document.querySelector('.cover')
    cover.style.visibility = "hidden"
}

let turn = 0;
let firstSlelect = "";
let secondSelect = "";
const cards = document.querySelectorAll('.card')



cards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.add('clicked');
        if (turn === 0) {
            firstSlelect = card.getAttribute("animal");
            turn ++
        } else {
            secondSelect = card.getAttribute('animal')
            turn =0
        }
// if(firstSlelect===secondSelect){
//     const matched = 
// }
    })
})











// const replayButton = document.querySelector('.play-again')
// replayButton.addEventListener('click',playAgain)
// function playAgain(){}


