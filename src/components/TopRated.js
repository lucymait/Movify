import React from 'react'
import axios from 'axios'

import MovieCard from './MovieCard'
import SearchForm from './SearchForm'
import Spinner from './Spinner'
import Footer from './Footer'

class TopRated extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: null,
      filteredMovies: '',
      query: ''
    }
    // console.log(this.state.movies)
  }

  componentDidMount() {
    setTimeout(() => {


      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e79232e0769deab0fb7d2a75a986d143&language=en-US&page=1')
        .then(response => {
          const movieImage = response.data.results
          movieImage.forEach(elem => {
            elem.imageUrl = 'https://image.tmdb.org/t/p/w500/' + elem.poster_path

          }
          )
          this.setState({
            movies: response.data,
            filteredMovies: response.data
          })
        }
        )
        .catch(error => console.error(error))
    }, 1000)
  }

  filterMovies(event) {
    const searchQuery = event.target.value
    const filteredMovies = this.state.movies.results.filter(movies => {
      const regex = new RegExp(searchQuery, 'i')
      console.log(filteredMovies)
      return movies.title.match(regex)
    })

    this.setState({
      query: searchQuery,
      filteredMovies: filteredMovies
    })
  }


  render() {
    if (!this.state.movies) return <>
      <Spinner/>
    </>
    else
      return (<>
        <SearchForm query={this.state.query} onChange={() => this.filterMovies(event)} />
        <section className="FilmsIndex">
          <div className='section'>
            <div className='container'>
              <div className='columns is-multiline is-mobile'>
                {!this.state.query ? this.state.movies.results.map((movies, i) => {
                  return <MovieCard
                    key={i}
                    id={movies.id}
                    title={movies.title}
                    imageUrl={movies.imageUrl}
                    description={movies.overview}
                    releaseDate={movies.release_date}
                    voteAverage={movies.vote_average} />
                })
                  :
                  this.state.filteredMovies.map((movies, i) => {
                    return <MovieCard
                      key={i}
                      id={movies.id}
                      title={movies.title}
                      imageUrl={movies.imageUrl}
                      description={movies.overview}
                      releaseDate={movies.release_date}
                      voteAverage={movies.vote_average} />
                  })
                }

              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
      )
  }

}

export default TopRated