import React, { useEffect, useState } from 'react'
import { featured } from '../../data/movieData'
import styled, { css } from 'styled-components/macro'

const divStyle = css`
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 70%;
    margin: 15px auto 3em auto;
    height: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const PosterContent = styled.div`
    color: white;
    display: inline-block;
    min-width: 21%;
    width: 21%;

    @media screen and (max-width: 900px) {
        order: 2;
        width: 100%;

        h1 {
            text-align: center;
        }
    }
`

const h1Text = css`
    margin: 12px 0;
    color: white;
`

const InfoBox = styled.div`
    background-color: #121212;
    padding: 15px;
`

const Fragman = styled.div`
    width: 100%;
    margin: 2em;

    @media screen and (max-width: 900px) {
        order: 1;
    }
`

const frame = css`
    height: 85%;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    padding-bottom: 2em;
    
`

const MoviePage = ({ match }) => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = featured.findIndex(movie => movie.id === match.params.id);
        setMovie(featured[getMovie]);
    }, [movie, match.params.id]);

    return (
        <div css={divStyle}>
            <PosterContent>
                <h1 css={h1Text}>{movie.name}</h1>
                <img src={movie.poster} alt="poster" style={{ width: '100%', margin: '0', display: 'block' }} />
                <InfoBox>
                    {movie.type ? movie.type : "Bilinmiyor"}
                </InfoBox>
            </PosterContent>
            <Fragman>
                <h2 className="active">Fragman</h2>
                <div className="video" style={{ overflow: 'hidden', position: 'relative', paddingTop: '52%' }}>
                    <iframe css={frame} src={movie.fragman} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p style={{ color: 'white', marginTop: '2em', position: 'relative' }}>
                        {movie.info ? movie.info : 'Geçerli bir açıklama bulunamadı.'}
                    </p>
                </div>
            </Fragman>
        </div>
    )
}

export default MoviePage
