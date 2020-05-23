import styled from "styled-components";

export const KudosTDContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const KudosTDOption = styled.div`
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