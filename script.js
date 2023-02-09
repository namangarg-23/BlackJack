
let message=document.getElementById("messageEle")

let card1=Math.floor(Math.random()*11)
let card2=Math.floor(Math.random()*11)
let sum=card1+card2

function drawCard(){
    let cardX=Math.floor(Math.random()*11)
    sum+=cardX
    cards+="-"+cardX
    document.getElementById("sum").textContent=sum
    document.getElementById("cards").textContent=cards
    start()
}

document.getElementById("sum").textContent=sum

function start(){
    message.textContent="Do you want to draw a new card?"
    if(sum==21){
        message.textContent="BlackJack MotherFucker"
    }else if(sum>21){
        message.textContent="You are out of game"
    }else{
        start()
    }
}


let cards=card1+"-"+card2

document.getElementById("cards").textContent=cards