import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
// import PropTypes from "prop-types";

// 파일을 만들어서 컴포넌트를 가져올수도 있지만
// 안에서 함수로 선언해서 가져오는 방법도 있고, 이는 재사용 가능하다
// jsx라는 방법 => HTML +  javascript

// {fav}랑 props.fav 랑은 같은거임

// react class component 에서 확장한다
// render 안에 넣어서 return 해야 보인다

//
class Home extends  React.Component {
  // 데이터는 변하기 때문에 state를 사용한다
  // react는 render function을 반환하지 않는다
  // 매번 render를 호출해야 한다.
  // setState함수 선언하고 밑에서 this.함수로 사용해야 됨

  state = {
    isLoading: true,
    // 미래에 있을수도 있는 거에 대한 선언
    movies: [],
  };
  // component가 생성 되었니??

  // async 이함수는 비동기다이, async가 있어야 await를 쓸수 있다
  // axios await 해라, 왜냐면 데이터 가져오는데 시간이 필요 하니까
  getMovies = async () => {
    // data 안에 data 안에 movies안에 있는 movies를 잡음
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // movies가 들어오면, isLoading을 false로 바꿔
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  // setState를 호출할때 마다 react는 새로운 state와 함께
  // render function을 호출 함
  // 그래서 밑에 this.state.count 값이 계속 바뀔수 있음
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
