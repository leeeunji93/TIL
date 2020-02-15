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
