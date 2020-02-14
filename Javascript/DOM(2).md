### HTMLElement
```javascript
<a id="anchor" href="제어대상을찾기(1).html">zzz</a>
<ul>
    <li>html</li>
    <li id="list">css</li>
    <li>JavaScript</li>
</ul>
<input type="button" id="button" value="button" />
<script>
var target = document. getElementById('list')
console.log(target.constructor.name); //HTMLLiElement
//객체의.생성자 함수를 알아낸 다음에.이름을 알아낸다. > HTMLElement

var target = document. getElementById('anchor')
console.log(target.constructor.name); //HTMLAnchorElement

var target = document. getElementById('button')
console.log(target.constructor.name);//HTMLInputElement

    //모두 HTMLElement 공통의 프로퍼티를 가지지만  각각의 태그의 쓰임에 따라 기능이 다르다.
    //즉 객체가 다른건 객체가 가지고 있는 프로파티가 다르다는것
    //상속 HTMLLiElement:HTMLElement(자식객체:부모객체)
    //객체가 다른 객체의 프로퍼티를 그대로 물려 받는다~
```
### HTMLCollection
리턴 결과가 복수인 경우에 사용하게 되는 객체<br>
목록이 실시간으로 반영된다는 특징!
