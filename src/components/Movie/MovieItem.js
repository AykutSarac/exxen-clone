import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import nullImage from '../../assets/null_image_poster.png'
import PropTypes from 'prop-types'

const Movie = styled(Link)`
    display: flex;
    flex-direction: column;
    color: white;
    cursor: pointer;
    text-decoration: none;
`;

const Poster = styled.img`
    height: auto;
    width: 100%;
`;
const Name = styled.label`
    margin: 10px auto;
    font-size: 18px;
    cursor: pointer;
`;

const MovieItem = ({ movie }) => {

    const [loading, setLoading] = useState(true);

    return (
        <Movie to={`/serie/${ movie.id}`}>
            <Poster onLoad={() => setLoading(false)} src={loading ? nullImage : movie.poster } alt="movie-image" />
            <Name>{movie.name}</Name>
        </Movie>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem
