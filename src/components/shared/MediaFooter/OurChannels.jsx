import React from "react";
import {
    MediaIconsContainer,
    MediaLinkIcon,
    MediaNavItems,
    MediaNavItemTitle,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function OurChannels() {
    return (
        <>
            <MediaNavItems>
                <MediaNavItemTitle>Nossos Canais</MediaNavItemTitle>
            </MediaNavItems>
            <MediaNavItems>
                <MediaIconsContainer>
                    <MediaLinkIcon
                        href="https://pt-br.facebook.com/novatics/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                    </MediaLinkIcon>
                    <MediaLinkIcon
                        href="https://br.linkedin.com/company/novatics"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </MediaLinkIcon>
                    <MediaLinkIcon
                        href="https://twitter.com/novatics"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </MediaLinkIcon>
                    <MediaLinkIcon
                        href="https://www.instagram.com/novatics_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </MediaLinkIcon>
                </MediaIconsContainer>
            </MediaNavItems>
            <MediaNavItems>
                <MediaNavItemTitle>Novatics © 2020</MediaNavItemTitle>
            </MediaNavItems>
        </>
    );
}

export default OurChannels;
