const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'matrix-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metrix/Jacinto Design',
  },
  
]

// Check if playing
let isPlaying = false;


// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play and pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Curren Song 
let songIndex = 0;

// Pervious Song
function pervSong() {
  songIndex--;
  if (songIndex <0 ){
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  playSong();
}


// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length -1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const {duration, cureentTime} = e.srcElemnt;
    
    // Update Progress bar width
    const progressPercent = (cureentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}
//  On Load - Select First Song 
loadSong(songs[3]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);