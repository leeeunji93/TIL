import React from "react";

/** 첫번째 방법 */

const Movie = ({myMovieData}) => {
    console.log(myMovieData)
    const {year, title, summary, medium_cover_image, genres} = myMovieData
    const limitedGenres = genres.slice(0,3)
    return (
        <div className="movie">
            <img src={medium_cover_image} alt={title} title={title}/>
            <div className="movie_data">
                <h1 className="movie_title"><span>{title}</span> <span>{year}</span></h1>
                <ul className="movie_genre">
                    {limitedGenres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 180)}…</p>
            </div>
        </div>
    )
}

export default Movie