const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //로컬 스토리지에는 배열로 저장이 안됨. JSON.stringify() 배열처럼보이는 스트링을 만들어줌
}

function deleteToDo(event) {    //todolist 삭제
    const li = event.target.parentElement;  //이벤트로 타겟이 된 요소의 부모
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //이벤트로 타겟이 된 요소의 id
    saveToDos();
    //array.filter(function) 배열의 item중 function을 통과된 item으로만 새로운 배열을 반환
}

function changeToDo(event) {
    console.log("우왕");
}

function paintToDo(newTodo) {   //todolist 생성
    const li = document.createElement("li");
    li.id = newTodo.id; //.id로 html 태그에 id 부여 가능
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const buttonDelete = document.createElement("button");    //todolist 삭제버튼
    buttonDelete.innerText = "❌";
    const buttonChange = document.createElement("button");    //todolist 수정버튼
    buttonChange.innerText = "수정";
    buttonDelete.addEventListener("click", deleteToDo);   //button클릭시 deleteToDo함수 호출
    buttonChange.addEventListener("click", changeToDo);   //button클릭시 changeToDo함수 호출
    li.appendChild(span);
    li.appendChild(buttonChange);
    li.appendChild(buttonDelete);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;    //input내용을 newTodo변수에 할당
    toDoInput.value = "";               //input의 내용은 다시 null해준다.
    const newTodoObj = {                //오브젝트에 newTodo와 id를 넣어준다.
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);         //toDos배열에 방금 생긴 오브젝트를 push 한다.
    paintToDo(newTodoObj);          //todolist를 생성하는 함수
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);//JSON.parse() 로컬에 저장된 값을 array로 만들어준다.
    toDos = parsedTodos; //새로고침마다 toDos 값이 모두 초기화 된 상태로 있기때문에 로컬에 저장되있던 todos를 다시 넣어준다.
    parsedTodos.forEach(paintToDo);
}


//로컬 스토리지에는 배열로 저장이 안됨. JSON.stringify() 배열처럼보이는 스트링을 만들어줌
//JSON.parse()는 다시 위에서 한 배열처럼 보이는 스트링을 array로 꺼내준다.
//array.forEach() 받아온 array에서 item을 하나씩 반목한다.