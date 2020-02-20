## html
### button 생성

1.전송 목적
```html
- <input type="submit" value="클릭">  =<button type="submit">클릭</button>

- <input type="button"
          value="클릭"
          onclick="alert("hi)>
```

2.버튼 기능 구현 : form을 submit 하지 않고 자스에 의존해서 인터페이스 조작
```html
- <button type="button">`클릭 </button> :토글버튼, 닫기 버튼, 이전 다음
   
- <button> 클릭 </button> :태그 사이에 이미지도 넣기 가능, 다양한 디자인 가능
```

## css
 - rgba(적색,녹색,청색,투명도)
 - rgb(0,255,0); opacity:0.5;
 차이점:opacity 속성은 투명도 지정했을 때 모든 자식 요소에 상속, rgba 괜춘


## js
- array.from 메소드는 object로부터 array를 만듬<br>
```javascript
console.log(Array.from(colors));
```