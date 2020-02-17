### Text 객체
: DOM에선 공백조차도 값
```html
(1).<p id="target1"><span>hi</span></p> <br>
(2).<p id=:target2"><br>
<span>hi</span>
(1)값: p.firstChild : <span>hi</span></p> <br>
p.firstchild.firstChild : hi <br>
(2)값:p.firstChild : textElement
textElement.nextSibling.firstChild : hi <br>
  ```

#### 1.값 API : 값을 가져오는
- `nodeValue`
- `data`
#### 2.조작 API
- `appendData()`
- `deleteData()`
- `insertData()`
- `replaceData()`
- `substringData()`
<br> 이 부분은 실제 사용할 때 다시 보는 것이 중요할듯? <br>
[참조] : (https://programmer-seva.tistory.com/59)

---
1.엘리먼트의 크기와 위치 알아내기 <br>
`t.getBoundingClientRect();`
  **width값은 content, padding, border 포함한 크기임.magin 포함 x!!**
  **t 말고 중첩된 다른 엘리먼트가 있더라도 상관 안하고 측정**
`offsetParent` : 측정 기준이 되는 엘리먼트가 무엇이냐(항상 body가 기준은 아닌거임)
  **부모 중 CSS position의 값이 static인 td, th, table 엘리먼트가 있다면 이 엘리먼트가 offsetParent가 된다**
`ClientWidth` / `ClientHeight` :테두리를 제외한 엘리먼트의 크기를 알고 싶다면<br>
[그림 참조] :(https://opentutorials.org/course/1375/7112)<br>

2.뷰포트<br>
`window.pageYOffset` : 스크롤한 만큼 정도..<br>

3.스크롤<br>
`scrollTo`<br>

4.스크린의 크기<br>
window.inner*은 뷰포트의 크기를 나타내고, screen.*은 사용자 스크린의 크기를 나타낸다.<br>
