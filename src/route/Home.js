import React from "react";
import axios from "axios";
import Movies from "../component/Movies";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  getMoviesInf = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({
      movies: movies,
      loading: false,
    });
  };

  componentDidMount() {
    this.getMoviesInf();
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <section>
        <li className="movies">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            movies.map((data) => {
              return (
                <Movies
                  title={data.title}
                  year={data.year}
                  rating={data.rating}
                  genres={data.genres}
                  summary={data.summary}
                  img={data.medium_cover_image}
                  key={data.id}
                />
              );
            })
          )}
        </li>
      </section>
    );
  }
}

export default Home;
