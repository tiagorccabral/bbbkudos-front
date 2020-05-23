import styled from "styled-components";
import { black1, grey1, mediaTitleTextSize } from "../../../global/styles";

export const MediaNavItemTitle = styled.div`
    color: ${grey1};
    font-weight: bold;
    font-size: ${mediaTitleTextSize};
`;

export const MediaNavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
`;

export const MediaNavItem = styled.li`
    color: ${black1};
    font-weight: bold;
    font-size: 0.8em;
    margin-top: 0.5em;
`;

export const MediaIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const MediaLinkIcon = styled.a`
    color: inherit;
`;

export const SlackContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: no-wrap;
    justify-content: flex-start;
`;

export const SlackImageContainer = styled.img`
    height: 3em;
    width: 3em;
    margin-right: 1em;
`;

export const SlackTitlesContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SlackTitleText = styled.div`
    color: ${black1};
    font-family: "Patua One", cursive, sans-serif;
    font-weight: 500;
    font-size: 1em;
`;

export const SlackSubTitleText = styled.div`
    color: ${black1};
    font-size: 0.9em;
`;