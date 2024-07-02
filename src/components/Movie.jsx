import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie(props) {
    const navigate = useNavigate();
    const url = "/movie/" + props.title;

    const onclickMovieItem = () => {
        navigate(url, {
            state: props
        });
    };

    return (
        <div className='movie-container' onClick={onclickMovieItem}>
            <img className="image" src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <div className='movie-info'>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
            <div className="textBox">
                <p>{props.title}</p>
                <p>{props.overview}</p>
            </div>
        </div>
    );
}
