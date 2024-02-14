import MovieCard from "./moviecard";

function MovieList(props){

                const {movies,addStars,removeStars,toggleFav,toggleCart} =  props;
          
                return(
                    <div className="main">
                        {movies.map((movie) => (
                        <MovieCard  key = {movie.id} 
                                    movies = {movie} 
                                    addStars = {addStars}
                                    removeStars = {removeStars}
                                    toggleFav = {toggleFav}
                                    toggleCart = {toggleCart}/>
        
                    ))}              
                    </div>
            )
    }
 

export default MovieList;