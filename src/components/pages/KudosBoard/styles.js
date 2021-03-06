import styled from "styled-components";
import { black1, grey1 } from "../../../global/styles";

export const FacesBoardContainer = styled.div`
    margin-top: 1em;
    width: 100%;
`;

export const OverlayBoxImage = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: ${black1};
    :hover {
        opacity: 0.8;
        color: ${black1};
    }
`;

export const FaceBoxContainer = styled.div`
    height: 10em;
    width: 100%;
`;

export const FaceBoxImage = styled.img`
    opacity: 1;
    height: 100%;
    width: 100%;
    transition: 0.5s ease;
    backface-visibility: hidden;
`;

export const SubTitleFaceBox = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: white;
    font-size: 0.8em;
    margin-top: 0.8em;
`;

export const TitleFaceBox = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: white;
    font-size: 1.2em;
`;

export const KudosOptionsContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3em;
    opacity: 1;
`;

export const KudosOption = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    width: 1.8em;
    height: 1.8em;
    border-radius: 50%;
    background-color: ${(props) => props.color || "yellow"};
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const KudosOptionImg = styled.img`
    width: 1em;
    height: 1em;
`;

export const AvailableKudosOptionsContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.5em;
    opacity: 1;
`;

export const AvailableKudosTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
`;

export const AvailableKudosTitle = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: ${black1};
    font-weight: bolder;
    font-size: 1em;
`;

export const AvailableKudosSubtitle = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: ${grey1};
    font-weight: bolder;
    font-size: 0.7em;
`;

export const KudosAvailableDiv = styled.div`
    position: absolute;
    display: flex;
    width: 0.7em;
    height: 0.7em;
    border-radius: 50%;
    margin-top: 0.9em;
    background-color: ${black1};
`;

export const KudosAvailableText = styled.div`
    font-family: "Patua One", cursive, sans-serif;
    color: white;
    font-weight: bolder;
    font-size: 0.5em;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    align-items: center;
`;
