### var vs let, const
---
`var` 키워드는 `Function level scope` :재선언, 재할당 가능 <br>
    - 함수 밖에서 선언한 함수 스코프 변수는 전역 범위
    - 함수 안에서 선언하면 함수 안에서만 접근
   
    ```javascript
    var a = "apple";
    function amo(){
    var b = "lemon";
    console.log(a); // apple - 전역 변수 
    }
    
    function oma(){
    var c ="orange";
    console.log(c); // orange - 해당 함수 내 선언한 변수
    console.log(a); // 전역 변수. 출력 ok
    console.log(b); // 해당 함수 내 선언 변수 아님. 출력 놉
    ```
   
   
`let` 키워드는 `block level scope` : 재선언 놉, 재할당 가능<br>
    - 블록 스코프는 중괄호{}로 경계 구분 
    - 블록 스코프는 함수 밖에서 선언하면 전역 접근 가능
    - 블록 안에서 선언하면 자신을 정의한 블록과 하위 블록에서만 접근 가능
    
    ```javascript
    let a = "apple";
    if(true){
    let b = "kiwi";
    console.log(a); // 출력
    console.log(b); // 출력
    }
    
     console.log(a); // 출력
     console.log(b); // 출력 놉
     ```
     
 `const` 키워드는 `block level scope` :재선언,재할당 불가능 <br>   
    - 반드시 선언과 할당이 이뤄져야함(let은 선언 할당 따로 가능)
    - 상수는 가독성과 유지 보수를 위해(대문자)
    - 객체에도 사용 가능 
        + 객체로 사용될 때 재할당 금지, 객체 내용은 변경 가능
        
    ```javascript
    const amo = {name:"은지"};
    amo - {}; // 재할당 놉
    
    amo.name = "허니";
    console.log(amo); // {name : "허니"}
    ```
   
   
  ### 화살표 함수 
  >  => 문법을 이용하는 축약형 함수. function 지웠다고 생

```javascript
//매개 변수 없는 경우
var amo =() =>console.log('은지');
amo(); // '은지'

//매개 변수 한 개인 경우, ()생략 가능 
var amo = a => a;
amo('am'); //am

//매개변수가 여러개라면 
var sum = (a,b) => a+b; //한 줄은 {} 없이 가능
sum(3,5); //8

//여러줄은 {} 사용하고 반환할 때 return 사용
var sum =(a,b) =>{
    var c =1;
    return a+b+c;
}
sum(1,2,3) //6

//객체 반환
var amo = () => ({});

// 콜백 함수 , 짝수가 아니라면. 
var number = [1,4,8];
var numberarr = number.filter( arr => (arr % 2) !== 0);
console.log(numberarr); //1,8

//배열 표현식
var evens = [2, 4, 6, 8,];
var nums = evens.map((v, i) => v + i);  // [2, 5, 8, 11]

//
```
### class
- 먼저 `prototype` : 객체의 공통 함수를 만들어서 같은 객체들이 공통으로 사용 할 수 있도록 함
```javascript
function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
    }

    /* Person 생성자 함수에 공통적으로 사용할 sum이라는 메소드 만듬.
    * 생성자 함수 안에 포함되지 않기 때문에 객체가 만들어질 때 마다 생성 안해도됨. 메모리 절약
    * 생성자 함수로 만든 모든 객체에 접근이 가능. 하나의 객체를 수정해도 수정한 객체만 영향.
    */
Person.prototype.sum = function(){
    return `prototype`.first+this.second;
}

var kim = new Person('kim',10,20);
var lee = new Person('lee',10,10);
console.log(`${kim.sum()},kim.sum()`); //kim.sum() prototype : 30
```

