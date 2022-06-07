document.querySelector('.play').addEventListener('click',hiddenCover)
function hiddenCover(){
const cover = document.querySelector('.cover')
cover.style.visibility="hidden"
}

const turn = 0
const firstSlelect=''
const secondSelect=''
const Cards =document.querySelector('.guessboard')




Cards.forEach(function(card){
    card.addEventListener('click',function(){
       if(turn === 0){
           firstSlelect= card.getAttribute('animal')
    
       }else{
           secondSelect= card.getAttribute('animal')
           turn=0
       }
        }
    )
}
)

const replayButton = document.querySelector('.play-again')
replayButton.addEventListener('click',playAgain)
function playAgain(){}