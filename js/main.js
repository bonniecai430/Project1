document.querySelector('.play').addEventListener('click', hiddenCover)
function hiddenCover() {
    const cover = document.querySelector('.cover')
    cover.style.visibility = "hidden"
}

let turn = 0;
let firstSlelect = "";
let secondSelect = "";
const cards = document.querySelectorAll('.card')

// setTimeout(function(){

// })
    
// }, timeout);

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.add('clicked');
        if (turn === 0) {
            firstSlelect = card.getAttribute("animal");
            turn ++
        } else {
            secondSelect = card.getAttribute('animal')
            turn =0

            if(firstSlelect===secondSelect){
                
                const matched = document.querySelectorAll(".card[animal='" + firstSlelect +"']")
               matched[0].classList.add('checked')
               matched[0].classList.remove('clicked')
               matched[1].classList.add('checked')
               matched[1].classList.remove('clicked')

                
            }else{
               const notMatched = document.querySelectorAll('.card.clicked')
               notMatched[0].classList.add('wrong')
               notMatched[1].classList.add('wrong')
setTimeout(function() {
notMatched[0].classList.remove('wrong')
notMatched[0].classList.remove('clicked')
notMatched[1].classList.remove('wrong')
notMatched[1].classList.remove('clicked')

},700)

                }
            }
        

    })
})











// const replayButton = document.querySelector('.play-again')
// replayButton.addEventListener('click',playAgain)
// function playAgain(){}


