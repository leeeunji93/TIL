## window
> 전역객체. 전역 함수, 전역 객체를 만드는 건 윈도우 객체의 프로퍼티 혹은 메소드를 생성

## BOM
> 웹 브라우저를 제어하기 위해 브라우저에서 제공하는 객체들<br>

### 사용자와 커뮤니케이션
- alert : 사용자에게 정보를 제공, 혹은 디버깅(경고창이 실행되는 동안 다음 로직 실행이 안됨)

```javascript
<input type=“button” value=“alert” onclick=“alertfunc();”/>
sunction alertfnc(){
alert(1);
aler(2);
}
// alertfnc 함수 실행해라~ 버튼을 눌렀을때 경고창이 뜨고 그 안의 메세지는 (1)이 뜨는거임 이동안 2로 넘어가지 않음 
```
- confirm : alert과 다르게 확인과 취소 버튼이 있음.확인 누르면 true 취소 누르면 false<br>
- prompt : 사용자가 입력한 값을 자스가 받아내는 것.prompt(‘id’); 창에 id값 넣기 가능
```javascript
 function a(){
if(prompt(‘id’)===‘zoe’){
alert(‘welcom’);
}else{
aler(‘fail’);
}
}
```
---
### Location 객체
- 현재 열려있는 url을 알려주는 것. ex)console.log(location.href);<br>
- URL Parsing :url 정보를 하나 하나 따져봐야할떄 ex)console.log(location.host)
- URL 변경
  + location.hresf = 'htt[://'; <요 페이지로 이동
  + location.reload(); <홈페이지 리로드 
---
### 창 제어
- window.open 메소드
```javascript
<body>
	<input type="text" onkeypress="winmessage"(this.value">
function winopen(){
win = window.open('demo.html','ot','width=300px')}
function winmessage(msg){
win.document.getElementById('message').innerText=msg;}
</body>
//window,open 메소드는 데모.html을 파일을 담고 있는 새로운 창의 객체가 window.open 리턴값으로 저장되고 
//win 이라는 변수에 담은거임.win 객체에서 id값 메세지를 찾아서 그걸 msg값으로 바꿔준다. 여기서 msg 인자는 this.value값!(=입력값)
//그래서 id message에 hi라고 써뒀는데 이걸 hello로 바꾸면 id값이 달라진다는겨!
```
[참조1]:(https://youtu.be/30PU5GYCb4A)

**위 내용은 생활코딩 강의 내용을 정리한 것입니다**
