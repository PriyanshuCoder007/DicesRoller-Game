'use strict';

//seleecting element

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

         let currentScore, activePlayer ,playing ,scores;
            // Initilacation // 
            const init = function(){


                 currentScore = 0;
                 activePlayer = 0;
                 playing = true;
                 scores = [0,0]; // player--0 = 0, player--1 = 0;

                //starting condition//
                
                score0El.textContent = 0; 
                score1El.textContent = 0;
                
                current0El.textContent = 0;
                current1El.textContent = 0;
                
                diceEl.classList.add('hidden');

                player0El.classList.remove('player--winner');
                player1El.classList.remove('player--winner');

                player0El.classList.add('player--active');
                player1El.classList.remove('player--active');
            };

            // function calling//
            init();

        //switch to the next player creat function //
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    //before that it do condition means codition run then change it
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
} 


        //Rolling dice functionalty//

btnRoll.addEventListener('click' , function(){
    if(playing){

    //1. Generating a random dice roll
    const dice = Math.floor( Math.random() * 6 ) + 1 ;

    //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

    //3. check for rolled 1 : if true ,switch to next player
    if(dice !== 1){
        //add dice to current score
        currentScore += dice;
        
        //dynamic active
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

       
        // current0El.textContent = currentScore;  //change Later
    }else{
        // Switch to next player
       switchPlayer();
    }
  }
});

    //HOLD currentScore in player score//

    btnHold.addEventListener('click',function(){
        if(playing){

        //1.add currentScore to activePlayer score
        scores[activePlayer] += currentScore;
        //score[1] = score[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = 
        scores[activePlayer];

        //2.check if player's score is >= 100
        if(scores[activePlayer] >= 25){
            //finsh the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }

        //3.switch to the next player
        switchPlayer();
        }
    });

                    // New game btnNew //

        btnNew.addEventListener('click' , init);



      /*  score0El.textContent = 0; 
                score1El.textContent = 0;

                current0El.textContent = 0;
                current1El.textContent = 0;

            player0El.classList.remove('player--winner');
            player1El.classList.remove('player--winner');

            player0El.classList.add('player--active');
            player1El.classList.remove('player--active');
    */

           