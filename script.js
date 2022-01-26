let rock = document.querySelector('#one');
let paper = document.querySelector('#two');
let scissors = document.querySelector('#three');
let point = 0;
let enemyPoint = 0;
let defaultPoint = document.querySelector('.defaultPoint')
let hasil = document.querySelector('.result')
let enemyDefaultPoint = document.querySelector('.enemyDefaultPoint')
let cards = document.querySelectorAll('.cards')
let header = document.querySelector('.header')
let enemyChoice = document.querySelector('.enemyChoice')

//if clicked one of the options, run function that takes the value of the options that got clicked and put it in 
//a variable

function playRock(e){
    if(enemyPoint < 5 && point < 5){
        /* playAnimation('rock'); */
        playRound('rock', computerPlay())
    }
}

function playPaper(e){
    if(enemyPoint < 5 && point < 5){
       /*  playAnimation('paper') */;
        playRound('paper', computerPlay())
    }
}

function playScissors(e){
    if(enemyPoint < 5 && point < 5){
       /*  playAnimation('scissors'); */
        playRound('scissors', computerPlay())
    }
}


//generate a random choice between rock, paper, scissor
function computerPlay(){
    let computerChoices = ['rock', 'paper', 'scissors'];
    let getRandomChoices = Math.floor(Math.random() * computerChoices.length);
    return computerSelection = computerChoices[getRandomChoices];
}

//deciding who wins
function playRound(playerSelection, computerSelection){
    
    if(computerSelection == 'rock'){
        getRockImg()
    } else if (computerSelection == 'paper'){
        getPaperImg()
    } else if (computerSelection == 'scissors'){
        getScissorsImg()
    } 

    //rock

    if(playerSelection == 'rock' && computerSelection =='paper'){
        enemyDefaultPoint.textContent = enemyPoint + 1;
        enemyPoint++;
        if(enemyPoint == 5){hasil.textContent = "You lose!"}
        return console.log("You lose! Paper beats Rock");
    } else if(playerSelection == 'rock' && computerSelection == 'rock'){
        return console.log("draw");
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        defaultPoint.textContent = point + 1;
        point++;
        if(point == 5){hasil.textContent = "You win!"}
        return console.log("You win! Rock beats Scissors!");
    }
    
    //scissors

    if(playerSelection == 'scissors' && computerSelection == 'rock'){
        enemyDefaultPoint.textContent = enemyPoint + 1;
        enemyPoint++;
        if(enemyPoint == 5){hasil.textContent = "You lose"}
        return console.log("You lose! Rock beats Scissors");
    } else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return console.log("draw");
    }  else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        defaultPoint.textContent = point + 1;
        point++
        if(point == 5){hasil.textContent = "You win!"};
        return console.log("You win! Scissors beats Paper!");
    }
    
    //paper

    if(playerSelection == 'paper' && computerSelection == 'paper'){
        return console.log('draw');
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        enemyDefaultPoint.textContent = enemyPoint + 1;
        enemyPoint++;   
        if(enemyPoint == 5){hasil.textContent = "You lose"}
        return console.log("You lose! Scissors beats Paper");
    } else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return console.log("draw");
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        defaultPoint.textContent = point + 1;
        point++;
        if(point == 5){hasil.textContent = "You win!"}
        return console.log( "You win! Paper beats Rock!");
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        defaultPoint.textContent = point + 1;
        point++
        if(point == 5){hasil.textContent = "You win!"};
        return console.log("You win! Scissors beats Paper!");
    }
}



rock.addEventListener('click', playRock)
paper.addEventListener('click', playPaper)
scissors.addEventListener('click', playScissors)


function getRockImg(){
    enemyChoice.src = "img/rock.png"
    enemyChoice.setAttribute('style', 'border: 5px solid #EB212E; box-shadow: 0 0 1em 0 #EB212E') 
}

function getPaperImg(){
    enemyChoice.src = "img/paper.png"
    enemyChoice.setAttribute('style', 'border: 5px solid #EB212E; box-shadow: 0 0 1em 0 #EB212E') 
}

function getScissorsImg(){
    enemyChoice.src = "img/scissor.png"
    enemyChoice.setAttribute('style', 'border: 5px solid #EB212E; box-shadow: 0 0 1em 0 #EB212E') 
}

function reset(){
    enemyChoice.src = 'img/photo-1554050857-c84a8abdb5e2.jpeg'
    enemyChoice.setAttribute('style', 'box-shadow: none')
    point = 0;
    enemyPoint = 0;
    enemyDefaultPoint.textContent = 0;
    defaultPoint.textContent = 0;
    hasil.textContent = '';
}

let btn = document.querySelector('button')
btn.addEventListener('click', reset)