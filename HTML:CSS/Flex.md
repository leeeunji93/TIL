### flex란 무엇인가
- `inline-flex` 

#### flex-direction : 기본은 row. 이때 가로는 `main axis` 세로는  `cross axis` (column 은 반대)
- `row` 
- `row-reverse` 
- `column` 
- `column-reverse`

#### justify-content (`main axis` ) align-items (`cross axis` ) 
- `flex-start`
- `center` 
- `space-around`
- `space-between`

#### align-content : 여러 줄 사이의 간격을 지정한다
- `flex-start`: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
- `flex-end`: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
- `center`: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
- `space-between`: 여러 줄들 사이에 동일한 간격을 둡니다.
- `space-around`: 여러 줄들 주위에 동일한 간격을 둡니다.
- `stretch`: 여러 줄들을 컨테이너에 맞도록 늘립니다.

#### flex-wrap: wrap : flex는 너비가 바뀌어도 같은 열에 있도록 조정함(width 무의미). 이건 같은 크기를 가지도록 명령한다. (**width 크기 유지해!** )

#### flex-grow flex-shrink :child에게 줄 수 있는 property
- `flex-shrink` : 반응형때 어떤게 다른 것들보다 더 찌그러질지 정의해줍니다. flex-shrink: 2; 라면 2번이 다른 것보다 2배 줄어듭니다.
- `flex-grow` : 남아있는 빈공간을 다 가짐으로서 크기가 커집니다.
- `flex-basis` : element에게 처음 크기를 준다. 그리고 main-axis 영향을 줌 


---

1. 반응형 웹사이트 에서는 `vh`,`vw` 사용하자. (실행중인 스크린에 맞춰서 반환해준다.)
 100vh 100vw 가 전체 화면의 기준 = 1vh는 100px
2. 100vh 100% 차이는 무엇이냐? vh는 사용하는 스크린 전체의 상대길이라 스크롤바를 포함한 길이를 반환하지만
 %는 %를 쓰고 있는 요소의 부모 요소의 길이에 맞게 반환합니다. 
