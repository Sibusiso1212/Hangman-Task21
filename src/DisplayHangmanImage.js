import React from 'react'
// Import the pictures for the hang man game
import win from './images/win.jpg';
import lose from './images/lost.jpg';
import state1 from './images/state1.jpg';
import state2 from './images/state2.jpg';
import state3 from './images/state3.jpg';
import state4 from './images/state4.jpg';
import state5 from './images/state5.jpg';
import state6 from './images/state6.jpg';
import state7 from './images/state7.jpg';
import state8 from './images/state8.jpg';
import state9 from './images/state9.jpg';
import state10 from './images/state10.jpg';
import state11 from './images/state11.jpg';

    // Display Hangman image or Winning/Losing Image
    function DisplayHangmanImage(props){

        const status = props.status;

        if(status === 0){
            return(<img src={state1} className="hangmanImage" alt="hang man" />)
        }
        else if(status === 1){
            return( <img src={state2} className="hangmanImage" alt="hang man" />)  
        }
        else if(status === 2){
            return( <img src={state3} className="hangmanImage" alt="hang man" />)
        }
        else if(status === 3){
            return( <img src={state4} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 4){
            return( <img src={state5} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 5){
            return( <img src={state6} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 6){
            return( <img src={state7} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 7){
            return( <img src={state8} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 8){
            return( <img src={state9} className="hangmanImage" alt="hang man" />)   
        }
        else if(status === 9){
            return( <img src={state10} className="hangmanImage" alt="hang man" />)   
        }
        // State 10 the user have lost the game - Display Completed hangman and Game Over image
        else if(status === 10){
            return( <div>
                        <img src={state11} className="hangmanImage" alt="hang man" />
                        <img src={lose} className="gameOverImage" alt="game over - you lost" />
                    </div>)   
        }
        // User won the game Display win image
        else if(status === "won"){
            return( <img src={win} className="winImage" alt="You won the game" />) 
        }
    }

export default DisplayHangmanImage