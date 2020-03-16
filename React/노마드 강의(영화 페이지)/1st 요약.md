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
