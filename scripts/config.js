function openPlayerConfig(event) {

 

  editedPlayer= +event.target.dataset.playerid; //playerid property +'1' as a string covnerts to number 
 
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig(){
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';

  //removing errors
  formElement.firstElementChild.classList.remove('error'); // to remove the red errors
  errorsOutputElement.textContent='';

  formElement.firstElementChild.lastElementChild.value='';
}
  

function savePlayerConfig(event){
  event.preventDefault(); // prevents the browser from sending a request automatially
  
  const formData= new FormData(event.target); //blueprint functions
  const enteredPlayerName= formData.get('playername').trim(); //allows us to get a value from our inputs
  // trim will get rid of extra white space

  if(!enteredPlayerName) //empty string will be considered a false value
  {
      event.target.firstElementChild.classList.add('error'); //dom traversal

      errorsOutputElement.textContent="Enter a valid name!";
      return;
  }
  
  const updatedPlayerDataElement= document.getElementById('player-'+editedPlayer+'-data');
  
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;


  // if(editedPlayer === 1)
  // {
  //   players[0].name= enteredPlayerName;
  // }
  // else
  // {
  //   players[1].name= enteredPlayerName;
  // }

    players[editedPlayer-1].name=enteredPlayerName;

    closePlayerConfig(); // to close the overlay

}
 
