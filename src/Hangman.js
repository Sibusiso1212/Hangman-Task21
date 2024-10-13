import React,{useState} from 'react';
// Import the dictionary of words
import dictionary from './words/dictionary.txt';
// Import Hangman images display and guess word display
// Use props to control the display
import DisplayHangmanImage from './DisplayHangmanImage';
import DisplayGuessWord from './DisplayGuessWord';

/* Dear Reviewer:
For ease of marking and testing I have left the guess word to display with console.log
Kind regards,
Martin */

function Hangman() {

    // Declare State Correct letters & Wrong letters
    const[correctLetter,setCorrectLetter] = useState(0);
    const[wrongLetter,setWrongLetter] = useState(0);

    // Declare state amount of games won and lost
    const[wonGame,setWonGame] = useState(0);
    const[lostGame,setLostGame] = useState(0);

    // Guess Word array state 
    const[guessWordEasy,setGuessWordEasy] = useState([]);

    // TO be displayed if the player lost the game
    const[displayGuessWordEasyString,setDisplayGuessWordEasyString] = useState(false);
    const[guessWordEasyString,setGuessWordEasyString] = useState([]);

    // Declare state to not show alphabet and letters of alphabet status to 0
    const[displayAlphabetButtons,setDisplayAlphabetButtons] = useState(false);
    const[alphabet,setAlphabet] = useState([
        {letter:"a", status:0},
        {letter:"b", status:0},
        {letter:"c", status:0},
        {letter:"d", status:0},
        {letter:"e", status:0},
        {letter:"f", status:0},
        {letter:"g", status:0},
        {letter:"h", status:0},
        {letter:"i", status:0},
        {letter:"j", status:0},
        {letter:"k", status:0},
        {letter:"l", status:0},
        {letter:"m", status:0},
        {letter:"n", status:0},
        {letter:"o", status:0},
        {letter:"p", status:0},
        {letter:"q", status:0},
        {letter:"r", status:0},
        {letter:"s", status:0},
        {letter:"t", status:0},
        {letter:"u", status:0},
        {letter:"v", status:0},
        {letter:"w", status:0},
        {letter:"x", status:0},
        {letter:"y", status:0},
        {letter:"z", status:0},
        {letter:"-", status:0},
    ]);

    // Create the Guess Word display by using one of the words from the dictionary
    function createGuessWord(){

        // Fetch the dictionary text file
        fetch(dictionary).then(r => r.text()).then(text => {
            // Create an array of words from the text
            let newRandomGuessWord = text.split('\n');
                
            // Get the number of words in the array
            const arrayLength = newRandomGuessWord.length;
                        
            // Select a random up to arraylength -1
            let randomNumber = Math.floor((Math.random() * (arrayLength)) );
    
            // Select a single word and convert to lower case
            const randomSelectedWord  = newRandomGuessWord[randomNumber].toLowerCase();
    
            // Split the word into an array
                const randomSelectedWordSplit = randomSelectedWord.split("");
    
            // Change the array to Array of objects with a status
            randomSelectedWordSplit.forEach((element, index) => {                   
                randomSelectedWordSplit[index] = {letter:element, status:0} 
            })
            // Set the Word that the user must guess
            setGuessWordEasy(randomSelectedWordSplit) 
            
            // Display for reviewer for ease of testing project
            console.log(randomSelectedWord)

            // Set to display if user loses the game
            setGuessWordEasyString(randomSelectedWord)
        });       
    }
    
    // Display the alphabet letters that the user can click on
    function displayAlphabet(alphabet){
        return(
            <div>
                {alphabet.map((element, index) => {
                    if (element.status === 0) {
                    return <button className={"alphabet-"+element.status} key={index} onClick={()=>{changeStatus(element.letter) }}>{element.letter}</button>;
                    }
                    return <button className={"alphabet-"+element.status} key={index} >{element.letter}</button>;
                })}
            </div>
        )
    }

    // Check if the user did select wrong or correct letter & update
    function changeStatus(selectedLetter){

        // Declare letter false, change the true if the letter is correct
        let correct = false;

        // See if the letter is found, update true correct letter, update GuessWord status where letter is
        guessWordEasy.forEach((element, index) => {
            if (element.letter === selectedLetter) {
                correct = true             
                guessWordEasy[index] = {letter:selectedLetter, status:1}
            }
        })

        // set Guess Word
        setGuessWordEasy(guessWordEasy);
        
        let position =alphabet.findIndex(obj => obj.letter === selectedLetter);
           
        if(correct){
            alphabet[position] = {letter:selectedLetter, status:1};
            setCorrectLetter(correctLetter+1)
        } else{
            alphabet[position] = {letter:selectedLetter, status:2};
            
            let wrongSelectedLetter = wrongLetter+1
            
            setWrongLetter(wrongSelectedLetter)
            if(wrongSelectedLetter === 10){
                setLostGame(lostGame+1)
                setDisplayGuessWordEasyString(true)
                setDisplayAlphabetButtons(false)
            }
        }

        // Check if the user did win the game
        let correctLetterCount = 0;
        guessWordEasy.forEach((element) => {
            if (element.status === 1) {
                correctLetterCount++;
            }
        })
            
        if(correctLetterCount === guessWordEasy.length){
            setWonGame(wonGame+1)
            setWrongLetter("won")
            setDisplayAlphabetButtons(false)
        }
        
        // Set the alphabet with the new alphabet status
        setAlphabet(alphabet)
    }
 
    // START / RESTART the Game
    function restartGame(){

        // Set the status of Each of the alphabet letters to 0
        alphabet.forEach((element, index) => {                   
            alphabet[index] = {letter:element.letter, status:0} 
        })
        // Set Alphabet with the status 0 for all letters
        // Hide the guess word if the user lost the previous round
        // Display the alphabet
        setAlphabet(alphabet)
        setDisplayGuessWordEasyString(false)
        setDisplayAlphabetButtons(true)

        // Reset correct letters and wrong letters to 0
        setCorrectLetter(0)
        setWrongLetter(0)

        // Create a new word to guess with the hangman game
        createGuessWord()
    }

  return (
    <div>   
        <DisplayHangmanImage status = {wrongLetter}/>
        <h2 className='guessWordDisplay'>
            <DisplayGuessWord guessWordEasy={guessWordEasy}/>
        </h2>
        {displayGuessWordEasyString?guessWordEasyString:null}
        <h3>
            {displayAlphabetButtons?displayAlphabet(alphabet):null}
        </h3>
        <h2>
            <span> WON: {wonGame} | </span>
            <span> LOST: {lostGame}</span>
        </h2>
        <button onClick={()=>{restartGame()}} >START/RESET GAME</button>  
    </div>
  )
}

export default Hangman