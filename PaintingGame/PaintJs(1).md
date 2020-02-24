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

- clientX,Y 스크린 크기
- offsetX,Y 캔버스 내 좌표 크기

- 마우스 이벤트
    + `mousemove` : 마우스가 엘리먼트에서 움직일때
    + `mousedown` : 마우스를 누르는 그 순간! (click과는 다르게 press하는 순간입니다)
    + `mouseup` : down과 반대로 마우스를 누르고 있다가 손가락을 떼는 그 순간!

[출처] : (https://itpangpang.xyz/297 [ITPangPang])

- canvas
html요소인데 context(요소 안에서 우리가 픽셀에 접근할 수 있는 방법) 가짐 <br>
const ctx = canvas.getContext('2d') 여기서 getContext 처럼 다양한 거 가
