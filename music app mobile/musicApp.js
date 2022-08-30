




// ===============LISTA DE MUSICAS================

let btnOpen = document.querySelector('#btsOpen')

btnOpen.addEventListener('click', () => {
  btnOpen.classList.toggle('bts-open')
  document.querySelector('.corpoList').classList.toggle('ativa')
})

var musicas = [
  'y2mate.com - Hippie Sabotage  TRUST NOBODY  LEGENDADO .mp3',
  'y2mate.com - Ivan B  Sweaters.mp3',
  'y2mate.com - K Suave  Sexually Active feat Trippie Redd OFFICIAL MUSIC VIDEO.mp3',
  'y2mate.com - NF  The Search lyrics.mp3',
  'y2mate.com - Pain.mp3',
  'y2mate.com - Tavenchi  Spotlight.mp3',
  'y2mate.com - Travis Scott  HIGHEST IN THE ROOM Audio.mp3'
]

let audio = document.querySelector('#audio')
var currentAudio = 0
var tamanhodaFila = musicas.length

audio.src = musicas[currentAudio]



let modeRepeat = false

function alternateRepeat(){
  modeRepeat = !modeRepeat
  let btnRepeat = document.querySelector('#repeatbtn');
  btnRepeat.classList.toggle('ativa')
}

audio.addEventListener('ended', ()=>{

  if(modeRepeat == true){
    Play()
  }
  else{
    Next()
  }
})

// ===============CONVERTER SEGUNDOS EM MINUTOS==============

function Segundos_Para_Minutos(segundos) {
  var campoMinuto = Math.floor(segundos / 60)
  var campoSegundos = segundos % 60

  if (campoSegundos < 10) {
    campoSegundos = '0' + segundos
  }
  return campoMinuto + ':' + campoSegundos
}

// ===============TEMPO DA MUSICA==============

let duracao = document.querySelector('#duration')

function tempofinalMusic() {
  duracao.innerHTML = Segundos_Para_Minutos(Math.floor(audio.duration))
}
setInterval(tempofinalMusic, 1000)
tempofinalMusic()

let TempoAtualMusica = document.querySelector('#currentTime')

function currentTimeMusic() {
  TempoAtualMusica.innerHTML = Segundos_Para_Minutos(
    Math.floor(audio.currentTime)
  )
}
setInterval(currentTimeMusic, 1000)

// ===============ATUALIZAR PLAYER==============



function update() {
  return (audio.src = musicas[currentAudio])
}

// ===============BOTÕES DE AÇÃO================

// ========AVAÇAR==================


function backward() {
  audio.currentTime = audio.currentTime - 5
}


function forward() {
  audio.currentTime = audio.currentTime + 5
}


function Prev() {
  if (currentAudio === 0) {
    currentAudio = 0
    update()
    Play()
  } else {
    currentAudio = currentAudio - 1
    update()
    Play()
  }
}

function Next() {
  if (currentAudio >= musicas.length - 1) {
    currentAudio = 0
    update()
    Play()
  } else {
    currentAudio = currentAudio + 1
    update()
    Play()
  }
}

let btnPlay = document.querySelector('#play')

//btnPlay.addEventListener('click', () => {})

function Play() {
  btnPlay.style.display = 'none'
  btnPause.style.display = 'inline'
  audio.play()
};

let btnPause = document.querySelector('#pause')

function Pause() {
  btnPause.style.display = 'none'
  btnPlay.style.display = 'inline'
  audio.pause()
}



function repeatTrack() {
  let currentIndex = currentAudio
  update(currentIndex)
  Play()
}


/*
var seek_slider = document.querySelector('#seek')

function setUpdate(){
  let seekPosition = 0
  if(!isNaN(audio.duration)){
    seekPosition = audio.currentTime * (100 / audio.duration);
    seek_slider.value = seekPosition
  }
}

setInterval(setUpdate,1000)

function seekTo(){
  let seekto = audio.duration * (seek_slider.value / 100)
  audio.currentTime = seekto;
}
*/



var seekBox = document.querySelector('.seekBarbox')
var seekProgessed = document.querySelector('.seekbar')

audio.ontimeupdate = function(e){
  seekProgessed.style.width = Math.floor(audio.currentTime * 100 / audio.duration) + "%"
}


seekBox.onclick = function(e) {
   audio.currentTime =((e.offsetX/seekBox.offsetWidth) * audio.duration);
}

