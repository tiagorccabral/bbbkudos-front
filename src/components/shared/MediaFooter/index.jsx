import React from 'react';
import QuickLinks from "./QuickLinks";
import {MediaFooterContainer} from "./styles";
import OurChannels from "./OurChannels";

function MediaFooter() {
    return(
        <MediaFooterContainer>
            <QuickLinks/>
            <OurChannels/>
        </MediaFooterContainer>

    );
}

export default MediaFooter;