import styled from "styled-components";
import {black1} from "../../../global/styles";

export const NavbarImage = styled.img`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter:contrast(0%);
`;

export const ProfilePictureImage = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
    border-radius: 50%;
`;

export const TooltipRoundDiv = styled.div`
    display: flex;
    width: 1em;
    height: 1em;
    margin-right: 0.9em;
    border-radius: 50%;
    background-color: ${black1}
`;

export const TooltipText = styled.div`
    color: white;
    font-size: 0.8em;
    font-weight:bolder;

    width: 100%;    
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    align-items: center;
`;