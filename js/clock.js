const clock = document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 2000); //두개의 argument를 받는다. 첫번째 실행할 함수, 두번째 시간 간격

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}`;
    // console.log(date);
}
getClock();
setInterval(getClock, 1000);
