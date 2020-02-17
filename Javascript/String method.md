### 문자열 자르기 관련 메소드 
**첫번째 위치값은 이상! 마지막 위치값은 미만! 이라고 생각하기**

-  `string.substr(start.length)`
	+ 첫번째 매개변수 값은 - 사용 가능하지만, 뒤는 길이라 불가능
	
```javascript
var str =‘1234567’;
console.log(`답은${str.substr(1,4)}`);
아마2345;
```

- `string.substring(start,end) `

```javascript
var str = ’123456’;
console.log(`답은${str.substring(1,4)}`);
234;
```

- `string.slice(start,end) `:
	+ 뒤에서 검색하면 - 이용
	+ 배열에서도 가능
```javascript
var str ="apple,kiwi,pie";
console.log(str.slice(-5.-9));
kiwi
//배열
```javascript
var str =new Array(”apple”,”kiwi”,”pie”,”popcorn”);
console.log(str.slice(0.2));
apple,kiwi
```
> 공통점: 두번째 매개변수 생략하면 끝 값까지 가지고 옴
 차이점: <br>
- substring(),slice() 차이점:  slice()만 - 사용 가능 
- substr(),slice() 차이점: 두번째 파라미터값이 문자열 길이냐 아니야 차이


