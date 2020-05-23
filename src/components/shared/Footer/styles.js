import styled from "styled-components";
import { black1, mediaTextSize } from "../../../global/styles";

export const FooterContainer = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 3.5em;
    background-color: ${black1};
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100%;
`;

export const FooterText = styled.div`
    color: white;
    font-weight: bold;
    font-size: ${mediaTextSize};
    text-align: center;
    cursor: pointer;
`;
