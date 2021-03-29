import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    top: 0;
    z-index: 20;
    background-color: #121212;
    width: 100%;
`;

const Input = styled.input`
    background-color: #fff;
    height: 50px;
    padding: 0px 19px;
    font-size: clamp(16px, 2.5vw, 12px);
    font-weight: 700;
    margin: 0 15px 10px 15px;
    color: #090909;
    width: calc(100% - 30px);

    &:focus {
        border: 4px solid #ffcb04;
    }

    &::placeholder {
        color: black;
    }

    @media screen and (max-width: 920px) {
        height: 40px;
    }
    
    &[type='submit'] {
        background-color: #ffcb04;
        outline: none;
        border: none;
        font-weight: 700;
        font-size: 1.2rem;
        cursor: pointer;
    }
    
`;

const Form = styled.form`
    padding-top: 1em;
    display: block;

    @media screen and (min-width: 568px) {
        padding-top: 2em;
        width: 65%;
        margin: 0 auto 0 auto;
    }
`;

const FormLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    @media screen and (max-width: 920px) {
        margin-top: 1em;
        flex-direction: column;
        display: inline;
    }
`;

const Note = styled.p`
    text-align: center;
    padding-top: 15px;
    color: #adadad;    
    font-size: 13px;
    display: block;
    padding-bottom: 15px;
`;



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [navpos, setNavpos] = useState(130);

    useEffect(() => {
        const currentPos = document.getElementById('navbar').scrollHeight;
        setNavpos(currentPos);
        window.scrollTo(0, 0);
    }, []);


    const stick = () => {
        if (window.scrollY >= navpos) {
            setNavbar(true && "sticky")
        } else {
            setNavbar(false && null)
        }
    }

    window.addEventListener("scroll", stick);

    return (
        <Nav id="navbar" className={navbar}>
            <Form>
                <FormLine>
                    <Input type="text" placeholder="Ad Soyadı" required />
                    <Input type="email" placeholder="E-Posta Adresi" required />
                    <Input type="submit" value="7 Gün Ücretsiz İzle" />
                </FormLine>
            </Form>
            <Note>Ücretsiz Deneme Sürümü, EXXEN’e yeni üyelikler için geçerlidir.</Note>
        </Nav>
    )
}

export default Navbar
