- 문자열을 변수에 저장할 수 있다. (오타 방지) / 이때 **변수는 대문자로**
- JSON : 데이터를 저장할 때 자스가 다룰 수 있도록 변경해줌
  + `JSON.stringify()` 자스 오브젝트를 문자열로 바꿔준다!(로컬스토리지에서 필요)
  + `JSON.parase()` 데이터를 자스 오브젝트로 바꿔줌 


```javascript

const toDos = [];
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1
    delBtn.innerText = "❌";
    //여기서 text는 사용자가 적은 할 일 값
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    //id만들어주는건 나중에 list 지울 때 몇 번인지 알면 편하니까! 
    li.id = newId
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();

}
```

- `foreach`문 : foreach 반복문은 Array 객체에서만 사용 가능한 메쏘드.배열의 요소들을 반복하여 작업을 수행한다.
```javascript
const TODOS_LS = "toDos";
function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
       const parsedToDos = JSON.parse(loadToDos);
       parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
       })
    }
}
```
- `arr.filter(callback(element))`
filter 메쏘드는 콜백함수를 인자로 받고, 콜백함수 인자로 arr의 원소를 받음<br>
콜백함수를 통해 원소를 하나 하나 검사한다.만약 배열 원소가 5개라면 5번 검사!<br>


```javascript
let toDos = [];
function deleteToDo(event){
const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDO){
    //여기서 toDo가 엘리먼트로서 toDos에 들어있는것들!! 
    ex.toDos["키위","딸기","사과"]라면 toDo는 저것들! 
        return toDo.id !== parseInt(li.id);
        //두개의 값이 다르면 (리무브차일드로 버려졌으니 다르겠지)
    });
    toDos = cleanToDos
    saveToDos()

}
```

