## Element 객체
> 엘리먼트(각각의 태그들)를 추상화한 객체
> Element > HTMLElement > HTML(TagName)Element
> Element 객체 HTMLElement 객체를 구분하는 이유?<br>
> DOM이 꼭 HTML만을 프로그래밍적으로 제어하는 규격이 아니기 때문.


### 1.식별자 API
- Element.tagName : 현재 이 엘리먼트의 태그 네임을 찾아주는 **읽기 전용** 프로퍼티<br>
(**태그넴을 바꿔주진 못함**)

```javascript
<ul>
    <li>html</li>
    <li>css</li>
    <li id="active">JavaScript</li>
</ul>
<script>
    console.log(document.getElementById('active').tagName //li
</script>
```

- Element.id : Element.tagName와 다르게 id값을 바꿔줄 수 있음

```javascript
<ul>
    <li>html</li>
    <li>css</li>
    <li id="active">JavaScript</li>
</ul>
<script>
    var active = document.getElementById('active'); // active
    console.log(active.id); // active
    active.id = 'deactive'; //id값을 active > deactive로 변경
    console.log(active.id); // deactive
</script>
```

- Element.classList<br>
className 불편한 점:추가하려면 기존 유무를 먼저 확인해야하고<br>
삭제하려면 삭제하지 않을 것을 className으로 재지정함. 그래서 필요한게 classList<br>

```javascript
<ul>
    <li>html</li>
    <li>css</li>
    <li id="active" class="marked current">JavaScript</li>
</ul>
<script>
var active = document.getElementById('active')
    active.classList // DOMTokenlist (=클래스들 유사 배열로 모아둠)
    active.classList[1] // en번째로 저장된 클래스 네임, 여기선 current
    for(var i = 0; i < active.classList.length; i++){
        condole.log(active.classList[i]);
    } // active.classlist 열거~
    
    active.classList.add('am'); //classList에 class 추가 방법은? add 메소드 활용
    active.classList.remove('am'); //classList에 제거 방법은? add 메소드 활용
    active.classList.toggle('am'); // 실행할 때마다 넣었다 뺐다 하려면?(온오프버튼)
</script>
```
---
### 2.조회 API:#### 조회 대상을 제한하는 방법에 대하여
document.getElmentsBy*와 Element.getElmentsBy*차이 <br>
문서 전체의 내용 중에서 찾게 되고 , 찾은 엘리먼트의 하위 엘리먼트만 찾게 됨. 아래 예시 ㄱ

 ```javascript
<ul>
    <li class="marked">html</li>
    <li>css</li>
    <li id="active">JavaScript</li>
        <ul>
            <li>js</li>
            <li class="marked">dom</li>
            <li class="marked">bom</li>
        </ul>
</ul>
<script>
//document.getElmentsBy 방식(문서 전체에서 찾음)
  var list = document.getElementsByClassName('marked');
  console.log.group('document');
  for(i = 0; i<list.length !++){
      cosole.log(list[i].textContent)
  }
  console.groupEnd();
  > html dom bom

//Element.getElmentsBy* 방식
console.group('active');
var active = document.getElementById('active');
var list = active.getElementsByClassName('marked');
for(var i=0; i<list.length; i++){
console.log(list[i].textContent);
}
console.groupEnd();
> dom bom만 찾음
</script>
 ```
---
### 3.속성 API: #### 태그의 이름(<a>)만으로 정보가 부족할 때<br> id href와 같은 속성(attribute)을 통해서 부가 정보를 제시<br>
   
   ```html
     <a id="target" href="제어대상을찾기(1).html">제어 대상</a>
    <script>
        // 속성값 가져오기
    var t = document.getElementById('target') //제어 대상이라는 a 태그를 변수에 담기
        t.getAttribute('href'); //"제어대상을찾기(1).html"
        t.id //target
        t.getAttribute('id') //target

        // 속성값 변경하기
        t.setAttribute('href','molbom.com')

        //속성값 추가하기
        t.setAttribute('title','molom블로그')

        //속성값 제거하기
        t.removeAttribute('title')

        //속성값 유무
        t.hasAttribute('title')
    <script>       
        ```
    
    
   **속성과 프로퍼티**
   
   ```html
    <p id ="target">
        hi
        </p>
        <script>
        var target = document.getElementById('target');
        
        //attribute방식
        target.setAttribute('class','important');
        
        //property방식
        target.className = 'important';
        </script>
    ```
   
    
    속성방식과 프로퍼티방식은 이름이 다른 경우나 (class /className) 값이 다른 경우가 있으니 유의!
