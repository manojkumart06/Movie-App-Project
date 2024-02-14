
function MovieCard (props){
        //Destrcutring the state component
        //console.log(this.props.movies)
        const {movies,addStars,removeStars,toggleFav,toggleCart} = props;
        const {title,plot,price,poster,rating,star,fav,cart} = movies;
        return(
            <div className="main">
                <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={poster}/>   
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img onClick = {() => (removeStars(movies))} alt="decrease" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                            
                            <img alt="star" className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                            <img onClick ={() => (addStars(movies))}  alt="increase" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>
                            <span className="starCount">{star}</span>
                        </div>

                        {fav ? <button onClick = {() => (toggleFav(movies))} className="unfavourite-btn">Un-favourite</button> : 
                        <button onClick = {() => (toggleFav(movies))}className="favourite-btn">Favourite</button>}
                        
                        {<button onClick = {() => (toggleCart(movies))} className= {cart ? "remove-cart" : "cart-btn"} >{cart ? "Remove from cart" : "Add to cart"}</button>}
                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
    

export default MovieCard;


//before used as state in this child component, but now we changed in the parent itself
//Binding defualt with arrow function

// addStars =()=>{
//     //Form 1 update the state, as wel as re-render the component
//     /*this.setState({
//         stars : this.state.stars + 0.5
//     })*/

//     //Form 2 using arrow function with previous state
//     if((this.state.stars) < 5){
//         this.setState((prevState) => {
//             return {
//                 stars : prevState.stars + 0.5
//             }
//         },
//         //()=>console.log("adding this.stars inside callback",this.state.stars) //To check setState as Asynchronous in nature
//         );
//     //console.log("adding this.stars",this.state.stars);
//     }
// }

// deleteStars = () => {
//     if((this.state.stars) > 0){
//         this.setState((currState) => ({
//                 stars : currState.stars - 0.5
//         }));

//         //console.log("deleting this.stars",this.state.stars);
//     }
// }

// handleFav = () => {
//     this.setState({
//         fav : !this.state.fav
//     });
// }

// handleCart = () => {
//     this.setState({
//         cart : !this.state.cart
//     });
// }