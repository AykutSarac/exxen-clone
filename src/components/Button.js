import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
    background-color: #ffcb04;
    border: 1px solid black;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 24px;
    padding: 10px 30px;
    margin: 0px 0px 0px 15px;
    transition: 0.3s;
    display: block;
    text-align: center;
    outline: none;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 920px) {
        padding: 6px 30px;
        font-size: 18px;
    }
`;
