### 1.Node 관계 API
- Node.childNodes : 유사 배열임
- Node.firstChild
- Node.lastChild
- Node.nextSibling : 같은 레벨에 있는 엘리먼트
- Node.previousSibling
- Node.contains()
- Node.hasChildNodes()
<br> **공백, 줄바꿈 data도 Node에 해당되기 때문에 주의!**

### 2.Node 변경 API
#### 2-1.노드 추가
- `appendChild(child)` : 노드의 마지막 자식으로 주어진 엘리먼트 추가함. 사용하려면 먼저 노드를 생성
    + `document.createElement(tagname)` : 엘리먼트 노드를 추가
    + `document.createTextNode(data)` : 텍스트 노드를 추가
- `insertBefore(newElement,referenceElement)`
: appendChild와 동작 방법은 같음. 이미 만들어진 엘리먼트 사이나, 앞에 추가 하고 싶다면 쓰기
```javascript
<body>
<ul id="target">
    <li>HTML</li>
    <li>CSS</li>
</ul>
<input type="button" onclick="callAppendChild();" value="appendChild()"/>
<input type="button" onclick="callInsertBefore();" value="callInsertBefore()"/>
<script>
    function callAppendChild() {
        var target = document.getElementById("target");
        var li = document.createElement("li");
        var text = document.createTextNode("JS");
        li.appendChild(text);
        target.appendChild(li);
    }
     혹은!!! 
      function callAppendChild() {
        var target = document.getElementById("target");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("JS");
        target.appendChild(li);
    }
    로 해도 같다!!
    
    
    function callInsertBefore(){
        var target = document.getElementById("target");
        var li = document.createElement("li");
        var text = document.createTextNode("JS");
        li.appendChild(text);
        target.insertBefore((li.target.firstChild)) //target.firstchild(text노드)의 앞에 추가
    }

</script>
</body>
```
#### 2-2.노드 삭제와 교체
- `removeChild(child)`
```javascript
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li id="call">JS</li>
</ul>
<input type="button" onclick="callRemoveChild();" value="removeChild()"/>
<script>
function callRemoveChild(){
    var call = document.getElementById("call");
    call.parentNode.removeChild("call");
}
</script>
```

- `replaceChild(newChild, oldChild)`
```javascript
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li id="target">js</li>
</ul>
<input type="button" onclick="callAppendChild();" value="callAppendChild"/>
<script>
function callAppendChild() {
    var a = document.createElement('a');
    a.setAttribute('href','demo1.html');
    a.appendChild(document.createTextNode('hi'));

    var target = document.getElementById('target');
    target.replaceChild(a,target.firstChild);
}
</script>
```
### 2-3.문자열로 노드 제어 : 노드 변경 API 보다 간편, 편리
- `innerHTML` :엘리먼트의 하위 엘리먼트를 보여준다
    + 엘리먼트를 담은 변수.innerHTML ="바꿀 내용";
- `outerHTML` :자기 자신을 포함해서 하위 엘리먼트까지 보여준다<br>
##### **값을 읽을때는 HTML 코드를 포함해서 문자열을 리턴, 값 변경시 HTML 코드 빼고 추가**
- `innerText`, `outerText`<br>
##### **값을 읽을때는 HTML 코드를 제외하고 문자열을 리턴, 값 변경시 HTML 코드 포함**
- `insertAdjacentHTML()` :정교한 추가를 원할 때 사용<br>
참조 : (https://opentutorials.org/course/1375/6738)
    
