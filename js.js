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

FLBtn.addEventListener('click', function() {
    songName.textContent='Flashing Lights';
    songImg.src='yeCover.jpg';
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
