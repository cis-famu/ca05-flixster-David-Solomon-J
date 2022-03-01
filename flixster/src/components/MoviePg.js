import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { withParams } from "../Util/Utilities";
import StarsRating from 'stars-rating';


class MoviePgs extends Component {
    constructor(props){
        super(props);
        this.state = { movie: {},videos : [] };
        this.movie = this.props.params.movie;
    }

    componentDidMount() {
        const MOVIES_URL = "https://api.themoviedb.org/3/movie/" + this.movie + "?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";
        const MOVIES_VIDEO_URL = "https://api.themoviedb.org/3/movie/" + this.movie + "/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

        const getMovie = async () => {

            //Way of getting data over the internet
            await axios.get(MOVIES_URL)
                .then(response => {
                    console.log(response);
                    //set state variable, if unsure what the data looks like console log it
                    this.setState({movie: response.data});
                }).catch((err) => {
                    console.log("Fetch Error: " + err)
                });
        }
        const getVideo = async () => {

            //Way of getting data over the internet
            await axios.get(MOVIES_VIDEO_URL)
                .then(response => {
                    console.log(response);
                    //set state variable, if unsure what the data looks like console log it
                    this.setState({videos: response.data.results});
                }).catch((err) => {
                    console.log("Fetch Error: " + err)
                });
        }

        getMovie();
        getVideo();

    }

    render() {
        let color ="";
        let rate = "";

        const ratingChanged = (newRating) => {
            console.log(newRating);
            rate = newRating;
        };
        //
        // const colorFind = (newRating) =>
        // {
        //     if (newRating < 6.0) {
        //         color = "red";
        //     } else if ((newRating > 6.1) && (newRating < 8.0)) {
        //         color = "yellow";
        //     } else {
        //         color = "green";
        //     }
        //
        //
        //     return color;
        // }

        let VideoUrl = "https://www.youtube.com/embed/";
        const altSrc = "https://image.tmdb.org/t/p/original/" + this.state.movie.poster_path;
        let Genre;

        if((this.state.videos.length > 0 ) && (this.state.movie.genres[0].name.length > 0)){
            VideoUrl += this.state.videos[0].key;
            Genre = this.state.movie.genres[0].name;
            console.log(Genre);
        }

        return (
            <div className="container">

                <div className="card Pg text-center">
                    <div className="row">
                    <div className="col-sm-5">
                        <img className="card-img" src={altSrc} className="card-img-bottom" alt="Movie Poster"/>
                    </div>
                    <div className="col-sm-6">
                {
                    this.state.videos.length > 0?
                    <iframe width="600" height="300" src={VideoUrl}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>:""
                }
                        <br/>
                        <h2>Overview</h2>
                        <p id="PgT">{this.state.movie.overview}</p>
                        <i><marquee scrollamount = "2" >
                            Title: {this.state.movie.original_title} &nbsp;&nbsp;&nbsp;
                            Genre: {
                            this.state.videos.length > 0?
                            Genre:""
                            } &nbsp;&nbsp;&nbsp;
                            Release date: {this.state.movie.release_date} &nbsp;&nbsp;&nbsp;
                            Runtime: {this.state.movie.runtime} mins &nbsp;&nbsp;&nbsp;
                            Vote Average(1-10): {this.state.movie.vote_average} &nbsp;&nbsp;&nbsp;
                        </marquee></i>
                        <br/>
                        <h2>Rate Film</h2>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>

                        <StarsRating
                            count={5}
                            onChange={ratingChanged}
                            size={50}
                            color2={"#ffd700"} />

                        </div>

                    </div>
                        <br/>
                        <Link to="/" class="btn btn-secondary"><h2>Return</h2></Link>
                </div>
                </div>
                </div>
        );

    }
}

const MoviePg = withParams(MoviePgs);
export default MoviePg;