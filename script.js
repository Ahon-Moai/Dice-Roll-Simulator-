let batonL = document.getElementById("baton");
let diceL = document.getElementById("dice");

let audio = new Audio("song.mp3")
audio.play()



function rollDice(){
    let result = Math.floor(Math.random() * 6 ) + 1
    let diceFace = getdice(result);
    diceL.innerHTML = diceFace; 
    
    

}


function getdice(result) {
    switch (result) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }
  }

batonL.addEventListener("click", () =>{
    diceL.classList.add("roll-animation");
    
    setTimeout(()=> {diceL.classList.remove("roll-animation")
    
    rollDice()
    ;}, 1000)
})