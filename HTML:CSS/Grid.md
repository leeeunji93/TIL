### Grid
####  display: grid;
- `grid-template-columns`: 250px 250px 250px 250px; 간편하게 하려면 `repeat(4,250px)` 함수를 이용하면 됩니다
- `grid-template-rows`: rows 설정 안해주면 grid 상자?의 height 크기는 font-size에 맞춰서 설정됩니다.
- `gap`:10px;(=row column 각각 10px 간격 주겠다.)
- `grid-template-areas` : 자식 클래스에서 지정해준 이름을 토대로 (`grid-area`) 레이아웃 설정한다.아니면    
부모 태그에서 column row 만 지정해주고 자식 태그에서 `grid-column-start`: 1; `grid-column-end`:5; 이용해서 레이아웃 설정 가능합니다.
이걸 더 간편하게 한다면 `grid-column:1/5`형식으로 해주세요. 시작과 끝난 알고 싶다면 1/-1 `span 2`; 이용하면 좀 더 쉬움
#### grid-area 
- 슬러쉬를 이용해 grid-row-start, grid-column-start, grid-row-end, grid-column-end순으로 하시
이걸 더 간편하게 한다면 `grid-column:1/5`형식으로 해주세요. 시작과 끝난 알고 싶다면 1/-1 `span 2`; 이용하면 좀 더 쉬움
**grid-template** : 위 정보를 아주 간단하게 정리해보자. 가독성이 좋음<br>
```css
.grid {
grid-template:
    [header-start] "header header header header" 1fr [header-end]
    [content-start] "content content content content" 2fr [content-end] /1fr 1fr 1fr 1fr
}
```


#### Fraction
`1fr` fraction은 사용 가능한 공간을 의미한.위에처럼 px로 안해도 됨. 비율로! 

#### justify-items align-items 기능 같음 `streth` 이용 가능 
- `place-items` y x 축에 무엇을 해줄지 써주면 위와 같은 기능 구현 가능 (각 컨테이너 하나마다 적용
- `place-content` 모든 사각형 다같이 함께 하는 

#### grid-auto-row
- 가지고 있는 클래스가 쥰나 많을때 우리가 따로 엘리먼트 설정해서 써주지 않아도 자동으로 지정해서 알려준다

#### grid-auto-column 은 grid-auto-flow 설정 해준 뒤 실행해주세요.

#### minmax(min,max)

#### `auto-fit` : 현재 element 늘려서 화면에 맞추는거(유동적인 싸이즈)  `auto-fill` : 내가 구현한 만큼만 해줍니다.(정확한 사이즈)
- grid-template-columns : repeat(auto-fill, minmax(100px,1fr))

#### max-content : 원하는 만큼 커지는 게 가능합니다.(상자 안의 텍스트 만큼?)

---
다 합쳐서 반응형 디자인을 만든다면?<br>
grid-template-columns : repeat(auto-fit,minmax(max-content,1fr));
