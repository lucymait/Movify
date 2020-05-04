### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Movify
by [Lucy Maitland](https://github.com/lucymait) and [Marius Zerni](https://github.com/MariusZerni)

![Welcome Page](/Images/Homepage.png)

## Overview

Movify was my second project, with General Assembly, during the software engineering immersive course. Marius and I had to build a multi-page React web app, that consumes a public API within a mini 48 hour hackathon.

Deliberation didn't take long, as we knew straight away which external API we wanted to use. As we both have a passion for movies, The Movie Database API was the perfect fit.

We built an app, where users can:
- View a list of any Movie
- Search for any Movie and view details on that specific Movie
- View a list of the Top Rated Movies

Want to find a great Movie to watch? Please feel free to check out Movify [here](https://lucymait.github.io/project-2/).

## Brief

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app should include a router** - with several "pages".
- **Include wireframes** - that you designed before building the app.
- Have **semantically clean HTML** 
- **Be deployed online** and accessible to the public.


## Technologies Used

- JavaScript (ES6)
- React.js
- HTML, JSX
- The Movie Database API
- Axios
- Webpack
- Git and GitHub
- CSS
- Bulma

## Approach

The first steps, involved thorough planning, so we knew which features we wanted to add before any start to the code:

- A home page
- A navbar
- A movies page where users can search for any Movie (from the database) using the Searchbar, as well as use pagination.
- A single movie page
- Top Rated Movies page where users can scroll through the page to see the most recent top rated movies. 

The routing of our app is:

- The home page at path "/"
- The Movies page at path "discover/movie"
- The Single Movie page at path "/movie/:id"
- The Top Rates Movies page at path "movie/top_rated"

### Homepage

Our Homepage just consisted of an image and our Navbar.

### Navbar

### Movies Page

![Insomnia](/Images/Insomnia.png)

``` js
class MoviesIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: null,
      page: 1,
      totalPages: null,
      filteredMovies: [],
      query: ''
    }
  }
```

### SearchForm

### Pagination

![Pagination](/Images/Pages.png)

### Single Movie Page

### Top Rated Movies Page

![Spinner](/Images/Spinner.png)


## Screenshots

### Homepage 
![Welcome Page](/Images/Homepage.png)

### Movies Page
![Movies Page](/Images/Movies.png)

### Single Movies Page
![Single Page](/Images/Single.png)

### Pagination
![Pagination](/Images/Pagination.png)

### Top Rated Movies
![Top Rated Page](/Images/TopRated.png)

## Potential future features

- Add other endpoints from the API e.g. Now Playing, Popular and Upcoming Movies
- Add a carousel feature
- Add trailers (video feature)

## Lessons learned

- The structure of the API can make a huge difference on the number of steps you need to take to get all the information you want! Planning is key and using insomnia first so you can see how the API is laid out.

