import React,{useState} from 'react';

function Help() {

  // Set the state if help displays or not
  const[helpState,setHelpState] = useState(false);

// Message with the rules and close button to update state
  const displayHelpToUser = ( 
    <div>
      <p><u> Game play: </u></p>
      <ul>
        <li>TheComputer generates a word or phrase.</li>
        <li>The Computer draws a number of dashes equivalent to the number of letters in the word.</li>
        <li>The User try to guess what it is one letter at a time.</li>
        <li>If the User suggests a letter that occurs in the word, the Computer fills in the blanks with that letter in the right places.</li>
        <li>Too many incorrect guesses result in loss of the game.</li>
      </ul>
      <p><u> Objective </u></p>
      <ul>
        <li>Guess the word/phrase before your man gets hung!</li>
      </ul><br/>
      <button onClick={()=>{setHelpState(false)}}>Close</button>
    </div>
  )

  // Button to click on if user needs help - display state true
  const doNotDisplayHelp = (
    <div>
      <button onClick={()=>{setHelpState(true)}}>Help</button>
    </div>
  )

  // Return true false based on state 
  return (<div>
    {helpState? displayHelpToUser : doNotDisplayHelp}
    </div>)
}

export default Help