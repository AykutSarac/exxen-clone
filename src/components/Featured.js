import styled from 'styled-components'
import {featured} from '../data/featured'

const FeaturedContents = styled.section`
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
const FeaturedItem = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    cursor: pointer;
`;

const FeaturedPoster = styled.img`
    height: auto;
    width: 100%;
`;
const FeaturedName = styled.label`
    margin: 10px auto;
    font-size: 18px;
    cursor: pointer;
`;

const Featured = () => {
    return (
        <FeaturedContents>
            {featured.map((item, index) => (
                <FeaturedItem key={index}>
                    <FeaturedPoster src={item.poster} />
                    <FeaturedName>{item.name}</FeaturedName>
                </FeaturedItem>
            ))}
        </FeaturedContents>
    )
}

export default Featured
