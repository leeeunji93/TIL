
### 배열.메소드 [참조] : (https://bblog.tistory.com/300)

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

- for in문<br>
```javascript
var amo ={
name:'은지',
female:true,
age:22};

for(var amofilm in amo){
console.log(amofilm+":"+amo[amofilm]);}
```

-forEach문<br>
```javascript
var arr = [3, 9, 4, 2, 7, 6];
arr.forEach((n)=> {
    if (n % 2 == 0) {
        console.log(n);
    }
});
```
---

#### Array 메소드는 for문을 대체 가능
- .map
- .filter

