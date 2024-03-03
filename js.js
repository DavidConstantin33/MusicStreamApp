//Account Objects
const acc1 = {
    name: 'David Constantin',
    username: 'DC',
    password:  'parola123'
}

const acc2 = {
    name: 'Cristina Tatiana',
    username: 'CrissT',
    password: 'motonel123'
}

const accounts = {
    acc1, acc2
}

//Variables
const audio = new Audio();
const loginModal = document.querySelector('.loginModal');
const usernameLogin = document.querySelector('.username');
const passwordLogin = document.querySelector('.password');
const loginBtn = document.querySelector('.loginBtn');
const banner = document.querySelector('.welcomeText');
const bannerBox = document.querySelector('.home');
const songImg = document.querySelector('.imgPlay');
const songName = document.querySelector('.titlePlay');
const FLBtn = document.querySelector('.FL');
const B2Btn =document.querySelector('.B2');
const RunBtn = document.querySelector('.runBtn');
const heartBtn = document.querySelector('.heartBtn');
const app = document.querySelector('.app');
const playBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('timer');
const progressContainer = document.getElementById('dragInput');
let isPlaying = false;

//                                      Functions

const playPause = function() {
    if (isPlaying) {
        audio.pause();
    } else {
        if (audio.currentTime === audio.duration) {
            // Reset the currentTime to 0 if the audio has reached the end
            audio.currentTime = 0;
        }
        audio.play();
    }
    isPlaying = !isPlaying;
};

audio.addEventListener('ended', function() {
    // Reset the currentTime to 0 when the audio reaches the end
    audio.currentTime = 0;
    isPlaying = false;

    // Update the progress bar
    progressBar.value = 0;
});

/////////                                DRAG                        ///////////
progressBar.addEventListener('input', function() {
    const percentage = progressBar.value / 100;
    audio.currentTime = percentage * audio.duration;
});

progressContainer.addEventListener('mousedown', function(event) {
    const totalWidth = progressContainer.clientWidth;
    const clickX = event.clientX - progressContainer.getBoundingClientRect().left;
    const percentage = clickX / totalWidth;

    progressBar.value = percentage * 100;
    audio.currentTime = percentage * audio.duration;

    audio.pause();
});

progressContainer.addEventListener('mouseup', function() {
    audio.play();
});

audio.addEventListener('timeupdate', function() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});


/////////


//                                Login

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    for (const acc of Object.values(accounts)) {
        if (acc.username === usernameLogin.value && acc.password === passwordLogin.value) {
            loginModal.classList.add('hidden');
            const firstName = acc.name.trim().split(' ')[0];
            bannerBox.classList.remove('hidden');
            app.classList.remove('hidden');
            banner.textContent = `Welcome Back, ${firstName}`;
            return;
        }
    }
    console.log('Invalid username or password');
});


//                   Play buttons

FLBtn.addEventListener('click', function() {
    audio.src ='FlashingLights.mp3';
    songName.textContent='Flashing Lights';
    songImg.src='yeCover.jpg';
    playPause();
});

B2Btn.addEventListener('click', function() {
    songName.textContent='Bound 2';
    songImg.src='bound.jpg';
});

RunBtn.addEventListener('click', function() {
    songName.textContent='Runaway';
    songImg.src='yealbum.jpg';
});

heartBtn.addEventListener('click', function() {
    songName.textContent='Heartless';
    songImg.src='yeheart.png';
});

playBtn.addEventListener('click', playPause);