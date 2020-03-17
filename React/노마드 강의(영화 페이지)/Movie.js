import React, { Component } from "react";
import PropTypes from "prop-types";


function Movie({ rank, movieNm, audiAcc }) {
    return (
        <div className="Movie">
            <h1>
                {rank}위:{movieNm}
            </h1>
            <h3>
                {audiAcc}
            </h3>
        </div>
    );
}

Movie.propTypes = {
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    audiChange: PropTypes.string.isRequired,

};

export default Movie;



