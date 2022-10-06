const play = document.getElementById("play");
const music = document.querySelector("audio");

let isPlaying=false;

const playMusic=() => {
 isPlaying=true;
 music.play();
}

const pauseMusic=() => {
 isPlaying=false;
 music.pause();
}

play.addEventListener('click', () => {
 if (isPlaying) {
  pauseMusic();
 }
 else{
  playMusic();
 }
})