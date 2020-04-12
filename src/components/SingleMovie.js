import React from 'react'
import axios from 'axios'
class SingleMovie extends React.Component {
  constructor() {
    super()
    this.state = {

      movie: {
      }
    }
  }
  componentDidMount() {

    const id = this.props.match.params.id
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e79232e0769deab0fb7d2a75a986d143`)
      .then(resp => {
        console.log(resp.data)
        this.setState({ movie: resp.data })
      })
      .catch(err => console.error(err))
  }
  render() {

    return <section className="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path})`, backgroundSize: 'cover' }} >
      <div className="columns">
        <div className="column is-one-half">
          <h1 className="title">{this.state.movie.title}</h1>
          <p>{this.state.movie.overview}</p> <br />
          <p>Release Date: {this.state.movie.release_date}</p>
          <p>Vote Count: {this.state.movie.vote_count}</p>
          <p>Vote Average: ⭐️{this.state.movie.vote_average}</p>
          <p>Revenue: £{this.state.movie.revenue}</p>
          <p>Runtime: {this.state.movie.runtime} minutes</p>
        </div>
        <div className="column is-one-half">
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}></img>
        </div>
      </div>

    </section>
  }
}
export default SingleMovie