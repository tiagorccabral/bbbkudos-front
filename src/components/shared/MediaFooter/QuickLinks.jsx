import React from "react";
import { MediaNavItemTitle, MediaNavItem, MediaNavItems } from "./styles";

function QuickLinks() {
    return (
        <MediaNavItems>
            <MediaNavItemTitle>Links Rápidos</MediaNavItemTitle>
            <a
                href="https://www.novatics.com.br/about-us"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MediaNavItem href="">Sobre nós</MediaNavItem>
            </a>
            <a
                href="https://blog.novatics.com.br/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MediaNavItem href="">Nosso Blog</MediaNavItem>
            </a>
            <a
                href="https://www.novatics.com.br/about-us"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MediaNavItem href="">FAQ</MediaNavItem>
            </a>
        </MediaNavItems>
    );
}

export default QuickLinks;
