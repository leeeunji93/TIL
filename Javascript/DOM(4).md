### 1.Node 관계 API
- Node.childNodes : 유사 배열임
- Node.firstChild
- Node.lastChild
- Node.nextSibling : 같은 레벨에 있는 엘리먼트
- Node.previousSibling
- Node.contains()
- Node.hasChildNodes()
공백, 줄바꿈 data도 Node에 해당되기 때문에 주의!

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

    function callInsertBefore(){
        var target = document.getElementById("target");
        var li = document.createElement("li");
        var text = document.createTextNode("JS");
        li.appendChild(text);
        target.insertBefore((li.target.firstChild)) //target.firstchild(text노드)의 앞에 추
    }

</script>
</body>
```
