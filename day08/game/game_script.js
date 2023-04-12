const choices=document.querySelectorAll('.choice');
const score=document.getElementById('score');
const restart=document.getElementById('restart');
const modal=document.querySelector('.modal');
const result = document.getElementById('result');

const scoreboard={
    player: 0,
    computer: 0
};

//play Game
function playGame(e){
    restart.style.display='inline-block';
    const playerChoice=e.target.id;
    const computerChoice=getComputerChoice();
    const Winner=getWinner(playerChoice,computerChoice);
    showWinner(Winner,computerChoice);
};

// computer choice 
function getComputerChoice(){
    const rand=Math.random();
    if(rand<0.35){
        return 'rock';
    }else if(rand <=0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
};

// winner  player && computer choice
function getWinner(player,computer){

            if(player===computer){
                return 'draw'
            }else if(player==='rock'){
                if(computer==='paper'){
                    return 'computer';
                }else{
                    return 'player';
                }
            }else if(player==='paper'){
                    if(computer==='scissors'){
                        return 'computer';
                    }else{
                        return 'player';
                    }
            }else if(player==='scissors'){
                    if(computer==='rock'){
                        return 'computer'
                    }else{
                        return 'player'
                    }
            }
};
function showWinner(Winner,computerChoice){
    if(Winner==='player'){
        scoreboard.player++;
        result.innerHTML=`<h1 class='text-winner'>you winner</h1> 
        <i class='fa fa-hand-${computerChoice}-o fa-5x'</i>
        <p>computer choice <strong> ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    }else if(Winner==='computer'){
        scoreboard.computer++;
        result.innerHTML=`<h1 class='text-lose'>you lose</h1> 
        <i class='fa fa-hand-${computerChoice}-o fa-5x'</i>
        <p>computer choice <strong> ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    }else{
        result.innerHTML=`<h1>It's A Draw</h1> 
        <i class='fa fa-hand-${computerChoice}-o fa-5x'</i>
        <p>computer choice <strong> ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    }
    //show score

    score.innerHTML=`
    <p>player:${scoreboard.player}</p>
    <p>computer:${scoreboard.computer}</p>
    `
    modal.style.display='block';
};
// clear modal

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


// Restart game

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}
// Event listeners

choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame);