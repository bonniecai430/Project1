document.querySelector('.play').addEventListener('click', hiddenCover)
function hiddenCover() {
    const cover = document.querySelector('.cover')
    cover.style.visibility = "hidden"
}

let turn = 0;
let firstSlelect = "";
let secondSelect = "";
const cards = document.querySelectorAll('.card')
// const guessboard= document.querySelectorAll('guessboard')
// console.log(guessboard)
const loseMessage=document.getElementById('lose')
const winMessage=document.getElementById('win')



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



function checkWin(){

    const cardsArray= Array.from(cards);
    const  check=cardsArray.every(function(card){
        console.log(card.className)
        return card.className==="checked"
    })
console.log(check)


    if(check===true){
loseMessage.style.visibility='hidden'
winMessage.style.visibility='visible'
    }else{
loseMessage.style.visibility='visible'
    }
}
setTimeout(checkWin,40000)

























// if(cards.every(function(card){
//     card.className==='checked'
// }))
// {
//     console.log('win')
//     // winMessage.style.visibility='visible'
// }





// for(let i =0 ;i<cards.length;i++){
//    cards[i].className==='checked'

// winMessage.style.visibility='visible'
// }



// setTimeout(timer,3000)
//     function timer(){
//          return loseMessage.style.visibility='visible'
//     }






// const replayButton = document.querySelectorAll('playAgain')
// console.log(replayButton)
// replayButton.addEventListener('click',playAgain)
// function playAgain(){
//     cards.classList.remove('clicked')
//     cards.classList.remove('checked')
//     cards.classList.remove('wrong')
// }


