//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form"); //querySelector는 id만 아니라 classname, tagname 모두 검색가능하기 때문에 구분을 위해 #을 붙여야 위와같은 결과가 나옴

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//위 두줄과 아래 두줄은 같음//
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //반복되는 string은 변수로 지정해 두는게 좋다.
const USERNAME_KEY = "username";    //실수를 방지하기 용이함

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    // greeting.innerText = "Hello "+ username;
    greeting.innerText = `Hello ${username}`; //윗줄과 같은 결과
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
