//To use file as component must import react component
import React, {Component} from 'react';
import axios from "axios";
import MovieCard from "./MovieCard";
import './MovieCard.css';

class Movielist extends Component {
    //Creates a state variable
    constructor(props) {
        super(props);
        this.state = { movies: [] };

    }

    componentDidMount() {
        //Creates a variable to grab the url of the database with our api key
        const MOVIES_DB_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;
        const getMovies = async () => {

            //Way of getting data over the internet
            await axios.get(MOVIES_DB_URL)
                .then(response =>{
                    console.log(response);
                    //set state variable, if unsure what the data looks like console log it
                    this.setState({movies: response.data.results});
                }).catch((err) =>{
                    console.log("Fetch Error: " + err)
                });
        }

        getMovies();
    }

    render() {

        return (
            <div className="container">
                <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-2">
                    {
                        //arrow means function
                        //Map function always require return
                        this.state.movies.map(movie => {

                            return (

                                <MovieCard  movie={movie} />

                            );

                        })

                    }
                </div>
            </div>

        );
    }
}

export default Movielist;