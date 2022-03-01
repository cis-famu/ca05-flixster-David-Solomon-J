import React from 'react';
import {Link} from "react-router-dom";



//When your not making API calls you can make it sateless, juh a function
function MovieCard(props) {
    let movie = props.movie;
    const altSrc = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
    const altText = movie.original_title + " image.";
    const MovieUrl = "/" + movie.id;

    return (
        <>
        <div className="col mb-5" >
            <div className="card h-100 position-relative card flex-row">
                <img className="card-img-top book-mg mx-auto pt-1" src={altSrc} className="card-img-top book-img mx-auto pt-1" alt={altText}/>
                <div className="card-body book-card-details">
                    <h4 className="card-title book-title">{movie.original_title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Rating: {movie.vote_average} <br/> Release Date: {movie.release_date}</h6>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={MovieUrl}>More...</Link>
                </div>
            </div>
        </div>

        </>
    );

}

export default MovieCard;