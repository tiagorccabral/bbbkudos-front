import styled from "styled-components";
import {black1} from "../../../global/styles";

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
   transition: .5s ease;
   background-color: ${black1};
   :hover {
       opacity: 0.8;
       color: ${black1};
       cursor: pointer;
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
    transition: .5s ease;
    backface-visibility: hidden;
`;

export const SubTitleFaceBox = styled.div`
    font-family: 'Patua One', cursive, sans-serif;
    color: white;
    font-size: 0.8em;
    margin-top: 0.8em;
`;

export const TitleFaceBox = styled.div`
    font-family: 'Patua One', cursive, sans-serif;
    color: white;
    font-size: 1.2em;
`;