import React, { useEffect } from 'react'
import styled from 'styled-components'
import mobileBg from '../../assets/mobile-bg.jpg'
import desktopBg from '../../assets/Background.jpg'
import logo from '../../assets/exxen-logo.png'
import { Link } from 'react-router-dom'

const Section = styled.div`
    color: white;
    background: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    display: inline-block;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        background: url(${desktopBg});
        background-size: cover;
    }
`
const Content = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgb(17, 17, 17, 0.9);
    
    @media screen and (min-width: 768px) {
        width: 32.5rem;
        margin: 0 auto;
    }
`
const Middle = styled.div`
    width: calc(100% - 120px);
    text-align: left;
    margin: auto;

    @media screen and (min-width: 768px) {
        width: 60%;
    }
`

const Logo = styled.img`
    width: 160px;
    height: auto;
    margin: 10% auto;
`

const Form = styled.form``

const Title = styled.h1`
    margin: 1em auto .5em;
    letter-spacing: 1px;
    font-size: 2.5rem;
`
const Input = styled.input`
    width: 100%;
    background: rgb(50, 50, 50);
    border: none;
    outline: none;
    padding: 18px;
    color: white;
    margin-bottom: 1em;

    &[type='checkbox'] {
        width: auto;
        margin: 5px;
        cursor: pointer;
    }

    &[type='submit'] {
        background: #ffcb04;
        color: black;
        font-weight: 700;
        cursor: pointer;
        font-size: 1em;
        margin-top: 2em;
        text-align: center;
        width: 100%;
        
    }
`
const FormSub = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;

`

const ForgotPassword = styled.div`
    & a {
        font-size: clamp(14px, 2.5vw, 16px);
        color: white;
        font-weight: 300;
    }
`

const RememberMe = styled.div`
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-size: clamp(14px, 2.5vw, 16px);

    & label {
        font-weight: 300;
        cursor: pointer;
    }
`

const Label = styled.label`
    font-weight: 300;
    font-size: clamp(14px, 2.5vw, 16px);
    margin: 15px 0 5px;
`

const CreateAccount = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 1.5em;

    & a {
        text-decoration: none;
    }
`

const Login = () => {

    useEffect(() => {
        document.body.style.height = '100vh';
    }, []);

    return (
        <Section>
            <Content>
                <Logo src={logo} />
                <Middle>
                    <Title>Üye Girişi</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Label htmlFor="email" style={{ display: 'block' }}>E-posta</Label>
                        <Input type="email" name="email" required />
                        <Label htmlFor="password" style={{ display: 'block' }}>Şifre</Label>
                        <Input type="password" name="password" placeholder="******" required />
                        <FormSub>
                            <RememberMe>
                                <Input type="checkbox" id="rememberme" />
                                <label htmlFor="rememberme">Beni Hatırla</label>
                            </RememberMe>

                            <ForgotPassword>
                                <a href="#!">Şifremi Unuttum</a>
                            </ForgotPassword>
                        </FormSub>
                        <Input type="submit" value="Giriş Yap" />
                    </Form>
                    <CreateAccount>
                        <Link to="/" className="active">- Yeni Hesap Yarat -</Link>
                    </CreateAccount>
                </Middle>
            </Content>
        </Section>
    )
}

export default Login