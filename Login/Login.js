const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const login=document.getElementById('loginTwo');
const register=document.getElementById('registerTwo');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

login.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '../index.html';
});

register.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '../index.html';
});