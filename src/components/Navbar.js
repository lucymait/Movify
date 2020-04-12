import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  constructor() {
    super()

    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }





  render() {


    return <nav className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
      <div className="logo">
        <img className="logo-img" src="images/logo.png" alt="logo" />
      </div>
      <div className="navbar-text">

        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/discover/movie">Movies</Link>
        </div>
        <div className="nav-link">
          <Link to="/movie/top_rated">Top Rated</Link>
        </div>
      </div>
    </nav>

  }
}

export default withRouter(NavBar)



