//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form"); //querySelector는 id만 아니라 classname, tagname 모두 검색가능하기 때문에 구분을 위해 #을 붙여야 위와같은 결과가 나옴
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//위 두줄과 아래 두줄은 같음//
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const greetingLogOut = document.querySelector("#greeting-LogOut");

const HIDDEN_CLASSNAME = "hidden"; //반복되는 string은 변수로 지정해 두는게 좋다.
const USERNAME_KEY = "username";    //실수를 방지하기 용이함

function onLoginSubmit(event) {
    event.preventDefault(); //submit의 기본동작을 막아줌(새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME); //login-form에 hidden을 지정해줘 보이지 않게한다.
    localStorage.setItem(USERNAME_KEY, loginInput.value); //로컬스토리지에 Key=username, Value=loginInput.value
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    // greeting.innerText = "Hello "+ username;
    greeting.innerText = `Have a nice day ${username}`; //윗줄과 같은 결과
    greeting.classList.remove(HIDDEN_CLASSNAME);//greeting에 hidden클래스를 지워 보이게 해준다.
    greetingLogOut.classList.remove(HIDDEN_CLASSNAME);//hidden클래스를 지워 보이게 해준다.
    todoForm.classList.remove(HIDDEN_CLASSNAME);//todoForm에 hidden클래스를 지워 보이게 해준다.
}

function logout(event) {
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    greetingLogOut.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //로컬스토리지의 username의 벨류값 변수로 지정

if(savedUsername === null) {    //저장되있던 username이 없다면 실행
    loginForm.classList.remove(HIDDEN_CLASSNAME);   //login-form에 있던 hidden 을 지워준다.
    loginForm.addEventListener("submit", onLoginSubmit); //submit시 onLoginSubmit 함수 실행
} else {
    paintGreetings();
}
greetingLogOut.addEventListener("click", logout);//로그아웃 버튼 클릭시 이벤트 발생