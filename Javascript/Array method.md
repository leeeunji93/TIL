
#### Array.메소드 [참조] : (https://bblog.tistory.com/300)


- forEach문 :오로지 배열만 반복 가능한 메소드. foreach 구문의 인자로 callback 함수를 등록. 여기선 n! <br> 

```javascript
var arr = [3, 9, 4, 2, 7, 6];
arr.forEach((n)=> {
        console.log(n);
}); //3,9,4,2,7,6
```

- map

- filter

---

#### for문

- for문<br>
```javascript
 for([초기값]; [조건식];[마지막 표현 방식])
        실행문장;
    for(var i = 0; i < 8; i++){
        document.write(`${i}<br>`)
    }
/*
*초기값은 변수(카운터 변수)를 초기화<br>
*조건식이 참이면 반복하게 되고, 아니면 반복문을 빠져나감<br>
*마지막 표현 방식은 반복문이 한번씩 돌 때마다 다음 조건식을 판단하기 전에 수행되는 부분<br>
*/
```

- for in문 : 오브젝트에 있는 키를 순회하는데 이용하는 반복문.확장 속성까지 순회하니까 주의! <br>
```javascript
var amo ={
name:'은지',
female:true,
age:22};

for(var amofilm in amo){
console.log(amofilm+":"+amo[amofilm]);}
```

- for of문 : Symbol.iterator 가진 객체 반복. <br>
```javascript
var a =["mon","tue","wen"];
for(var aa of a){
console.log(aa)}; //mon tue wen 
