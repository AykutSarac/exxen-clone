import devices from '../../assets/devices.svg'
import styled, { css } from 'styled-components/macro'
import { download, social } from '../../data/footerData' 

const FooterContent = styled.footer`
    margin-top: 1em;
    text-align: center;
`;

const FooterText = styled.h1`
    color: #fff;
    width: 100%;
    margin: 30px auto;
    font-weight: 600;
    padding: 0 15px;
    font-size: clamp(1rem, 2.5vw, 1.8rem);

    @media screen and (min-width: 920px) {
        padding: 0 94px;
        width: 70%;
    }
`;

const FooterImg = styled.img`
    margin: 5px;
    height: 40px;
    width: 148px;
`;

const FooterIcon = styled.img`
    margin: 5px;
`;

const imgCSS = css`
    width: 20%;
    height: auto;

    @media screen and (max-width: 1180px) {
        width: 60%;
    }
`;

const Social = styled.div`
    display: block;
    margin-top: 2em;
`;

const HelpBar = styled.div`
    background-color: #090909;
    width: 100%;
    padding: 19px 0;
    font-size: 1.3rem;
    margin: 64px 0 64px 0;
    text-align: center;
`;

const linkCSS = css`
    color: #FFCB04;
    text-decoration: none;
`;

const Footer = () => {
    return (
        <FooterContent>
            <img css={imgCSS} src={devices} alt="devices" />
            <FooterText>Hemen üye ol, cepte, tablette, bilgisayarda, istediğin zaman, istediğin yerde exxen.com, Google Play, AppGallery, Apple Store ve Apple TV’den izlemeye başla.</FooterText>
            { download.map((item, index) => (
                <a key={index} href={item.link}>
                    <FooterImg src={item.src} />
                </a>
            ))}
            <Social>
            { social.map((item, index) => (
                <a key={index} href={item.link}>
                    <FooterIcon src={item.src} />
                </a>
            ))}
            </Social>
            <HelpBar>
                <a css={linkCSS} href="/">Exxen Yardım Merkezi</a>
            </HelpBar>
        </FooterContent>
    )
}

export default Footer
