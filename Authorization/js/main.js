const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const container = document.querySelector('.container');
const loginform = document.querySelector('.login-form');
const loginheader = document.querySelector('.loginheader');
const signupform = document.querySelector('.signup-form');
const signupheader = document.querySelector('.signupheader');

container.classList.add('hover-login');
loginform.classList.add('show');
loginheader.classList.add('up');

login.addEventListener('mouseenter', () => {
    container.classList.add('hover-login');
    loginform.classList.add('show');
    loginheader.classList.add('up');
    container.classList.remove('hover-signup');
    signupform.classList.remove('show');   
    signupheader.classList.remove('up');
});

// login.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-login');
//     loginform.classList.remove('show');
//     loginheader.classList.remove('up');
// });

signup.addEventListener('mouseenter', () => {
    container.classList.add('hover-signup');
    signupform.classList.add('show');
    signupheader.classList.add('up');
    container.classList.remove('hover-login');
    loginform.classList.remove('show');
    loginheader.classList.remove('up');
});

// signup.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-signup');
//     signupform.classList.remove('show');   
//     signupheader.classList.remove('up');
// });