import React from "react";
import { FooterContainer, TextContainer, FooterText } from "./styles";

function Footer() {
    return (
        <FooterContainer>
            <TextContainer>
                <FooterText onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}>voltar ao topo</FooterText>
            </TextContainer>
        </FooterContainer>
    );
}

export default Footer;
