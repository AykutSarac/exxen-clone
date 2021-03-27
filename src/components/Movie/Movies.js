import styled from 'styled-components'
import { featured } from '../../data/movieData'
import MovieItem from './MovieItem';

const Contents = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
    margin: 3rem auto;
    width: 65%;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1em;
        width: 95%;
    }
`;


const Movies = () => {
    return (
        <Contents>
            {featured.map((movie, index) => (
                <MovieItem movie={movie} key={index} />
            ))}
        </Contents>
    )
}

export default Movies
