import styled, { css } from 'styled-components/macro'
import { Button } from '../layout/Button'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const header = css`
    background-color: #ffcb04;
    height: fit-content;
`;

const Logo = styled.img`
    width: auto;
    height: clamp(43px, 8vw, 70px);
`;

const LandingMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 25px 15px;
    margin: 0 auto;

    @media screen and (max-width: 920px) {
        padding: 15px 15px;
        justify-content: space-between;
    }
`;

const Header = () => {
    return (
        <header css={header}>
            <LandingMenu>
                <Link to="/"><Logo src={logo} /></Link>
                <Button to="/sign-in">Üye Girişi</Button>
            </LandingMenu>
        </header>
    )
}

export default Header
