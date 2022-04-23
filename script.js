//Global constants
const volume = 0.5;
const cluePauseTime = 333; 
const nextClueWaitTime = 1200;

//Global variables
let pattern = []
let mistakes = 0
let clueHoldTime = 0
let progress = 0; 
let guessCounter = 0;
let gamePlaying = false;
let tonePlaying = false;


function startGame(){
  progress = 0;
  gamePlaying = true;  
  clueHoldTime = 1000;
  mistakes = 3;
  pattern = randomize();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");  
  playClueSequence();
}

function stopGame(){
  gamePlaying = true;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");  
}

function randomize(){
  return Array(8).fill().map(() => Math.floor(Math.random() * 6) + 1);
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
        clueHoldTime -= 110;
      }
    }else{
      guessCounter++;
    }
  } else{
    mistakes --;
    if (mistakes == 0) {
      loseGame();
    } else if (mistakes == 1) {
    alert("Incorrect. You have 1 chance remaining. Try again.");
    playClueSequence();
    } else {
    alert("Incorrect. You have 2 chance remaining. Try again.");
    playClueSequence();
    }
    
  }
}   


function winGame(){
  stopGame();
  alert("Game Over. Congratulations, you won! 🎉");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 335.6,
  3: 392,
  4: 436.2,
  5: 472.8, 
  6: 512, 
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


