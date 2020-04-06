`block` -> 길막(영역)
가로배치가 어려워.
width height margin 이런거 다쓸 수 있음.
따로 width 설정 안하면 부모태그 맞춰서 가는거임.
설정 했으면 남은 공간은 margin 으로 자동으로 채움 .

`inline` -> 흐름 
반면 선은 흐름에 맞춰서 가는거임. 가로 배치가 쉽긴해 이 흐름을 막는 애들 극혐 그래서 
with height padaaing-top/bottom border-top/bottom margin-top/button 쓰기 불가능 

`inline-block`  기본적으로 인라인처럼 흐르지만 블록처럼 영역도 잡아줌
---

block의 가로 배치가 어렵잖아? 이걸 쉽게 해주는게 `Float` 
float 단점은 부모 height 가 따로 지정되지 않으면 자식 태그들로 되는데 그걸.. 해내기가 어렵다.  높이가 달라지고 
float 은 자식을 찾지 못한다. 
```html
  
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Float 2</title>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="card clearfix">
      <img src="./user.jpg"
       alt="Customer support" class="card-user" />
      <div class="card-content">
        <h1>RE: 안녕하세요 배송 관련 문의드립니다</h1>
        <strong>
          customer support
        </strong>
        <p>
          안녕하세요 우현님. 문의 드린 사항에 대한 답변드립니다. 지난 12...
        </p>
      </div>
    </div>
  </body>
</html>
```
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.02em;
  background-color: coral;
  width:100vh;
}

h1 {
  font-size: 16px;
  font-weight: 400;
  color: #1f2d3d;
  line-height: 1.25;
}

.card{
  max-width: 540px;
  background-color: cornflowerblue;
  padding: 20px;
}
strong {
  font-size: 14px;
  font-weight: 400;
  color: #afb3b9;
  line-height: 1.4285714286;
}

p {
  font-size: 16px;
  color: #79818b;
  line-height: 1.5;
}

.clearfix::after{
  content:"";
  display:block;
  clear:both;
}


.card-content h1{
  margin-bottom: 4px;
}

.card-content strong{
  display:block;
  margin-bottom: 12px;
}

.card-user{
  width: 44px;
  height:44px;
  border-radius:50%;
  margin-right:20px;
}

.card-user,
.card-content{
  float: left;
}


```css

```