- classes
```javascript
// class 객체에 속하는 함수(=메소드)만들 때는 function sum() 이라고 하지 않음.
// 객체를 생성할 때 컨스터럭터 함수를 자동으로 실행! 약속된 이름이다
// 상속,일단 이해만 해라!
class Person{
   constructor(name,first,second){
       this.name = name;
       this.first = first;
       this.second = second;
    }
    //메소드 구현 방식
    sum(){
       return 'prototype: '+(this.first+this.second);
    }
}

//extends Person을 통해 중복된 코드를 지우기 가능. Person 정보를 상속!
class PersonPlus extends Person{
    avg(){
        return(this.first+this.second) /2;
    }
}

var kim = new PersonPlus("kim",10,20);
console.log("kim",kim); //kim Person{name:'kim',first:20,second:20}
```

### Destructuring assignment : 배열이나 객체의 속성을 해체해서 그 값을 개별 변수에 
담을 수 있게 하는 것

```javascript
//객체 구조 분해 중  기본 할당, 할당하는 변수명은 생략 가능
const amo = {
  name : "zoe",
  age : 28
};
const {
name,
age} = amo
console.log(name) //zoe

//선언 없는 할당
const{name,age} ={
name: "zoe",
age:28
};
console.log(name); //name



//배열 분해 할당
//1) 원래 배열 (쥰나 귀찮)
const array =['a','b','c','d']
const first =color[0]
console.log(first);

// 2) 선언에서 분리한 할당 
const [first,second,third] = ['a','b','c'];
console.log(first); //a

// 2-1) 배열 분리 원하면
const hyukOh = ["오혁","임동건","이인우","임현제"]
const [오혁,...restHyukOh] = hyukOh;
console.log(오혁); //오혁
console.log(restHyukOh); //["임동건","이인우","임현제"]

//2-2) 기본값
[a=2,b=7] = [3];
console.log(a); //3

```



### 기본 매개변수(Default parameter) :함수에 전달된 파라미터의 값이 undefined이거나 전달된 값이 없을 때, 초기화 설정된 값
```javascript
//b를 위해 아무값이 없으니까 naN!
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // NaN !

//이를 방지하려고 함수가 오직 한 개의 인수만 있다면 b를 1로 설정 함. 이 과정을 간편하게 만드는게 매개변수
function multiply(a, b = 1) {
  return a*b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5

//좀 더 이해하는 예시 
function band(korean = "혁오", Taiwan = "선셋롤코", US = "콜플"){

console.log(`${korean}:${Taiwan}:${US}`);
}

band(); //혁오:선셋롤코:콜플
band('파라솔','아돈노') //파라솔:아돈도:콜플 매개변수 콜플 작동
```                                         

### Spread 연산자
```javascript
표현 방식: [...literable]

- Array Spread
let one = [1,2];
let two = [3,4];
let spread = [0,...one,5...two]
console.log(spread); //[0,1,2,5,3,4]

-String Spread
let str = "zoe";
let spread = [...str];
console.log(spread); //["z","o","e"]

-Rest parameter
function test(a,b,...rest){
console.log(a,b,rest);
}
test(...[1,2,3,4,5]); //12[345]
```

### map 
- new map (['key',value]) 형식
:key 를 사용해서 value 를 get, set 할 수 있음
```javascript
// 사용1
let me = new Map();
me.set('name', 'kevin');
me.set('age', 28);
console.log(me.get('age'); // 28

// 사용2
let you = new Map().set('name', 'paul').set('age', 34);
console.log(you.get('name')); // 'paul'
[참조] : (https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b)
```

###  iterable 과 iterator
- Iterable protocol (반복 가능한 오브젝트)
    + Iterable Object 열거 가능한 오브젝트 : Array,String,map,set,argument등

- Iterator protocol : 오브젝트의 값을 순서대로 처리하는 규약
    + 다음값을 가져오려면 반드시 next() 메소드 호출<br>
    return 값으로 {value: 'value',done:false} 형태 오브젝트 리턴하고<br>
    done:ture를 반환하면 반복문 종료
    
예시 [참조]:(https://mollangk.tistory.com/28?category=732627)




 
