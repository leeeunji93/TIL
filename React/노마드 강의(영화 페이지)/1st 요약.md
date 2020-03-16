### props

```javascript
import React from 'react';
import PropTypes from "prop-types";


function Food({name,rating}) {
  return(
  <div>
    <h1> I love {name}</h1>
    your rating {rating}/5.0
  </div>
  );

}


Food.propTypes = {
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};


const FoodLike =[{
  id:1,
  name:"kimchi",
  rating:1,
},
  {id:2,
    name:"real",
    rating:3.5,
  }]

function App() {
  return (
      <div>
        {FoodLike.map(dish =>
            <Food key={dish.id} name={dish.name} rating={dish.rating}/>
        )}
      </div>
  );

}

export default App;
```

### state

```javascript
import React, {Component} from 'react';


class App extends Component {
    state = {
      count : 0,
    };

    add = () => {
      this.setState({
        count: this.state.count +1
      });
    };

    minus = () => {
     this.setState({
       count: this.state.count -1
     });
    };

     //state 설정할 때 리액트에서 외부의 상태에 의존하지 않은 방법은!
     add = () => {
          this.setState(current => ({
            count: current.count +1
          }));
        };

        minus = () => {
         this.setState(current => ({
           count: current.count -1
         }));
        };

     


    render() {
        return (
            <div>
              <h1>The number is : {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
```

### 구조 분해

```javascript
    //기본
class   extends Component {
  state = {
    isLoading: true
  };
    render() {
        return (
            <div>
              {this.state.isLoding ? "Loading" : "we are ready" }
            </div>
        );
    }
}

 //구조 분해
class   extends Component {
  state = {
    isLoding: true
  };
    render() {
    const {isLoading} = this.state;
        return (
            <div>
              {isLoading ? "Loading" : "we are ready" }
            </div>
        );
    }
}

    //기본
getMovies = async () => {
  state = {
     isLoading: true,
     movies:[],
   };

    const movies
     = await axios.get("https://yts-proxy.now.sh/list_movies.json")
     console.log(movies.data.data.movies);

    this.setState({
    movies:movies
    });
  };


    //구조분해
     state = {
        isLoading: true,
        movies:[],
      };

getMovies = async () => {
    //movies.data.data.movies 를 구조 분해
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({
      //movies:movies
      movies, isLoading:false
    });
  };
```

### componentDidMount
```javascript
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    },6000);

  }
```



#### 여기까지 흐름 정리 
```javascript

    // 1번

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
     const movies = axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
     );
  }

    // 2번 (axios를 좀 기다리라고 명령 해야함)

  class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async() => {
    const movies =await axios.get(
                "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"});

        componentDidMount() {
            this.getMovies();
        }

 // 여기까지 정리: isLoading: true, 로딩이 출력, 이 어플리케이션이 마운트 된 후, getMovies 호출,
 여기서 가져온 데이터는 존나 많은데 이 중 movie의 데이터만 필요해 우린! 그게 다음 과정

 // 3번 우리가 원하는 데이터만 가져와보자

  class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async() => {
    const {
        data:{
            data:{movies}
        }
     } =await axios.get()"https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
       console.log(movies);
     };

     componentDidMount() {
         this.getMovies();
     }

    // 4 movies 배열을 state에 넣어주자

  class App extends React.Component {
    state = {
      isLoading: true,
      movies: []
    };
    getMovies = async() => {
    const movies =await axios.get(
                "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"});
                    //movies:movies
                this.setState({movies,isLoading:false})

        componentDidMount() {
            this.getMovies();
        }
        ```
