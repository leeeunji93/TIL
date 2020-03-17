import React, {Component} from 'react';
import axios from "axios";
import Movie from "./Movie";


const todayDate = () => {
  const getDate = new Date();
  var year = getDate.getFullYear();
  var month = getDate.getMonth() + 1;
  var day = getDate.getDate() - 1;

  if (month < 10) {
  month = `0${month}`

    //`${0}month`; 븅신..? 변수에 들가야함
  }

  if (day < 10) {
    // day = `${0}day`;
    day = `0${day}`
  }
  return year + "" + month + "" +day;
}

const key = "721875747d75a78966dfe9d1326cacfd";


class App extends Component {
  state = {
    isLoading: true,
      movies: []
  };


  getMovies = async () => {
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?sort_by=rating&key=${key}&targetDt=${todayDate()}`;

    const result =  await axios.get(url);
    const movies = result.data.boxOfficeResult.dailyBoxOfficeList;
    this.setState({
      movies,isLoading:false
    });
  };

  componentDidMount() {
   this.getMovies();
  }


  render() {
      const {isLoading,movies} = this.state;
        return(
         <div>
          {isLoading ?
              "Loading..."
              : movies.map(movie => (
                  <Movie
                      key = {movie.id}
                      rank = {movie.rank}
                      movieNm = {movie.movieNm}
                      salesAmt = {movie.audiAcc}
                  />
                  )
              )
          }
         </div>
      );
    }
}

export default App;