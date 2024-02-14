import { Component } from "react";
import MovieList from "./movielist";
import Navbar from "./navbar";
import {movies} from "./moviesdata"

class App extends Component {
  constructor(){
    super();
    this.state = {
        movies: movies,
        cartCount : 0
    }
        //Normal binding 
        //this.addStars = this.addStars.bind(this);
    }

    handleIncStar = (movie) => {
        const {movies} = this.state;
        
        const mid = movies.indexOf(movie);

        if(movies[mid].star >= 5){
            return;
        }

        movies[mid].star += 0.5

        this.setState({
            movies : movies
        })
    }

    handleDecStar = (movie) => {
        const {movies} = this.state;
        
        const mid = movies.indexOf(movie);

        if(movies[mid].star <= 0){
            return;
        }

        movies[mid].star -= 0.5

        this.setState({
            movies : movies
        })
    }

    toggleFav = (movie) => {
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav

        this.setState({
            movies
        })
    }

    toggleCart = (movie) => {
        let {movies,cartCount} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].cart = !movies[mid].cart
        //console.log(movies[mid].cart);
        if(movies[mid].cart){
          cartCount += 1;
        }else{
          cartCount -= 1;
        }

        this.setState({
            movies,
            cartCount
        })
    }

    render(){
    const {movies,cartCount} =  this.state;
    return (
          <>
          <Navbar cartCount = {cartCount}/>
          <MovieList movies = {movies}
                     addStars = {this.handleIncStar}
                     removeStars = {this.handleDecStar}
                     toggleFav = {this.toggleFav}
                     toggleCart = {this.toggleCart} />
          </>
    );
  }
}

export default App;
